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
		in:fade={{ duration: 500, delay: 700 }}
		out:fade={{ duration: 500 }}
		on:introstart={() => toggleModal()}
	>
		<div class="relative w-screen h-screen overflow-scroll">
			<slot />
		</div>
	</div>
{/key}
