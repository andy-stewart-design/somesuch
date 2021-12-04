<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	export let src;
	export let autoplay = 'true';
	export let loop = 'true';
	export let muted = 'true';
	export let width = 'full';
	let video;
	let paused = true;

	onMount(() => {
		video.src = video.dataset.src;
	});
</script>

<div class:square={width === 'half'} class:film={width === 'full'} class="relative w-full">
	<video
		bind:this={video}
		{autoplay}
		{loop}
		{muted}
		class="lazy-media absolute top-0 left-0 w-full h-full object-cover"
		src=""
		data-src={src}
		on:click={video.play()}
		bind:paused
	>
		<track kind="captions" />
		Sorry, your browser doesn't support embedded videos.
	</video>
	{#if paused}
		<div
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-40 h-40 rounded-full bg-blue-500 bg-opacity-80 text-white"
			on:click={video.play()}
			transition:fade={{ duration: 250 }}
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64"
				><path fill="none" d="M0 0h24v24H0z" /><path
					d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z"
					fill="currentColor"
				/></svg
			>
		</div>
	{/if}
</div>

<style>
	.square {
		padding-top: 100%;
	}
	.film {
		padding-top: 56.25%;
	}
</style>
