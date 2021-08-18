<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import ImageLoader from '$images/ImageLoader.svelte';
	/* import loftNC from '$static/LoftNC.svg'; */
	import samIlu from '$static/cust_art.svg';
	import leigh2 from '$static/leigh2.jpg';
	import leigh3 from '$static/leigh3.jpg';
	import leigh4 from '$static/leigh4.jpg';
	import GiSlaveryWhip from 'svelte-icons/gi/GiSlaveryWhip.svelte';
	import GiWhip from 'svelte-icons/gi/GiWhip.svelte';
	import GiCastle from 'svelte-icons/gi/GiCastle.svelte';
</script>

<section>
	<div class="headingWrap">
		<h1>Lady Leigh</h1>
		<picture class="headingImgWrap">
			<source media="(min-width:1000px)" srcset={samIlu} />
			<ImageLoader
				ty="image/svg"
				srcset={samIlu}
				alt="Amazing Illustration from Samji_illustrator"
			/>
		</picture>
	</div>
	<div class="bodyText">
		<p>
			Wherever you may be on your kinky journey, Lady Leigh’s geared up to meet and guide you.
			Perhaps you seek an exotic BDSM destination, replete with intricate bondage, mind control, and
			zaps from the violet wand?
		</p>
		<div class="iconWrap">
			<span class="icons">
				<GiSlaveryWhip />
			</span>
			<span class="icons"><GiCastle /></span>
			<span class="icons"><GiWhip /></span>
		</div>

		<p>
			Need a soft spot to land, perhaps curled between Lady Leigh’s long legs, tongue arched around
			her painted toenails? I possess the ten loveliest toes on the planet, notes Leigh. Me and my
			amazing feet await YOU!
		</p>
		<div class="pic card">
			<picture>
				<source media="(min-width:1000px)" srcset={leigh2} />
				<ImageLoader ty="image/svg" srcset={leigh2} alt="lady leigh" />
			</picture>
		</div>

		<h2>Put yourself in Lady Leigh’s firm, capable hands.</h2>
		<div class="buttonWrap">
			<button>Begin the adventure!</button>
		</div>
		<p>
			Leigh travels around the country, teaching at BDSM conferences and vending for her company,
			<a href="http://www.soaringeaglecreations.com/" target="_blank" rel="external"
				>Soaring Eagle Creations</a
			>, which sells dragontails, whips, and other pleasurable, painful S&M toys. I’ve been in the
			lifestyle fifteen years, she says. I’ve enjoyed the journey from sensual submissive to
			lifestyle dominatrix—and every stop in between.
		</p>
		<p>
			She owns <a href="https://loftnc.com/" target="_blank" rel="externnal">The LoftNC</a>, a
			private studio available for in-person sessions and play space rental; and she regularly leads
			community events. Lady Leigh has a soft spot for newbies, and particularly loves helping them
			find the sweetest kinky spots!
		</p>
		<div class="iconWrap">
			<span class="icons">
				<GiSlaveryWhip />
			</span>
			<span class="icons"><GiCastle /></span>
			<span class="icons"><GiWhip /></span>
		</div>

		<p>
			Suckle your way into heavenly bliss with Lady Leigh. Wrap your lips around her stilettos,
			punishing boots, and drool-worthy 5-inch pumps. Relax and regress with Mommy Leigh, for she
			adores adult diaper play, littles, brats, role play, and more.
		</p>

		<div class="pic card">
			<picture>
				<source media="(min-width:1000px)" srcset={leigh4} />
				<ImageLoader ty="image/svg" srcset={leigh4} alt="lady leigh feet ; )" />
			</picture>
		</div>
		<p>
			Go deeply into submission while experiencing the sensual domination of your dreams, for Lady
			Leigh’s silky voice will lull you into total surrender. I love to bring a strong, submissive
			man to his knees with the lightest touch and softest words, she notes. Kneel. Worship …
		</p>

		<p>
			Lady Leigh understands the cries that resound from deep within: the need to be lovingly,
			sensually carried into a state of abandon; the need to have your limits pushed by the whip and
			paddle; the desire to be transformed into a simpering sissy, to be humiliated while
			cross-dressed and spread eagle.
		</p>
		<div class="iconWrap">
			<span class="icons">
				<GiSlaveryWhip />
			</span>
			<span class="icons"><GiCastle /></span>
			<span class="icons"><GiWhip /></span>
		</div>
		<p>
			Her vast specialties include tease and denial, sensation play (Have you ever been to sub-space
			without impact play? she asks), smothering, foot worship (of course!), sissy and slut
			training, mummification, sounds, cock and ball torture, and much, much more. Anal bitches with
			voracious appetites and pulsing rosebuds particularly thrill Lady Leigh. Don’t see what you’re
			looking for? she smiles. Just ask! Are you ready to be over my knee, at my feet, or …
		</p>

		<div class="pic card">
			<picture>
				<source media="(min-width:1000px)" srcset={leigh3} />
				<ImageLoader ty="image/svg" srcset={leigh3} alt="lady leigh feet ; )" />
			</picture>
		</div>
		<p>
			Tell Lady Leigh what you need. Share every wisp of your most precious kinky dream. Dip your
			feet in, for the water’s warm and enticing. Lady Leigh’s perfect toes are glistening,
			beckoning. Begin the voyage of a sexual and erotic lifetime today!
		</p>
	</div>
</section>

<style>
	section {
		margin-top: 100px;
	}
	h1 {
		/* background: linear-gradient(271deg, var(--blue) 30%, 50%, var(--green) 70%, #966fd6 94%); */
		background: linear-gradient(271deg, var(--green) 20% 40%, var(--blue) 60% 70%, #966fd6 80% 90%);
		background-clip: border-box;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		padding: 5px;
		font-size: var(--h2);
	}
	@media (min-width: 400px) {
		h1 {
			font-size: var(--h1);
		}
	}
	h2 {
		color: var(--green);
		font-size: var(--h3);
		text-align: center;
	}
	.buttonWrap {
		display: flex;
		width: 90%;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
	}
	button {
		background: var(--darkBlue);
		border-radius: 12px;
		margin: 25px auto;
		color: var(--white);
		height: 35px;
	}
	.headingWrap {
		display: grid;
		grid-template-columns: minmax(1px, 1fr);
		place-items: center;
		margin-bottom: 20px;
	}
	/* @media (min-width: 800px) { */
	/* 	.headingWrap { */
	/* grid-template-columns: repeat(2, minmax(1px, 1fr)); */
	/* 	} */
	/* } */
	.headingImgWrap {
		max-width: 300px;
	}
	.bodyText {
		width: 90%;
		margin: 0 auto;
	}
	@media (min-width: 600px) {
		.bodyText {
			width: 80%;
			max-width: 80%;
		}
	}
	@media (min-width: 900px) {
		.bodyText {
			width: 50%;
			max-width: 50%;
		}
	}
	.pic {
		max-width: 300px;
		margin: 30px auto;
		background: var(--darkBlue);
		padding: 0.5em;
		display: flex;
	}
	.iconWrap {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 90%;
		margin: 20px auto;
	}
	@media (min-width: 600px) {
		.iconWrap {
			width: 80%;
			max-width: 80%;
		}
	}
	@media (min-width: 900px) {
		.iconWrap {
			width: 50%;
			max-width: 50%;
		}
	}
	p {
		text-align: justify;
	}
	@media (min-width: 900px) {
		p {
			text-align: center;
		}
	}
	.icons {
		max-width: 50px;
		color: var(--green);
	}
	a:hover {
		color: var(--green);
		border-bottom: 2px solid var(--green);
		cursor: pointer;
	}
</style>
