import { defineConfig } from 'vite';

export default defineConfig({
  base: '/dist/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: 'template.html',
    },
  },
});
