import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // This ensures that the build starts from the root directory
  build: {
    outDir: 'dist', // The build output directory
    rollupOptions: {
      input: './index.html', // Ensure the input file is correctly pointed to the root index.html
    },
  },
});
