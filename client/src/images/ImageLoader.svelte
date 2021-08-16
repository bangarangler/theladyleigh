<script>
	import { onMount } from 'svelte';
	let nativeLoading = false;
	// Determine whether to bypass our intersecting check
	onMount(() => {
		if ('loading' in HTMLImageElement.prototype) {
			nativeLoading = true;
		}
	});
	export let srcset;
	export let alt;
	export let ty;
	import IntersectionObserver from './IntersectionObserver.svelte';
	import Image from './Image.svelte';
</script>

<IntersectionObserver once={true} let:intersecting>
	{#if intersecting || nativeLoading}
		<Image {alt} {srcset} {ty} />
	{/if}
</IntersectionObserver>
