<script>
	import { onMount } from 'svelte';
	let main;
	let offX = '0px';
	let offY = '0px';

	onMount(() => {
		const lazyMedia = main.querySelectorAll('.lazy-media');

		let lazyMediaObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry, index) => {
					if (entry.target.nodeName === 'IMG') {
						if (entry.isIntersecting) {
							let image = entry.target;
							image.src = image.dataset.src;
							setTimeout(() => {
								image.classList.add('transition-fade');
							}, 500);
							lazyMediaObserver.unobserve(image);
						}
					}
					if (entry.target.nodeName === 'VIDEO') {
						let video = entry.target;
						if (entry.isIntersecting && video.paused === true) {
							video.play();
						} else if (!entry.isIntersecting && video.paused === false) {
							video.pause();
						}
					}
				});
			},
			{ rootMargin: `${offY} ${offX} ${offY} ${offX}` }
		);

		lazyMedia.forEach(function (lazyMedia) {
			lazyMediaObserver.observe(lazyMedia);
		});

		return () => {
			lazyMediaObserver.disconnect();
		};
	});
</script>

<div bind:this={main}>
	<slot />
</div>
