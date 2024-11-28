<script lang="ts">
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import Markdown from '$lib/components/Markdown.svelte';

  export let data: {content: string};
</script>

<MainTitle>À Propos</MainTitle>
<Markdown content={data.content} />

