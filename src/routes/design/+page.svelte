<script>
  import { currentCakeDesign } from  "$lib/stores.js"
  import Input from "$lib/components/Input.svelte"
  import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs'
  import { map, mapObjIndexed } from 'ramda'
  import { onMount } from "svelte"
  import { capitalCase, snakeCase } from "change-case"
  //  import { baseChocolate } from "$lib/assets/base_chocolate.png"
  //  import { selectedPanel }  from "
  export let data

  let { base, icing, layer, topping, color, size, decoration } = mapObjIndexed( (v,k,a) => ({...v,name: k}), data)
  let options = [ base, icing, size, layer, topping, decoration ]

  let getExampleText = (option) => "Example: I would like a cake for my wife's anniversary! What " + option.name + " should I use?"
</script>

<div class="product-preview">
  <img src={$currentCakeDesign.base ? "/base_" + snakeCase($currentCakeDesign.base) + ".png" : ""}>
</div>

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
          <figure>
            {choice.name.toLowerCase()}
            <div class="cake-base"><img src={"/" + snakeCase(option.name) + "_" + snakeCase(choice.name) + ".png"}></div>
            <div class="cake-icing"></div>
            <div class="cake-size"></div>
            <div class="cake-layer"></div>
            <div class="cake-topping"></div>
            <div class="cake-decoration"></div>
          </figure>

        </label>
      {/each}
      </div>
    </TabPanel>
  {/each}

</Tabs>


<style lang="scss">
  figure {
    --image-size: 8em;
    height: var(--image-size);
    width: var(--image-size);
    position: relative;

    > * {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-size: contain;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .cake-base {
      //      background-image: url("$lib/assets/base_chocolate.png");
    }
  }
  :global(.svelte-tabs *) {
    border-bottom: none;
    transition: all 500ms ease-in-out;
    transition-duration: 800ms;
  }
  :global(.svelte-tabs__tab-list) {
    counter-reset: step;
    border: none;
    border-bottom: none !important;
  }
  :global(.svelte-tabs li.svelte-tabs__tab:before) {
    content: counter(step) ". ";
  }
  :global(.svelte-tabs li.svelte-tabs__tab) {
    counter-increment: step;
    background: var(--color-primary);
    color: white;
    clip-path: polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%);
    width: 11em;
    padding: .5em 2em;
    border-bottom: 0 solid var(--color-primary);
    margin-right: -1em; 
  }
  :global(.svelte-tabs li.svelte-tabs__selected) {
    background: var(--color-secondary);
    color: var(--color-primary);
    color: white;
  }
  :global(.svelte-tabs div.svelte-tabs__tab-panel) {}

  .selected {
    box-shadow: 0 0 0em .15em var(--color-primary);
  }
  * {
    transition: all 500ms ease-in-out;
    transition-duration: 800ms;
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
  .product-preview {
    height: 20em;
    img { height: 100%;
    display: block;
    margin: 0 auto;
  }
  }
</style>
