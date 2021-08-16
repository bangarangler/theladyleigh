<script>
	export let srcset;
	export let alt;
	export let ty;
	import { onMount } from 'svelte';
	let loaded = false;
	let thisImage;
	onMount(() => {
		thisImage.onload = () => {
			loaded = true;
		};
	});
</script>

<img {srcset} {alt} type={ty} class:loaded bind:this={thisImage} loading="lazy" />

<style>
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		border-radius: 12px;
		opacity: 0;
		filter: blur(1.5rem);
		transition: all 1200ms ease-out;
	}
	img.loaded {
		width: 100%;
		height: 100%;
		object-fit: contain;
		opacity: 1;
		filter: blur(0);
	}
</style>
