import { Configuration, OpenAIApi } from "openai";
import c from "ansi-colors"
import { capitalCase } from "change-case"
import { load } from "load-object"
import { map, filter, reduce, pipe, prop} from "ramda"
import systemMessage from "./systemMessage.js"
const cake = await load("./cakebase.yaml")
const configuration = new Configuration({
    organization: process.env.OPENAI_ORGANIZATION,
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


/*Program Starts here*/

const firstMention = pipe
    ( (message, arr) => map( x => ({ name: x, index: message.search(new RegExp(x,"i"))}), arr)
    , filter( x => x.index > -1 )
    , reduce( (acc,val) => (val.index < acc.index) ? val : acc, {index: 99999999999} )
    , prop("name")
    , (x) => capitalCase(x)
    )

const makeDecision =
  async (messages) => await openai.createChatCompletion(
      { model: "gpt-3.5-turbo"
      ,  messages: messages
      })

const decisionList = ["base", "icing", "topping"]

console.log(cake)

const options =
[ "The first option is 'base', you must make a choice between: " + cake.base.choices.map(x=>x.name)
, "The second option is 'icing', you must make a choice between: " + cake.icing.choices.map(x=>x.name)
]

const designCake =
  async (userPrompt) => {
    var messages = [ systemMessage ]
    //const wholePrompt = userPrompt + `\n` + cake.bases.prompt + " " + map( choice => choice.name, cake.bases.choices).join(', ')
    const wholePrompt = userPrompt + `\n` + options.join(" ")
    console.log(c.red(systemMessage.content))
    console.log(c.cyan(wholePrompt))
    messages.push({role: "user", content: wholePrompt })
//    console.log(cake.bases.choices)
//    console.log(messages)
    var decision = await makeDecision(messages)
    var decisionMessage = decision.data.choices[0].message.content
    var decisionName = firstMention(decisionMessage,map(choice=>choice.name,cake.base.choices))
    console.log(c.green(decisionMessage))
    console.log(c.blue(decisionName))
  
  }
  
const userPrompt = "please design for me a cake for my child's birthday. He really loves funfetti"

if (process.argv.length < 3){
  console.log("please enter some arguments")
} else {
  const description = process.argv.slice(2).join(" ")
  designCake(description)
}
/*
designCake(userPrompt)



const cakeBasePrompt = `\n\nWhat kind of cake base should be used for this occasion?  The choices are ` + map(base=>base.name, cake.bases).join(', ')
console.log(cakeBasePrompt)
const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [
    { role: "system"
    , content: "You are an assistant to an online custom cake shop that helps customers to design cakes which are suitable for their occasion and give them a fun and hassle free experience. Some of the customers are busy, don't know what they want, or just want to enjoy the experience of desiging with an AI and creating amazing cakes. Please guide the customer into finding cake customization options which are suitable to them. You should always be positive and give the customers an enjoyable experience. Please answer the questions you are prompted with for creating custom cakes. You are likely to be asked questions such as what flavor cake to use for various occasions, what decorations to use, and what kind of base should the cake be made from. When you  answer these questions, you should answer in one or two sentences why that particular choice would be great for this customer."
    },
    { role: "user"
    , content: userPrompt + cakeBasePrompt
    }]
})
console.log(completion.data.choices[0].message);
const extractOption =
  (data) => {

  }

*/

//console.log(firstMention("we recommend black Red velvet or sponge green",['red velvet', 'sponge', "green"]))
