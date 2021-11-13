<script>
	export let src = '';
	export let alt = "andy's image";
	export let isLoaded = false;

	export let headline = '';
	export let services = [];
	export let specs = [];
	export let objective = '';
	export let approach = '';
	export let solution = '';
</script>

<div class="relative block bg-black">
	<div>
		<div class="fixed top-0 left-0 w-screen h-screen overflow-hidden z-0">
			<img
				class:isLoaded
				class="w-screen h-full object-cover scale-150 opacity-50 transition-transform duration-1000 delay-1000 ease-out"
				{src}
				{alt}
			/>
		</div>
		<div class="relative flex items-end w-full md:h-screen px-2 py-4 md:px-6 md:py-8">
			<div class="flex flex-wrap w-full">
				<div class="w-full md:w-1/3 h-28 md:h-auto pl-2 pr-8 mb-8 md:mb-0">
					<h1 class="relative text-3xl text-white">{headline}</h1>
				</div>
				<div class="w-full md:w-1/3 pl-2 pr-8 mb-8 md:mb-0">
					<h3 class="relative text-base text-white border-b-1 pb-2 mb-4">Services</h3>
					<ul class="relative text-base text-white">
						{#each services as service}
							<li class="mb-1">{service}</li>
						{/each}
					</ul>
				</div>
				<div class="w-full md:w-1/3 pl-2 pr-8 mb-8 md:mb-0">
					<h3 class="relative text-base text-white border-b-1 pb-2 mb-4">Project Specs</h3>
					<ul class="relative text-base text-white">
						{#each specs as spec}
							<li class="mb-1">{spec}</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
		<div class="relative flex flex-wrap w-full px-2 md:px-6 pb-24 md:py-24">
			<div class="flex flex-row md:flex-col w-full md:w-1/3 pl-2 pr-8 mb-8 md:mb-0">
				<div class="w-8 md:w-auto h-auto md:h-8 md: mb-4">
					<p
						class="flex justify-center items-center w-8 h-8 border-1 rounded-full text-xs text-white"
					>
						01
					</p>
				</div>
				<div class="pl-4 pt-1 md:p-0">
					<h3 class="text-base text-white mb-4">Objective</h3>
					<p class="text-white">{objective}</p>
				</div>
			</div>
			<div class="flex flex-row md:flex-col w-full md:w-1/3 pl-2 pr-8 mb-8 md:mb-0">
				<div class="w-8 md:w-auto h-auto md:h-8 md: mb-4">
					<p
						class="flex justify-center items-center w-8 h-8 border-1 rounded-full text-xs text-white"
					>
						02
					</p>
				</div>
				<div class="pl-4 pt-1 md:p-0">
					<h3 class="text-base text-white mb-4">Approach</h3>
					<p class="text-white">{approach}</p>
				</div>
			</div>
			<div class="flex flex-row md:flex-col w-full md:w-1/3 pl-2 pr-8 mb-8 md:mb-0">
				<div class="w-8 md:w-auto h-auto md:h-8 md: mb-4">
					<p
						class="flex justify-center items-center w-8 h-8 border-1 rounded-full text-xs text-white"
					>
						03
					</p>
				</div>
				<div class="pl-4 pt-1 md:p-0">
					<h3 class="text-base text-white mb-4">Solution</h3>
					<p class="text-white">{solution}</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.isLoaded {
		@apply scale-100;
	}
</style>
