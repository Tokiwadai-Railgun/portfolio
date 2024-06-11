<script lang="ts">
	export let value = '';
	export let placeholder = '';
  export let password: boolean;
    let inputElement: HTMLInputElement;

    function focus() {
        inputElement.focus();
    }

    export { focus };
</script>

{#if password}
  <input
    type="password"
    bind:this={inputElement}
    bind:value
    {placeholder}
    class="text-[inherit] bg-transparent border-[1px] border-solid border-[var(--border)] px-[20px] py-[10px] rounded-[15px] flex-1 text-[1.15em] "
  />
{:else}
  <input
    bind:this={inputElement}
    bind:value
    {placeholder}
    class="text-[inherit] bg-transparent border-[1px] border-solid border-[var(--border)] px-[20px] py-[10px] rounded-[15px] flex-1 text-[1.15em] "
  />
{/if}

<style lang="scss">
	input {
		&:focus {
			outline: 1px solid var(--border-hover);
			background-color: var(--main-hover);
		}
    margin: 1vh;
	}
</style>
