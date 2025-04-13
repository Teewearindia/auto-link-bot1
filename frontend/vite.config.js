import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'src', // Specify the root folder where your source code is located
  build: {
    outDir: '../dist', // Output directory for build files
    rollupOptions: {
      input: '/src/index.html', // Ensure the entry file is correct
    },
  },
});
