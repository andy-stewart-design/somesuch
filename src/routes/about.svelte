<script>
	import { onMount } from 'svelte';
	let isLoaded = false;
	onMount(() => {
		console.log('lwcm');
		isLoaded = true;
		return () => {
			isLoaded = false;
		};
	});
</script>

<main class="relative text-white px-8 pt-24">
	<h1 class:isLoaded class="text-blue-500 transition-colors duration-1000 delay-1000">
		About SvelteKit
	</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	<img src="/FPO-02.jpeg" alt="kjebdck" />
</main>

<style>
	.isLoaded {
		@apply text-white;
	}
</style>
