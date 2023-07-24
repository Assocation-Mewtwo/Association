import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const PORT = process.env.PORT || 3000;

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
})
