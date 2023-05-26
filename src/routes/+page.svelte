<script>
  import Input from "$lib/components/Input.svelte"
  import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs'
  import { map, mapObjIndexed } from 'ramda'
  import { onMount } from "svelte"
  import { capitalCase } from "change-case"
  export let data

  let { base, icing, layer, topping, color, size, decoration } = mapObjIndexed( (v,k,a) => ({...v,name: k}), data)
  let options = [ size, layer, base, icing, topping, decoration ]

</script>

<section class="hero">
  <div class="hero-body">
    <h1>Add Mo Na Yan</h1>
    <p>Joycel please tell me what to put here na po</p>
  </div>
</section>


  <!--
<Tabs>
  <TabList class="tab tab-block">
    {#each options as option }
      <Tab class="tab-item">{capitalCase(option.name)}</Tab>
    {/each}
  </TabList>

  {#each options as option}
    <TabPanel>

      <section class="ai-prompt">
        <label class="form-label" for="textarea-{option.name}">
        <p><small>This shop is powered by AI! Describe what kind of cake you want and our AI assistant will help you to make a decision!</small></p>
          <p>Describe what kind of <em>{option.name}</em> you want and the AI Assistant will choose for you! </p>
        </label>
        <textarea class="form-input" name="ai-prompt-{option.name}" id="textarea-{option.name}">Example: I would like a cake for my wife's anniversary! What kind of {option.name} should I use?</textarea>
      </section>

      <div class="flex">
      {#each option.choices as choice}
        <label class="card" style="min-height: 10em;" for={choice.name}>
          <h2>{choice.name}</h2>
          <Input name={option.name} schema={{ enum: map( (x)=>capitalCase(String(x.name)), option.choices) }} id={choice.name} radio single=true value={choice.name} hide />
        </label>
      {/each}
      </div>
  -->
      <!--
      <div class="container"><div class="columns">
      </div></div>
      <div class="card">
      </div>
      {map(x=>capitalCase(String(x.name)),option.choices)}

      { map( (x)=>capitalCase(x.name), option.choices)  }
        


      {#each option.choices as choice}
      {/each}
      {JSON.stringify(option.choices)}
      {option[]}
    </TabPanel>
  {/each}

</Tabs>
      -->


<style lang="scss">
  .hero {
    /*
    --background-image: url("https://i0.wp.com/www.society19.com/wp-content/uploads/2018/06/chocolate-cake-houston.jpg?fit=1000%2C750&ssl=1");
    background: linear-gradient( rgba(0,0,0,.5),rgba(0,0,0,.5) ), var(--background-image);
    */
    background: linear-gradient( rgba(0,0,0,.5), rgba(0,0,0,.5) ), url("https://add-mo-na-yan.vercel.app/cake.jpg") ;
    background-size: cover;
    color: var(--color-light);
    text-align: center;
    background-attachment: fixed;
  }
  .flex{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 1em;
    margin: 1em;
    > * {
      flex: 1 1 auto;
      min-width: 15em;
    }
  }
  textarea {
    width: 30em;
  }
  .ai-prompt {
    display: flex;
    max-width: 60em;
    margin: 0 auto;
    padding: 1em;
    flex-wrap: wrap;
    > * {
      display: inline;
      padding: 1em;
      flex: 1 1 20em;
    }
  }
</style>
