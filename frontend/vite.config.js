import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5174,
    hmr: {
      host: 'localhost',  // WebSocket host
      port: 5174,         // WebSocket port
    },
    proxy: {
      '/api': {
        target: 'http://symfony_nginx',
        changeOrigin: true,
        secure: false
      }
    }
  }
})