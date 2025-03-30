<script>
  import { title } from '@data/veille';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
</script>

<CommonPage {title}>
		<p>Veille faite avec feedly et quelques serveurs discords sur les sujets suivants</p>
		<div class=".resume mt-5 flex">
			<Chip>Programmation : Rust - JavaScript / Typescript</Chip>	
			<Chip>Cybersécurité</Chip>	
			<Chip>Hardware</Chip>	
		</div>

		<p>Ces choix s'expliquent par le fait de vouloir poursuivre mes études dans la programmation et principalement dans la programmation orientée système ou embarquée, d'où l'importance portée au Hardware et à la Cybersécuritée qui est maintenant indispensable à connaître quand on réalise une applications / un logiciel ou autre</p>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: space-between;
		align-items: space-between;

		@media (max-width: 1350px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media (max-width: 850px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
