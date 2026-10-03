import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { generateSitemap } from './scripts/generate-sitemap.js';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'auto-sitemap-generator',
      buildStart() {
        try {
          generateSitemap();
        } catch (e) {
          console.error('Failed to auto-generate sitemap:', e);
        }
      },
    },
  ],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
      '/uploads': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});
