<script>
	import HeroProject from '$lib/components/HeroProject.svelte';
	import IntersectionOberver from '$lib/components/IntersectionOberver.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import Image from '$lib/components/Image.svelte';
	import Video from '$lib/components/Video.svelte';

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

<IntersectionOberver>
	<main class="relative text-white bg-black px-2 md:px-6 py-16">
		<Wrapper>
			<Image dataSrc="/FPO-03.jpeg" isLazy={true} />
		</Wrapper>
		<Wrapper width="half">
			<Image slot="l" dataSrc="/FPO-04.jpeg" isLazy={true} />
			<Image slot="r" dataSrc="/FPO-05.jpeg" isLazy={true} />
		</Wrapper>
		<Wrapper>
			<Video
				src="https://player.vimeo.com/external/641529594.hd.mp4?s=098261326121d8b78a2e1ed27042eead40934e93&profile_id=175"
			/>
		</Wrapper>
	</main>
</IntersectionOberver>
