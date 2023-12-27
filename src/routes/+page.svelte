<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>
		{data.randomNumber}
	</title>
</svelte:head>

<h1>SSR Generated: {data.randomNumber}</h1>

<img src="/favicon.png" alt="Favicon" />

<style lang="postcss">
</style>
