<script>
	export let src = 'https://via.placeholder.com/1920x1080';
	export let dataSrc = '';
	export let isLazy = false;
	export let alt = "andy's image";
</script>

<div class="bg-blue-100">
	<img
		class:lazy-media={isLazy === true}
		class:opacity-0={isLazy === true}
		class="transition-opacity duration-1000 delay-100"
		{src}
		data-src={dataSrc}
		{alt}
	/>
</div>
