<script>
  import createSigningKeyPair from "$lib/createSigningKeyPair.js"
	import { onMount } from 'svelte'
  import { user } from "$lib/stores.js"
  let username, password

  const setUsername = (response) => { $user =  response.username; console.log(response); console.log(response.username) }

const login =
  async (e) => {
    const clientSideUser = 
      { username: e.target.username.value
      , password: e.target.password.value
      }
    const signingKeyPair = await createSigningKeyPair(clientSideUser)
    const user = 
      { username: clientSideUser.username
      , publicKeyBase64: signingKeyPair.publicKeyBase64
      }
    const response = await fetch("https://add-mo-na-yan.vercel.app/api/user/login",
        { method: "POST"
        , mode: "cors"
        , cache: "no-cache" 
        , credentials: "same-origin"
        , headers: { "Content-Type": "application/json" }
        , body: JSON.stringify(user)
        })
      console.log(response)
    return response
    }

    onMount(async () => {})

</script>
<h1>Login</h1>
<h2>Welcome {$user}</h2>
<form method="POST" on:submit|preventDefault={login}>
  <label>
    <img src="/user.svg" alt="Icon of User">
    <input type="text" name="username" bind:value="{username}">
  </label>
  <label>
    <img src="/shield.svg" alt="Icon of a Shield representing password">
    <input type="password" name="password" bind:value="{password}">
  </label>
  <button type="submit">Login</button>
</form>
