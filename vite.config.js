import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory
    minify: 'esbuild', // Use Esbuild for minification (default)
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs
        drop_debugger: true, // Remove debugger statements
      },
    },
  },
  base: '/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});


