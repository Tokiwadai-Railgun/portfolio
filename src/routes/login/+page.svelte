<script>
	import Chip from "$lib/components/Chip/Chip.svelte";
import Input from "$lib/components/Input/Input.svelte";

</script>

<div class="container">
  <form action="">
    <Input placeholder="Nom d'utilisateur" password={false}/>
    <Input placeholder="Mot de Passe" password={true}/>
    <button type="submit"><Chip size={'1.25em'}>Se connecter</Chip></button>
  </form>
</div>


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
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  button {
  margin-top: 1vh
  }
</style>
