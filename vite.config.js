import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'./',
  server:{
    open:true,
    host:'0.0.0.0',
    proxy: {
      '/cat/dm':{
        target:'https://db.loli.monster/cat/dm',
        changeOrigin:true,
        secure: false,
        rewrite:(path) => path.replace(/^\/cat\/dm/,'')
      }
    }
  }
})
