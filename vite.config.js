// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'main.js'),
      name: 'ResponseRocket',
      // the proper extensions will be added
      fileName: 'main'
    }
  }
})