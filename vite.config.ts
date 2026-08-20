import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// base is set to './' so the build works both at a root domain (Hostinger custom domain)
// and under a GitHub Pages project path (https://<user>.github.io/<repo>/)
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
})
