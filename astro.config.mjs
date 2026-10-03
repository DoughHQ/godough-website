// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://godough.co',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
});
