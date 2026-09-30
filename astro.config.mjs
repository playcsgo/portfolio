// @ts-check
import { defineConfig } from 'astro/config';

// Served from https://agilenpi.com/portfolio/ — every page and asset lives under this base path
export default defineConfig({
  site: 'https://agilenpi.com',
  base: '/portfolio',
  trailingSlash: 'ignore',
});
