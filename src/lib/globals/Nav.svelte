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
		{ name: 'About', link: '/about' }
	];
</script>

<a class="fixed top-8 left-4 md:left-8 w-10 h-10 z-40 " href="/">
	<AndyLogo dark={true} />
</a>

<div
	class="fixed top-0 right-0 w-1/2 h-screen p-8 pt-20 bg-black z-30 transform translate-x-full transition-transform duration-500"
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
	class="fixed top-8 right-4 md:right-8 w-6 h-6 rounded-full bg-blue-600 z-40"
/>

<style>
	.current {
		@apply opacity-100;
	}
	.modalOpen {
		@apply translate-x-0;
	}
</style>
