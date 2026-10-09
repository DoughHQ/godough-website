// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.itsarunoff.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
});
