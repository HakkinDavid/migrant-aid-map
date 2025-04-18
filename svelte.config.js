import adapter from '@sveltejs/adapter-static';

const basePath = process.env.PUBLIC_BASE_PATH || '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: basePath
		}
	}
};

export default config;
