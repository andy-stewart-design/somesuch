<script context="module">
	export const load = async ({ page }) => ({
		props: {
			refresh: page.path
		}
	});
</script>

<script>
	import '../app.css';
	import { isModalActive } from '$lib/store/store.js';
	import { page } from '$app/stores';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import Nav from '$lib/globals/Nav.svelte';
	export let refresh;
</script>

<div class="bg-black">
	<Nav activeLink={$page.path} />
	<div
		class:isModalActive={$isModalActive}
		class="w-full transform transition-transform duration-500"
	>
		<PageTransition {refresh}>
			<slot />
		</PageTransition>
	</div>
</div>
