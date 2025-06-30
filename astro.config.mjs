// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

export default defineConfig({
  integrations: [preact()],
  redirects: {
    "/": "/es/",  // Redirige la raíz a /es/
   // "/en/": "/es/" // Redirige /en/ a /es/
  }
});
