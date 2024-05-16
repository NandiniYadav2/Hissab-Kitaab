import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
    server: {
      port: 3000,
      host: true, // This allows external access to the dev server
    },
  
})
// vite.config.js


