<script>
  import createSigningKeyPair from "$lib/createSigningKeyPair.js"
  import { toast } from "$lib/toast.js"
	import { onMount } from 'svelte'
  import { user } from "$lib/stores.js"
  import { pick, pipe, andThen, map, assoc, filter, isNotNil } from 'ramda'
  import { goto } from '$app/navigation'
  import { paramCase, capitalCase } from "change-case"
  import post from "$lib/post.js"
  import Input from "$lib/components/Input.svelte"
  let username, password, confirmPassword, infoMessage, acceptTOU, email, firstName, lastName = ""
  const baseUrl = "https://add-mo-na-yan.vercel.app"
  const url = "https://add-mo-na-yan.vercel.app/api/user/register"

  let form =
  [ { title: "email", value: "", type: "string", format: "email", minLength: 5,  examples: ["johnsmith@proton.me"]}
  , { title: "firstName", value: "", type: "string", minLength: 1, examples: ["John"] }
  , { title: "lastName" , value: "", type: "string", minLength: 1, examples: ["Smith"]}
  , { title: "password", value: "", type: "string", format: "password", minLength: 6, examples: ["Sup3r53cr3tP@55w0rd"]}
//  , { title: "confirmPassword", value: "", type: "string", format: "password", minLength: 6, examples: ["Sup3r53cr3tP@55w0rd"]}
  , { title: "acceptTOU", value: "", type: "boolean", const: true, description: "I accept the Terms of Use & Privacy Policy" }
  ]

  const register = 
    async () => {

      //const keyPair = await createSigningKeyPair({username, password})
      //const response = await post(url,pick(["username", "publicKeyBase64"],keyPair))
        /*
      if(response.status === 201) toast("Registration Successful, logged in as " + username) 
      if(response.status !== 201) toast("Registration failed, perhaps the user account is already registered.") 
      */
    }

    const handleInput =
      (formInput) => (e) => {
  //        const x = (formInput.validate(e.target.value))
//          infoMessage = (formInput.validate.errors[0].message)
 //         console.log(infoMessage)
          //infoMessage = (formInput.validate(e.target.value)).errors
          //          infoMessage = map((x)=>{x.validate(x.value);return x.validate.errors[0].message ? ""},Object.values(form))[0]
          /*
          if(e.target.type === "checkbox" ) formInput.value = e.target.checked
          const allErrors = getAllErrors(Object.values(form))
          infoMessage = allErrors[0][0].message
          console.log(infoMessage)
 */

        }
</script>

<main><div class="card">
  
<form class="form-horizontal" method="POST" on:submit|preventDefault={register}>

  <h1>Register</h1>
  <h2>Welcome</h2>
  
  {#each form as formInput}
    
    <div class="form-group">

      {#if formInput.type === "boolean"}
          <Input id="input-{paramCase(formInput.title)}" schema={formInput} />

      {:else}
        <div class="col-3 col-sm-12">
          <label class="form-label" for="input-{paramCase(formInput.title)}">{formInput.description ? formInput.description : capitalCase(formInput.title)}</label>
        </div>
        <div class="col-9 col-sm-12">
          <Input class="form-input" id="input-{paramCase(formInput.title)}" name={paramCase(formInput.title)} schema={formInput} bind:value={formInput.value} />
        </div>
      {/if}

    </div>
    
  {/each}

  <button type="submit" class="btn btn-primary btn-block">Register</button>

</form>

</div></main>

<style lang="scss">
  main{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient( rgba(0,0,0,.5),rgba(0,0,0,.5) ), url("https://wallpapercave.com/wp/wp3980262.jpg");
    background-size: cover;
  }
  .card{
    min-width: 25em;
    padding: 2em;
    background: var(--color-light);
    margin: 2 auto;
    border: .3em solid var(--color-primary);
    border-radius: .2em;
  }
</style>
