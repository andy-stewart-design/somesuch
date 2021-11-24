<script>
	export let width = 'full';
</script>

{#if width === 'full'}
	<div class="w-full my-24 px-2">
		<slot />
	</div>
{/if}

{#if width === 'half'}
	<div class="flex flex-wrap my-24">
		<div class="w-full md:w-1/2 mb-24 px-2 md:mb-0 md:pr-3">
			<slot name="l" />
		</div>
		<div class="w-full md:w-1/2 px-2 md:pl-3">
			<slot name="r" />
		</div>
	</div>
{/if}
