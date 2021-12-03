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
				entries.forEach((entry, index) => {
					// console.log(index);
					if (entry.target.nodeName === 'IMG') {
						// console.log('Image: ' + entry.isIntersecting);
						if (entry.isIntersecting) {
							let image = entry.target;
							image.src = image.dataset.src;
							setTimeout(() => {
								// if (image.complete) {
								// console.log('image complete', image);
								image.classList.add('transition-fade');
								// }
							}, 500);
							lazyMediaObserver.unobserve(image);
						}
					}
					if (entry.target.nodeName === 'VIDEO') {
						// console.log('Video: ' + entry.isIntersecting);
						let video = entry.target;
						if (entry.isIntersecting && video.paused === true) {
							video.play();
							console.log(video.paused);
						} else if (!entry.isIntersecting && video.paused === false) {
							video.pause();
							console.log(video.paused);
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
