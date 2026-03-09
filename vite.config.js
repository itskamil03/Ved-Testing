import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss(),],

  build: {
    outDir: 'dist',
    minify: 'esbuild',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: { port: 5173 },
  base: './', // Change from '/' to './' for correct asset loading
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});


