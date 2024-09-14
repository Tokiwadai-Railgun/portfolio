<script>
  import { title } from '@data/veille';
  export let data;
	import CommonPage from '$lib/components/CommonPage.svelte';
	import ArticleCard from '$lib/components/ArticleCard/ArticleCard.svelte';
</script>

<CommonPage {title}>
	<div class=".resume mt-5">
    {#await data.articles}
      <p>Loading Articles</p>
    {:then} 
      {#each data.articles as article}
        <ArticleCard {article}/>
      {/each}
    {/await}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;

		@media (max-width: 1350px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media (max-width: 850px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
