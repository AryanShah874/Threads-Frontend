import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {   //added after coding server
    port: 3000,
    proxy: {'/api': {target: 'http://localhost:5000', changeOrigin: true, secure: false}}  //to avoid CORS errors and secure:false as http
  }
})
