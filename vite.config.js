import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  base: './',

  plugins: [vue()],
  build: {
    outDir: path.join(__dirname, "docs"),
  },
  server:{
    hmr:true
  }

})
