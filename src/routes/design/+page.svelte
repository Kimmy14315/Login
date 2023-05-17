<script>
  import { currentCakeDesign } from  "$lib/stores.js"
  import Input from "$lib/components/Input.svelte"
  import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs'
  import { map, mapObjIndexed } from 'ramda'
  import { onMount } from "svelte"
  import { capitalCase } from "change-case"
  export let data

  let { base, icing, layer, topping, color, size, decoration } = mapObjIndexed( (v,k,a) => ({...v,name: k}), data)
  let options = [ size, layer, base, icing, topping, decoration ]

  let getExampleText = (option) => "Example: I would like a cake for my wife's anniversary! What " + option.name + " should I use?"
</script>

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
        <!--<p><small>This shop is powered by AI! Describe what kind of cake you want and our AI assistant will help you to make a decision!</small></p>-->
          <p>Describe what kind of <em>{option.name}</em> you want and the AI Assistant will choose for you! </p>
        </label>
        <textarea class="form-input" name="ai-prompt-{option.name}" id="textarea-{option.name}">{getExampleText(option)}</textarea>
        <button on:click={()=>{}}>Submit</button>
      </section>

      <div class="flex">
      {#each option.choices as choice}
        <!--
        {JSON.stringify(option)}
        {JSON.stringify($currentCakeDesign)}
        {$currentCakeDesign[option.name]}
        {$currentCakeDesign[option.name] === choice.name }
        -->
        <label class="card {$currentCakeDesign[option.name] === choice.name ? 'selected' : '' }" style="min-height: 10em;" for={choice.name}>
          <h2>{choice.name}</h2>
          <Input name={option.name} schema={{ enum: map( (x)=>capitalCase(String(x.name)), option.choices) }} id={choice.name} radio single=true value={choice.name} hide />
        </label>
      {/each}
      </div>
    </TabPanel>
  {/each}

</Tabs>


<style lang="scss">
  .selected {
    box-shadow: 0 0 0em .15em var(--color-primary);
  }
  * {
    transition: all 200ms ease-in-out;
  }
  .card:hover {
    box-shadow: 0 0 0em .15em var(--color-secondary);
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
