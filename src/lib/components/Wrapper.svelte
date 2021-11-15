<script>
	export let width = 'full';
</script>

{#if width === 'full'}
	<div class="w-full my-4 md:my-8 px-2">
		<slot />
	</div>
{/if}

{#if width === 'half'}
	<div class="flex flex-wrap my-4">
		<div class="w-full md:w-1/2 mb-4 md:mb-0 px-2">
			<slot name="l" />
		</div>
		<div class="w-full md:w-1/2 px-2">
			<slot name="r" />
		</div>
	</div>
{/if}
