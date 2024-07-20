import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver'

// https://vitejs.dev/config/
export default defineConfig({
  base:process.env.VITE_BASE_URL || '/',
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src'),
      "@/components": resolve(__dirname, 'src/components'),
      "@/views": resolve(__dirname, 'src/views'),
      "@/assets": resolve(__dirname, 'src/assets'),
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }), 

  ],
})
