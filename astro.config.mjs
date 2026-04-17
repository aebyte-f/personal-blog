// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // ← Change this to your real domain once deployed
  site: 'https://your-blog-name.azurestaticapps.net',   // or your custom domain

  // Important for Azure Static Web Apps
  output: 'static',                    // Ensures pure static output (default, but good to be explicit)

  // Recommended for clean blog URLs (no trailing slashes)
  trailingSlash: 'ignore',

  // Build format: "file" creates cleaner URLs like /about.html → /about (with Azure routing)
  build: {
    format: 'file',
  },

  integrations: [
    mdx(),
    sitemap(),   // Generates sitemap.xml using your 'site' URL
  ],

  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Atkinson',
      cssVariable: '--font-atkinson',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/atkinson-regular.woff'],
            weight: 400,
            style: 'normal',
            display: 'swap',
          },
          {
            src: ['./src/assets/fonts/atkinson-bold.woff'],
            weight: 700,
            style: 'normal',
            display: 'swap',
          },
        ],
      },
    },
  ],
});