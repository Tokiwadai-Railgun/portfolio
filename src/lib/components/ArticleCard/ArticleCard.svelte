<script lang="ts">
	import type { Article } from '$lib/types';
	import Card from '../Card/Card.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import { base } from '$app/paths';
	import Chip from '../Chip/Chip.svelte';
  import CardDivider from '../Card/CardDivider.svelte';

	export let article: Article;
</script>

<Card color={article.color} href={`${base}/veille/${article.slug}`}>
	<div class="m-t-20px row justify-between items-center sm:w-150px md:w-200px">
		<CardTitle title={article.title} />
	</div>
	<CardDivider />
	<div
		class="row m-b-15px justify-between text-[var(--secondary-text)] text-0.9em font-italic font-300"
	>
    {#each article.tags as tag}
      <Chip>{tag}</Chip>
    {/each}
	</div>
</Card>

