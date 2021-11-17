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
	let specs = [
		'Client: Wildtype',
		'Industry: Food & Beverage',
		'Year: 2021',
		'Deliverable: Website'
	];
	let objective = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
	let approach = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
	let solution = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
</script>

<HeroProject
	{headline}
	{services}
	{specs}
	{objective}
	{approach}
	{solution}
	src="/work/wildtype/wildtype-hero.jpeg"
/>

<IntersectionOberver>
	<main class="relative text-white bg-black px-2 md:px-6 py-16">
		<Wrapper>
			<Video
				src="https://player.vimeo.com/external/641529594.hd.mp4?s=098261326121d8b78a2e1ed27042eead40934e93&profile_id=175"
			/>
		</Wrapper>

		<Wrapper>
			<Image dataSrc="/work/wildtype/wildtype-homepage.jpeg" isLazy={true} />
		</Wrapper>

		<Wrapper width="half">
			<Video
				slot="l"
				width="half"
				src="https://player.vimeo.com/external/641907863.hd.mp4?s=6b42df0c1ea9089479c991bb11227f3c4e850abc&profile_id=175"
			/>
			<Image slot="r" dataSrc="/work/wildtype/wildtype-website-badges.jpeg" isLazy={true} />
		</Wrapper>

		<Wrapper>
			<Image dataSrc="/work/wildtype/wildtype-careers.jpeg" isLazy={true} />
		</Wrapper>

		<!-- insert 50/50 here: blob crop + collages -->

		<Wrapper>
			<Image dataSrc="/work/wildtype/wildtype-lifestyle-01.jpeg" isLazy={true} />
		</Wrapper>

		<Wrapper>
			<Video
				src="https://player.vimeo.com/external/641745517.hd.mp4?s=9cd2fd046c91b9f7d5ecbc847eba647d4354d414&profile_id=175"
			/>
		</Wrapper>

		<Wrapper>
			<!-- replace with collage of mobile screens -->
			<Image dataSrc="/FPO-03.jpeg" isLazy={true} />
		</Wrapper>

		<Wrapper>
			<Video
				src="https://player.vimeo.com/external/641535658.hd.mp4?s=405546a4f2fe0970c4b4c6f421d7282ee9d2a6dd&profile_id=175"
			/>
		</Wrapper>
	</main>
</IntersectionOberver>
