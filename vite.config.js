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
  server: {
    port: 5173,
    host: true,
    proxy: {
      '/chat': {
        target: 'http://187.77.184.141:8019',
        changeOrigin: true,
        ws: true,
      },
      '/faq-suggestions': {
        target: 'http://187.77.184.141:8019',
        changeOrigin: true,
      },
      '/tickets': {
        target: 'http://187.77.184.141:8019',
        changeOrigin: true,
      },
      '/auth': {
        target: 'http://187.77.184.141:8019',
        changeOrigin: true,
      },
      '/user': {
        target: 'http://187.77.184.141:8019',
        changeOrigin: true,
      },
    },
  },
  base: './', // Change from '/' to './' for correct asset loading
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});


