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
	let overview = `Founded in 2016, Wildtype is an agtech company working to create the cleanest and most sustainable seafood on the planet, starting with salmon. As a growing startup in the cell-cultured meat industry, Wildtype's focus is how to grow salmon from cells in bioreactors, an alternative to traditional fishing and farming methods. If they succeed, this technology could have massive implications for global food security, the environment, and animal welfare.`;
	let objective = `As they grow their operation, Wildtype needed a website that better matched the scale of their ambitions. Rather than continuing to rely on an out-of-the-box website builder, they worked with us to create a bespoke digital experience that would allow them to promote their mission, increase the transparency of their work, connect with chefs and restaurateurs, and appeal to consumers who may be skeptical of lab-grown meat.`;
	let solution = `This was a unicorn of a project that engaged nearly all of my skills and interests. I served as the creative director and lead designer during all phases of the project, and was heavily involved from initial scoping and project definition through quality assurance testing and launch. In addition to leading the UX/UI and visual design efforts, I illustrated, animated, and prototyped, and contributed to development and implementation.`;
</script>

<HeroProject
	{headline}
	{services}
	{specs}
	{overview}
	{objective}
	{solution}
	src="/work/wildtype/wildtype-hero.jpeg"
/>

<!-- To add: blob video, mobile screen collage -->

<IntersectionOberver>
	<main class="relative text-white bg-black px-2 py-2 xl:px-24 xl:py-12">
		<Wrapper>
			<Image dataSrc="/work/wildtype/wildtype-home-insitu.jpeg" isLazy={true} />
		</Wrapper>

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

		<Wrapper width="half">
			<Image slot="l" dataSrc="/work/wildtype/wildtype-team-01.jpeg" isLazy={true} />
			<Video
				slot="r"
				width="half"
				src="https://player.vimeo.com/external/649157759.hd.mp4?s=22efce12e3d93b5e932ea0cb855acbee96fe3903&profile_id=175"
			/>
		</Wrapper>

		<Wrapper>
			<Image dataSrc="/work/wildtype/wildtype-lifestyle-01.jpeg" isLazy={true} />
		</Wrapper>

		<Wrapper>
			<Video
				src="https://player.vimeo.com/external/641745517.hd.mp4?s=9cd2fd046c91b9f7d5ecbc847eba647d4354d414&profile_id=175"
			/>
		</Wrapper>

		<Wrapper width="half">
			<Image slot="l" dataSrc="/work/wildtype/wildtype-lifestyle-02.jpeg" isLazy={true} />
			<Image slot="r" dataSrc="/work/wildtype/wildtype-pattern-sushi.jpeg" isLazy={true} />
		</Wrapper>

		<Wrapper>
			<Image dataSrc="/work/wildtype/wildtype-ouprocess-collages.jpeg" isLazy={true} />
		</Wrapper>

		<Wrapper width="half">
			<Image slot="l" dataSrc="/work/wildtype/Wildtype-lifestyle-03.jpeg" isLazy={true} />
			<Image slot="r" dataSrc="/work/wildtype/wildtype-animatedlogo.svg" isLazy={true} />
		</Wrapper>

		<Wrapper>
			<!-- replace with collage of mobile screens -->
			<Image dataSrc="/work/wildtype/wildtype-mobile-insitu-01.jpeg" isLazy={true} />
		</Wrapper>

		<Wrapper>
			<!-- replace with collage of mobile screens -->
			<Image dataSrc="/work/wildtype/wildtype-monbile-screens.jpeg" isLazy={true} />
		</Wrapper>

		<Wrapper>
			<Video
				src="https://player.vimeo.com/external/641535658.hd.mp4?s=405546a4f2fe0970c4b4c6f421d7282ee9d2a6dd&profile_id=175"
			/>
		</Wrapper>
	</main>
</IntersectionOberver>
