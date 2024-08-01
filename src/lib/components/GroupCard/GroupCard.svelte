<script lang="ts">
	import Assets, { getAssetURL } from "$lib/data/assets";
  import { base } from "$app/paths";
  import type { GroupMember } from "$lib/types";
	import Card from "../Card/Card.svelte";
	import CardDivider from "../Card/CardDivider.svelte";
	import CardLogo from "../Card/CardLogo.svelte";
	import CardTitle from "../Card/CardTitle.svelte";
	import UIcon from "../Icon/UIcon.svelte";
	import Chip from "../Chip/Chip.svelte";

  export let groupMember: GroupMember;
  export let downloadCV: string;
</script>

<Card href={`${base}/group/${groupMember.slug}`}>
  <CardLogo src={getAssetURL(groupMember.photo)} alt={groupMember.name} size={40} radius={'0'}/>
  <div class="m-t-20px row justify-between items-center">
    <CardTitle title={groupMember.name}/>
  </div>
  <CardDivider/>
	<div class="col sm:h-100px md:h-160px">
		<p
			class="text-[0.95em] text-[var(--secondary-text)] font-300 m-t-20px m-b-40px flex-1 line-clamp-3"
		>
			{groupMember.description}
		</p>
  </div>
  <CardDivider />
  <div class="row flex-wrap card-bottom">
    <p>
      <UIcon icon={"i-carbon-building"} />
      {groupMember.company.name}
    </p>
    {#if downloadCV == groupMember.slug}
      <!-- TODO : afficher uniquement si nécessaire-->
      <a href={`${base}/files/${groupMember.cv}`}>
        <Chip size={'0.25em'}>Télécharger le CV</Chip>
      </a>
    {/if}
  </div>
</Card>

<style>
  .card-bottom {
    display: flex;
    justify-content: space-between;
  }
</style>
