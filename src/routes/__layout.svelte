<script context="module">
	export const load = async ({ page }) => ({
		props: {
			refresh: page.path
		}
	});
</script>

<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { isModalActive } from '$lib/store/store.js';
	import { page } from '$app/stores';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import Nav from '$lib/globals/Nav.svelte';
	export let refresh;

	let isNotLoaded = true;
	onMount(() => {
		isNotLoaded = false;
	});
</script>

<div class="relative bg-black">
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

{#if isNotLoaded}
	<div
		transition:fade={{ duration: 500, delay: 500 }}
		class="fixed top-0 left-0 w-screen h-screen bg-black z-100"
	/>
{/if}
