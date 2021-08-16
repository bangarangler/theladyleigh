import preprocess from 'svelte-preprocess';
import { imagetools } from 'vite-imagetools';
// import node from '@sveltejs/adapter-node';
import path from 'path';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte'],
	preprocess: [preprocess()],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$components: path.resolve('./src/components'),
					$images: path.resolve('./src/images'),
					$stores: path.resolve('./src/stores'),
					$projects: path.resolve('./src/projects'),
					$static: path.resolve('./static')
				}
			},
			plugins: [imagetools({ force: true })]
		}
	}
};

export default config;
