<script>
  import { currentCakeDesign } from  "$lib/stores.js"
  import taiPasswordStrength from "tai-password-strength"
  import { assoc, pickBy, isNotNil, omit } from "ramda"
  import { capitalCase, paramCase } from "change-case"
  import Ajv from "ajv"
  import addFormats from "ajv-formats"
  import ajvErrors from "ajv-errors"
///  const ajv = new Ajv({allErrors: true})
  const ajv = new Ajv()
  addFormats(ajv)
//  ajvErrors(ajv)

//  const updateStore = () => {
   //   currentCakeDesign.update( v => assoc('a','b',v) )
 //   }

  export let schema = { }
  let _class
  let _id
  let selected
  export { _id as id, _class as class }
  export let radio = undefined
  export let name = ""
  export let showMeter = true
  export let single = false
  export let hide = undefined
  var strengthTester = new taiPasswordStrength.PasswordStrength();
  const getPasswordStrength = (password) => strengthTester.check(password)

  export let value = ""
  //$: value = (value) => { currentCakeDesign.update( x => assoc(name,value, x) ); return value }(value)
  let touched = false
  let errorMessage = ""
  let field = { validity: { valid: true}}
  let passwordStrength = { shannonEntropyBits: 0, strengthCode: "No Password"}
  $: passwordStrength = getPasswordStrength(value)//["shannonEntropyBits"]
  $: pEntropy = passwordStrength["shannonEntropyBits"]
  const setChoice = (value) => { currentCakeDesign.update({...currentCakeDesign,a: value})}
//    console.log(setChoice(value))

  const schemaToAttributes =
    (schema) => pickBy(isNotNil,
      { minlength: schema["minLength"]
      , maxlength: schema["maxLength"]
      , pattern: schema["pattern"]
      , min: schema["min"]
      , max: schema["max"]
      , required: schema["minLength"] > 0 ? "true" : undefined
      , class: _class 
      , id: _id
      , style: hide ? "opacity: 0;" : ""
      , name: name || undefined
      , disabled: schema["readOnly"] ? true : undefined
      , placeholder:
        ( (schema["examples"] && typeof schema["examples"]) === "object" )
        ? (schema["examples"][0])
        : ("")
      })
  let attributes = schemaToAttributes(schema)

  const validate = ajv.compile(omit(["value","placeholder","name"],schema))
  $: errorMessage =
    ((value) => {
      const valid = validate(value)
      if (schema.format === "password") return pEntropy > 24 ? "" : "Too Weak"

      if(touched && !valid) return (validate.errors[0].message)
      return ""
    })(value)
  const touchedFunction = () => { touched = true }

</script>

<span class={ ("popover popover-right input-error-wrapper ") + ((errorMessage.length > 0 && touched) ? 'has-error' : '')} >
  <!--
  {JSON.stringify($currentCakeDesign)}
  -->

  {#if schema.format === "email"}
    <input bind:this={field} bind:value={value} title={errorMessage} {...attributes} on:focus={touchedFunction} type="email">
    {#if errorMessage}
      <small class="popover-container toast toast-error">{errorMessage}</small>
    {/if}


  {:else if schema.format === "password"}
    <input bind:this={field} bind:value={value} title={errorMessage} {...attributes} on:focus={touchedFunction} type="password">
    {#if showMeter}
      <meter class="meter" min=0 low=16 high=24 optimum=32 max=40 value={passwordStrength["shannonEntropyBits"]}></meter>
      {#if errorMessage}
        <!--        <small>{ pEntropy > 32 ? "Strong" : (pEntropy > 24 ? "Reasonable" : (pEntropy > 16 ? "Weak" : ( pEntropy > 8 ? "Very Weak" : "Very Very Weak")))}</small> -->
        <small class="popover-container toast toast-error">{errorMessage}</small>
      {/if}
    {:else}
      {#if errorMessage}
        <small class="popover-container toast toast-error">{errorMessage}</small>
      {/if}
    {/if}


  {:else if schema.type === "boolean" }
        <label class="form-checkbox" for="input-{paramCase(schema.title)}">{schema.description ? schema.description : capitalCase(schema.title)}
    <input bind:this={field} bind:checked={value} title={errorMessage} {...attributes} on:focus={touchedFunction} type="checkbox">
    <i class="form-icon"></i>
        </label>
    {#if errorMessage}
      <small class="popover-container toast toast-error">{errorMessage ? "please accept the terms" : ""}</small>
    {/if}


  {:else if radio === true && single }
    <input bind:this={field} bind:group={$currentCakeDesign[name]} title={errorMessage} {...attributes} on:focus={touchedFunction} type="radio" value={value}>


  {:else if schema.enum && Array.isArray(schema.enum) }
    {#if ( radio === true || (radio === undefined && schema.enum.length < 6) )}
      {#each schema.enum as choice}
        <h2>{choice}</h2>
        <input bind:this={field} bind:group={$currentCakeDesign[name]} title={errorMessage} {...attributes} on:focus={touchedFunction} type="radio" value={choice}>
      {/each}
    {:else}
      <select bind:value={value} {...attributes} class="form-select">
        {#each schema.enum as choice}
          <option value={paramCase(choice)}>{choice}</option>
        {/each}
      </select>
    {/if}


  {:else if schema.type === "string" }
    <input bind:this={field} bind:value={value} title={errorMessage} {...attributes} on:focus={touchedFunction} type="text">
    {#if errorMessage}
      <small class="popover-container toast toast-error">{errorMessage}</small>
    {/if}


  {:else}
    <input bind:this={field} bind:value={value} title={errorMessage} {...attributes} on:focus={touchedFunction} type="text">
    {#if errorMessage}
      <small class="popover-container toast toast-error">{errorMessage}</small>
    {/if}

  {/if}


</span>

<style lang="scss">
  .input-error-wrapper {
    small {
      color: white;
    }
  }
</style>
