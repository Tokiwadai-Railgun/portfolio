<script lang="ts">
	import GroupCard from "$lib/components/GroupCard/GroupCard.svelte";
  import { items } from "$lib/data/group";
</script>

<div class="mt5 projects-list">
  {#each items as groupMember}
    <GroupCard groupMember={groupMember} />
  {/each}
</div>

<style lang="scss">
	.projects-list {
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
