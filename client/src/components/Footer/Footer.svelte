<script lang="ts">
	import ImageLoader from '$images/ImageLoader.svelte';
	import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
	import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
	import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte';
	import fetLife from '$static/fetlife.svg';
	interface FooterSocialType {
		id: number;
		icon: any;
		path: string;
		text: string;
	}
	const footerSocial: FooterSocialType[] = [
		{
			id: 0,
			icon: FaInstagram,
			path: 'https://www.instagram.com/bangarangler/?hl=en',
			text: 'instagram'
		},
		{
			id: 1,
			icon: FaTwitter,
			path: 'https://twitter.com/bangarangler',
			text: 'twitter'
		},
		{
			id: 2,
			icon: FaFacebook,
			path: 'https://www.facebook.com/TheLoftNC',
			text: 'facebook'
		}
	];
</script>

<footer>
	<h3>The Lady Leigh</h3>
	<div class="footerSocialWrapper">
		{#each footerSocial as fs}
			<a href={fs.path} class={fs.text} target="_blank" rel="external"
				><svelte:component this={fs.icon} /></a
			>
		{/each}
		<a href={'https://fetlife.com/groups/63797'} class="fetLife" target="_blank" rel="external">
			<picture class="fetWrap">
				<source media="(min-width:1000px)" srcset={fetLife} />
				<ImageLoader ty="image/svg" srcset={fetLife} alt="fetLife logo" />
			</picture>
		</a>
	</div>
	<div class="copy">
		<p>&copy; 2021 The Lady Leigh</p>
	</div>
</footer>

<style>
	footer {
		display: grid;
		grid-template-rows: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 0.5fr);
		grid-template-areas:
			'name'
			'social'
			'copy';
		place-items: center;
	}
	footer h3 {
		grid-area: 'name';
		padding: 1.2rem;
		font-family: var(--slantText);
		border: 6px solid;
		background: -webkit-gradient(linear, right top, left bottom, from(var(--red)), to(var(--pink)));
		background: linear-gradient(to bottom left, var(--red), var(--pink));
		background-clip: border-box;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-border-image: -webkit-gradient(
				linear,
				right top,
				left bottom,
				from(var(--red)),
				to(var(--pink))
			)
			1;
		-webkit-border-image: linear-gradient(to bottom left, var(--red), var(--pink)) 1;
		border-image: -webkit-gradient(
				linear,
				right top,
				left bottom,
				from(var(--darkRed)),
				to(var(--pink))
			)
			1;
		border-image: linear-gradient(to bottom left, var(--red), var(--pink)) 1;
		text-align: center;
		max-width: 290px;
		margin: 20px auto;
		font-size: var(--h4);
	}
	@media (min-width: 500px) {
		footer h3 {
			max-width: unset;
		}
	}
	@media (min-width: 800px) {
		footer h3 {
			padding: 1.5rem;
			font-size: var(--h3);
		}
	}
	@media (min-width: 1200px) {
		footer h3 {
			padding: 1.5rem;
			font-size: var(--h3);
		}
	}
	footer .light {
		padding: 1.5rem;
		font-family: var(--slantText);
		border: 6px solid;
		background: -webkit-gradient(linear, right top, left bottom, from(var(--aqua)), to(#7a00cc));
		background: linear-gradient(to bottom left, var(--aqua), #7a00cc);
		background-clip: border-box;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-border-image: -webkit-gradient(
				linear,
				right top,
				left bottom,
				from(#7a00cc),
				to(var(--aqua))
			)
			1;
		-webkit-border-image: linear-gradient(to bottom left, #7a00cc, var(--aqua)) 1;
		border-image: -webkit-gradient(linear, right top, left bottom, from(#7a00cc), to(var(-aqua))) 1;
		border-image: linear-gradient(to bottom left, #7a00cc, var(--aqua)) 1;
		text-align: center;
		width: max-content;
		margin: 20px auto;
	}
	footer .footerSocialWrapper {
		--iconSize: 40px;
		grid-area: 'social';
		width: 90%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	@media (min-width: 800px) {
		footer .footerSocialWrapper {
			--iconSize: 50px;
			width: 95%;
		}
	}
	@media (min-width: 1200px) {
		footer .footerSocialWrapper {
			--iconSize: 60px;
			width: 100%;
		}
	}
	.instagram {
		color: #5851db;
		width: var(--iconSize);
	}
	footer a:hover {
		color: var(--pink);
		transition: all 0.5s linear;
		transform: skew(-5deg);
	}
	@media (hover: hover) and (pointer: fine) {
		footer a:hover {
			color: var(--pink);
			transition: all 0.5s linear;
			transform: skew(-5deg);
		}
	}
	.facebook {
		color: #3b5998;
		width: var(--iconSize);
	}
	.twitter {
		color: #1da1f2;
		width: var(--iconSize);
	}
	.fetWrap {
		max-width: 40px;
		max-height: 40px;
	}
	.fetLife {
		width: var(--iconSize);
		margin-bottom: 5px;
	}
	.fetLife:hover {
		color: var(--pink);
	}
	.copy {
		grid-area: 'copy';
	}
	.copy p {
		color: var(--pink);
		font-size: var(--h6);
	}
	@media (min-width: 800px) {
		.copy p {
			font-size: var(--h5);
		}
	}
	@media (min-width: 1200px) {
		.copy p {
			font-size: var(--h4);
		}
	}
</style>
