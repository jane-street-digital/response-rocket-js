// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  server: {
    https: true
  },
  plugins: [
    mkcert()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'main.js'),
      name: 'ResponseRocket',
      // the proper extensions will be added
      fileName: 'main'
    }
  }
})
