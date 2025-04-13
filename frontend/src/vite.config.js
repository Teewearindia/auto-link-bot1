import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  root: resolve(__dirname), // or leave as './' if you're inside frontend/
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: resolve(__dirname, 'public/index.html'),
    },
  },
})
