import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
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


