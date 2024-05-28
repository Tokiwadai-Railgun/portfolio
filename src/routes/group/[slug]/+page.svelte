<script lang="ts">
	import TabTitle from "$lib/components/TabTitle.svelte";
  import type { GroupMember } from "$lib/types";
  export let data: {groupMember?: GroupMember}

  $: title = data.groupMember ? `${data.groupMember.name}` : 'Inconnue'
</script>


<TabTitle title={title}/>
