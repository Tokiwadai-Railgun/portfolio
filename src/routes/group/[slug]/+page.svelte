<script lang="ts">
  import UIcon from "$lib/components/Icon/UIcon.svelte";
  import Banner from "$lib/components/Banner/Banner.svelte";
  import CardDivider from "$lib/components/Card/CardDivider.svelte";
  import Markdown from "$lib/components/Markdown.svelte";
  import MainTitle from "$lib/components/MainTitle/MainTitle.svelte";
	import TabTitle from "$lib/components/TabTitle.svelte";
  import { getAssetURL } from "$lib/data/assets";
  import type { GroupMember } from "$lib/types";
  export let data: {groupMember?: GroupMember}

  $: title = data.groupMember ? `${data.groupMember.name}` : 'Inconnue'
</script>


<TabTitle title={title}/>

<div class="pb-10 overflow-x-hidden col flex-1">
	{#if data.groupMember === undefined}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not load groupMember data...</p>
		</div>
	{:else}
		<div class="flex flex-col items-center overflow-x-hidden">
			<Banner img={getAssetURL(data.groupMember.photo)}>
				<div class="col-center p-y-20">
					<div class="text-0.9em">
						<MainTitle>{data.groupMember.name}</MainTitle>
					</div>
					<p class="font-300 text-[var(--tertiary-text)] m-y-2 text-center">
						{data.groupMember.company.name} · {data.groupMember.specialite}
					</p>
					<div class="w-75%">
						<CardDivider />
					</div>
				</div>
			</Banner>
			<div class="pt-3 pb-1 overflow-x-hidden w-full">
				<div class="px-10px m-y-5">
					{#if data.groupMember.description}
						<Markdown
							content={data.groupMember.description ?? 'This place is yet to be filled...'}
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
