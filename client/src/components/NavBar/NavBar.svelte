<script lang="ts">
	import { page } from '$app/stores';
	import ImageLoader from '$images/ImageLoader.svelte';
	import logo from '$static/undraw-art.svg';
	/* import logo from '$images/beforeDawnTempLogo.svg?w=80&h=80&webp'; */
	import { pages } from '$components/NavBar/NavBarPages';
	$: path = $page.path;
</script>

<header>
	<nav>
		<a href="/">
			<div><ImageLoader srcset={logo} ty="image/svg" alt="theladyleigh.com logo" /></div>
		</a>
		{#each pages as page}
			<a href={page.path} class={path === page.path ? 'current' : null} data-hover={page.hover}
				>{page.text}</a
			>
		{/each}
	</nav>
</header>

<style>
	nav {
		display: flex;
		align-items: center;
		margin-top: 12px;
		position: relative;
	}
	nav a div {
		max-height: 60px;
		max-width: 60px;
		margin-top: 10px;
	}
	@media (min-width: 1200px) {
		nav a div {
			max-height: 80px;
			max-width: 80px;
			margin-top: 15px;
		}
	}
	nav a {
		position: relative;
		letter-spacing: 1px;
		/* color: rgba(255, 255, 255, 0.5); */
		color: var(--headerLinkOpacity);
		padding: 0.1em 0;
		position: relative;
	}
	@media (min-width: 1200px) {
		nav a {
			font-size: var(--h5);
		}
	}
	nav a:before,
	nav a:after {
		position: absolute;
		-webkit-transition: all 0.35s ease;
		transition: all 0.35s ease;
	}
	nav a:before {
		bottom: 0;
		display: block;
		height: 3px;
		width: 0%;
		content: '';
		background-color: var(--headerBorder);
	}
	nav a:after {
		left: 0;
		top: 0;
		padding: 0.1em 0;
		position: absolute;
		content: attr(data-hover);
		color: var(--textColor);
		white-space: nowrap;
		max-width: 0%;
		overflow: hidden;
	}
	nav a:hover:before,
	.current:before {
		opacity: 1;
		width: 100%;
	}
	nav a:hover:after,
	.current:after {
		max-width: 100%;
	}
	@media (hover: hover) and (pointer: fine) {
		nav a:hover:before,
		.current:before {
			opacity: 1;
			width: 100%;
		}
		nav a:hover:after,
		.current:after {
			max-width: 100%;
		}
	}
	nav a:first-child:before {
		display: none;
	}
</style>
