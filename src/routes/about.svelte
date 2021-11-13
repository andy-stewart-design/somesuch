<script>
	import { onMount } from 'svelte';
	import HeroProject from '$lib/components/HeroProject.svelte';

	let isLoaded = false;
	onMount(() => {
		isLoaded = true;
		return () => {
			isLoaded = false;
		};
	});

	let headline = 'Promoting the Future of Seafood';
	let services = [
		'Visual Design',
		'Prototyping',
		'Illustration',
		'Animation',
		'Creative Coding',
		'UX / IA / QA'
	];
	let specs = ['Client: Glaze', 'Industry: Food & Beverage', 'Year: 2021', 'Deliverable: Website'];
	let objective = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
	let approach = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
	let solution = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
</script>

<HeroProject {headline} {services} {specs} {objective} {approach} {solution} src="/FPO-05.jpeg" />
<main class="relative text-white bg-black px-8 py-24">
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
