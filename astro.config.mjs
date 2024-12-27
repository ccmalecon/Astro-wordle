import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [tailwind(), react()],

  devToolbar: {
    enabled: false
  },

  adapter: cloudflare()
});