// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://qshala.vercel.app',
  prefetch: true,
  integrations: [react(), sitemap()],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
    },
  },
});
