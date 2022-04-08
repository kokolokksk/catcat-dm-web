import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
      extensions: ['.js','.mjs']
  },
  plugins: [vue()],
  base:'https://db.loli.monster/',
  server:{
    open:true,
    host:'0.0.0.0',
    proxy: {
      '/cat':{
        target:'https://db.loli.monster/cat/',
        changeOrigin:true,
        secure: false,
        rewrite:(path) => path.replace(/^\/cat/,'')
      }
    }
  }
})
