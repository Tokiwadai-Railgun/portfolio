import adapter from '@sveltejs/adapter-cloudflare-workers';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const base = '';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
  vitePlugin: {
		inspector: {
			showToggleButton: 'always'
		}
	},
	kit: {
    adapter: adapter({
      config: 'wrangler.toml',
        platformProxy: {
          configPath: 'wrangler.toml',
          environment: undefined,
          experimentalJsonConfig: false,
          persist: false
			}
    }),
		alias: {
			$lib: './src/lib',
			'@data': './src/lib/data',
			'@components': './src/lib/components',
			'@md': './src/lib/md',
			'@stores': './src/lib/stores',
			'@utils': './src/lib/utils'
		},
		paths: {
			base: process.env.NODE_ENV === 'production' ? base : ''
		},
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // Example: Ignore 405 errors for the /login endpoint
        if (path === '/login') {
          console.warn(`Ignored 405 error for ${path} linked from ${referrer}`);
          return;
        }
        // Fail the build for other errors
        throw new Error(message);
      }
    }
	}
};

export default config;
