<script lang="ts">
	import { page } from '$app/stores';
	import NavBar from '$components/NavBar/NavBar.svelte';
	/* import Footer from '$components/Footer/Footer.svelte'; */
	/* import { browser } from '$app/env'; */
	$: path = $page.path.replace('/', '');
	$: title = path !== '' ? path : 'home';
	/* if (browser) { */
	/* 	const newScript = document.createElement('script'); */
	/* 	newScript.src = 'https://embed.small.chat/TBYMF8CLXGJ010MDRR.js'; */
	/* 	document.body.appendChild(newScript); */
	/* } */
	//$: console.log('projectMetaData from allergenguardian', $projectMetaData);
	//$: console.log('previousAndNextProject from allergenguardian', $previousAndNextProject);
</script>

<svelte:head>
	<title>{title.charAt(0).toUpperCase() + title.slice(1)} | Lady Leigh</title>
	<meta
		name="description"
		content="I am Lady Leigh, a lifestyle and pro-Domme and owner of the LoftNC which is used as a personal dungeon available for sessions as well as a social club benefitting Charlotte and the surrounding areas of NC and neighboring states.  For more information on the social club please visit LoftNC.com. "
	/>
	<meta
		name="keywords"
		content="bdsm, dungeon, classes, kink, session, rope, spanking, pro-Domme"
	/>
	<meta name="author" content="Lady Leigh" />
	<meta property="og:title" content="ladyleigh.com" />
	<meta
		property="og:description"
		content="I am Lady Leigh, a lifestyle and pro-Domme and owner of the LoftNC which is used as a personal dungeon available for sessions as well as a social club benefitting Charlotte and the surrounding areas of NC and neighboring states.  For more information on the social club please visit LoftNC.com."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://theladyleigh.com" />
	<!--<meta property="og:image" content="" />-->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content="Lady Leigh" />
	<meta name="twitter:title" content={title} />
	<meta
		name="twitter:description"
		content="I am Lady Leigh, a lifestyle and pro-Domme and owner of the LoftNC which is used as a personal dungeon available for sessions as well as a social club benefitting Charlotte and the surrounding areas of NC and neighboring states.  For more information on the social club please visit LoftNC.com."
	/>
	<meta property="og:site_name" content="theladyleigh.com" />
	<meta name="twitter:image:alt" content="displaying website image for theladyleigh.com" />
</svelte:head>

<main>
	<NavBar />
	<slot />
</main>

<div class="fancyDivide" />

<!--<Footer />-->
<style>
	.fancyDivide {
		width: 100%;
		height: 3px;
		background: linear-gradient(to left, var(--pink), var(--red));
	}
</style>
