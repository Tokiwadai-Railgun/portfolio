<script>
  import { goto } from "$app/navigation";
	import Chip from "$lib/components/Chip/Chip.svelte";
  import Input from "$lib/components/Input/Input.svelte";

  export let data;

  $: userId = ""
  $: password = ""

  export const prerender = false;

  let loggedIn = data.connected;
  let username = data.username

  async function formSubmit() {
      const response = await fetch("/login", {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },

          body: JSON.stringify({ "userId": userId, "password": password})
      })

      if (response.ok) {
        const responseBody = await response.json()
        document.cookie = "accessToken="+responseBody+";";
        await goto("/")
      }

  }
  async function disconnect() {
    logout: async ({ cookies }) => {
      cookies.delete('session', { path: '/' });
      // Redirect or return as needed
  }
  }
</script>

{#if loggedIn}
  <div class="container">
    <h1>Connecté en tant que {username}</h1>
    <form method="POST" action="?/deleteCookie">
      <button><Chip size={'1.25em'}>Se déconnecter</Chip></button>
    </form>
  </div>
{:else}
  <div class="container">
    <form on:submit={formSubmit}>
      <Input bind:value={userId} placeholder="Identifiant" password={false}/>
      <Input bind:value={password} placeholder="Mot de passe" password={true}/>
      <button type="submit"><Chip size={'1.25em'}>Se connecter</Chip></button>
    </form>
  </div>
{/if}


<style>
  button {
    background: none;
    border: none;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 25vw; 
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  button {
    margin-top: 1vh
  }
</style>
