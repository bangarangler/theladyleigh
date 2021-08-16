<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import ImageLoader from '$images/ImageLoader.svelte';
	import loftNC from '$static/LoftNC.svg';
</script>

<section>
	<div class="headingWrap">
		<h1>Lady Leigh</h1>
		<picture>
			<source media="(min-width:1000px)" srcset={loftNC} />
			<ImageLoader ty="image/svg" srcset={loftNC} alt="loft nc" />
		</picture>
	</div>
	<p>
		Wherever you may be on your kinky journey, Lady Leigh’s geared up to meet and guide you. Perhaps
		you seek an exotic BDSM destination, replete with intricate bondage, mind control, and zaps from
		the violet wand? Need a soft spot to land, perhaps curled between Lady Leigh’s long legs, tongue
		arched around her painted toenails? I possess the ten loveliest toes on the planet, notes Leigh.
		Me and my amazing feet await YOU!
	</p>

	<p>
		Put yourself in Lady Leigh’s firm, capable hands. Begin the adventure! Leigh travels around the
		country, teaching at BDSM conferences and vending for her company, Soaring Eagle Creations,
		which sells dragontails, whips, and other pleasurable, painful S&M toys. I’ve been in the
		lifestyle fifteen years, she says. I’ve enjoyed the journey from sensual submissive to lifestyle
		dominatrix—and every stop in between. She owns The LoftNC, a private studio available for
		in-person sessions and play space rental; and she regularly leads community events. Lady Leigh
		has a soft spot for newbies, and particularly loves helping them find the sweetest kinky spots!
	</p>

	<p>
		Put yourself in Lady Leigh’s firm, capable hands. Begin the adventure! Leigh travels around the
		country, teaching at BDSM conferences and vending for her company, Soaring Eagle Creations,
		which sells dragontails, whips, and other pleasurable, painful S&M toys. I’ve been in the
		lifestyle fifteen years, she says. I’ve enjoyed the journey from sensual submissive to lifestyle
		dominatrix—and every stop in between. She owns The LoftNC, a private studio available for
		in-person sessions and play space rental; and she regularly leads community events. Lady Leigh
		has a soft spot for newbies, and particularly loves helping them find the sweetest kinky spots!
	</p>

	<p>
		Put yourself in Lady Leigh’s firm, capable hands. Begin the adventure! Leigh travels around the
		country, teaching at BDSM conferences and vending for her company, Soaring Eagle Creations,
		which sells dragontails, whips, and other pleasurable, painful S&M toys. I’ve been in the
		lifestyle fifteen years, she says. I’ve enjoyed the journey from sensual submissive to lifestyle
		dominatrix—and every stop in between. She owns The LoftNC, a private studio available for
		in-person sessions and play space rental; and she regularly leads community events. Lady Leigh
		has a soft spot for newbies, and particularly loves helping them find the sweetest kinky spots!
	</p>

	<p>
		Tell Lady Leigh what you need. Share every wisp of your most precious kinky dream. Dip your feet
		in, for the water’s warm and enticing. Lady Leigh’s perfect toes are glistening, beckoning.
		Begin the voyage of a sexual and erotic lifetime today!
	</p>
</section>

<style>
	section {
		margin-top: 100px;
	}
	h1 {
		background: linear-gradient(271deg, var(--pink) 30%, 50%, var(--red) 70%, var(--darkRed) 94%);
		background-clip: border-box;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.headingWrap {
		display: grid;
		grid-template-columns: repeat(2, minmax(1px, 1fr));
		place-items: center;
		margin-bottom: 100px;
	}
	picture {
		max-width: 800px;
	}
</style>
