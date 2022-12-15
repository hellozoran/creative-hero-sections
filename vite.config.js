import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import PrerenderSPAPlugin from 'prerender-spa-plugin'

export default defineConfig({
  plugins: [
    vue()
  ]
})
