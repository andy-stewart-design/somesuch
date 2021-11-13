<script>
	import { fade } from 'svelte/transition';
	import { isModalActive } from '$lib/store/store.js';
	export let refresh = '';

	let toggleModal = function () {
		isModalActive.update((val) => (val = false));
	};
</script>

{#key refresh}
	<div
		in:fade={{ duration: 500, delay: 800 }}
		out:fade={{ duration: 500 }}
		on:introstart={() => toggleModal()}
	>
		<div
			class:fadePage={$isModalActive}
			class="relative w-screen h-screen overflow-scroll opacity-100 transition-opacity duration-500"
		>
			<slot />
		</div>
	</div>
{/key}

<style>
	.fadePage {
		@apply opacity-50;
	}
</style>
