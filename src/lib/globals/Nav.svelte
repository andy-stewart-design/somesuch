<script>
	import { createEventDispatcher } from 'svelte';
	import { isModalActive } from '$lib/store/store.js';
	import AndyLogo from '$lib/svg/AndyLogo.svelte';

	export let activeLink = '';
	const dispatch = createEventDispatcher();

	let toggleModal = function () {
		isModalActive.update((val) => (val = !val));
	};

	let navLinks = [
		{ name: 'Home', link: '/' },
		{ name: 'About', link: '/about' },
		{ name: 'Work', link: '/work' },
		{ name: 'Wildtype', link: '/work/wildtype' }
	];
</script>

<a class="fixed top-8 left-4 xl:left-7 w-12 h-12 z-40 p-1" href="/">
	<AndyLogo dark={true} />
</a>

<div
	class="fixed top-0 right-0 w-1/2 h-screen p-8 pt-20 bg-blue-600 z-30 transform translate-x-full transition-transform duration-500"
	class:modalOpen={$isModalActive}
>
	<nav class="flex flex-col items-start">
		{#each navLinks as navLink}
			<a
				sveltekit:prefetch
				href={navLink.link}
				class:current={activeLink === navLink.link}
				class="w-full text-white text-xl opacity-60 hover:opacity-100 transition-opacity duration-500 mb-2"
			>
				{navLink.name}
			</a>
		{/each}
	</nav>
</div>

<button
	on:click={toggleModal}
	on:click={() => {
		dispatch('openModal');
	}}
	class="fixed top-8 right-4 xl:right-7 w-12 h-12 p-3 rounded-full z-40"
>
	<div class="w-full h-full bg-white rounded-full" />
</button>

<style>
	.current {
		@apply opacity-100;
	}
	.modalOpen {
		@apply translate-x-0;
	}
</style>
