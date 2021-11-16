<script>
	import { onMount } from 'svelte';
	let main;
	let isPaused = false;
	let offX = '0px';
	let offY = '-200px';

	onMount(() => {
		const lazyMedia = main.querySelectorAll('.lazy-media');

		let lazyMediaObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.target.nodeName === 'IMG') {
						// console.log('Image: ' + entry.isIntersecting);
						if (entry.isIntersecting) {
							let image = entry.target;
							image.src = image.dataset.src;
							setTimeout(() => {
								// if (image.complete) {
								console.log('image complete', image);
								image.classList.add('transition-fade');
								// }
							}, 500);
							lazyMediaObserver.unobserve(image);
						}
					}
					if (entry.target.nodeName === 'VIDEO') {
						// console.log('Video: ' + entry.isIntersecting);
						let video = entry.target;
						if (entry.isIntersecting && isPaused) {
							video.play();
							isPaused = false;
						} else if (!isPaused) {
							video.pause();
							isPaused = true;
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
