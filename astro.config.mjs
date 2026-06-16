// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages (User site): https://chosihoon.github.io
  site: 'https://chosihoon.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
