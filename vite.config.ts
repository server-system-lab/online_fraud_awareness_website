// vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/online_fraud_awareness_website/',
  plugins: [tailwindcss()],
})
