import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

declare const process: any;

export default defineConfig({
  base: process.env.VERCEL ? '/' : '/Archit-Portfolio/',
  plugins: [react()],
})