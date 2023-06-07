import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path"
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { find: '@', replacement: path.resolve('src') }
  },
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  }
})
