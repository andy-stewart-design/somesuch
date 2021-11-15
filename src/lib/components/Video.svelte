<script>
	import { onMount } from 'svelte';
	export let src;
	export let autoplay = 'true';
	export let loop = 'true';
	export let muted = 'true';
	export let width = 'full';
	let video;

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
	>
		<track kind="captions" />
		Sorry, your browser doesn't support embedded videos.
	</video>
</div>

<style>
	.square {
		padding-top: 100%;
	}
	.film {
		padding-top: 56.25%;
	}
</style>
