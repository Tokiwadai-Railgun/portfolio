
<script lang="ts">
	import { base } from '$app/paths';
	import { getAssetURL } from '$lib/data/assets';
	import { title } from '@data/etudes';
	import { getTimeDiff } from '$lib/utils';

	import type { Education } from '$lib/types';

	import CardLogo from '$lib/components/Card/CardLogo.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import Markdown from '$lib/components/Markdown.svelte';
	import TabTitle from '$lib/components/TabTitle.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import Banner from '$lib/components/Banner/Banner.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import CardDivider from '$lib/components/Card/CardDivider.svelte';

	export let data: { etudes?: Education };

	$: computedTitle = data.etudes ? `${data.etudes.name} - ${title}` : title;
</script>

<TabTitle title={computedTitle} />

<div class="pb-10 overflow-x-hidden col flex-1">
	{#if data.etudes === undefined}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not load education data...</p>
		</div>
	{:else}
		<div class="flex flex-col items-center overflow-x-hidden">
			<Banner img={getAssetURL(data.etudes.logo)}>
				<div class="col-center p-y-20">
					<div class="text-0.9em">
						<MainTitle>{data.etudes.name}</MainTitle>
					</div>
					<p class="font-300 text-[var(--tertiary-text)] m-y-2 text-center">
						{data.etudes.degree} · {data.etudes.location} · {data.etudes.subjects}
					</p>
					<p class="font-300 text-0.9em text-[var(--tertiary-text)] m-y-2 text-center">
						{getTimeDiff(data.etudes.period.from, data.etudes.period.to)}
					</p>
					<div class="w-75%">
						<CardDivider />
					</div>
				</div>
			</Banner>
			<div class="pt-3 pb-1 overflow-x-hidden w-full">
				<div class="px-10px m-y-5">
					{#if data.etudes.description}
						<Markdown
							content={data.etudes.description ?? 'This place is yet to be filled...'}
						/>
					{:else}
						<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">
							<UIcon icon="i-carbon-text-font" classes="text-3.5em" />
							<p class="font-300">No description...</p>
						</div>
					{/if}
				</div>
			</div>
		</div>
	{/if}
</div>
