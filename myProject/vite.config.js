import { fileURLToPath, URL } from 'node:url'
//配置elementplus按需导入
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
        // ...
        AutoImport({
          resolvers: [ElementPlusResolver()],
        }),
        Components({
          //elementplus配置样式
          resolvers: [ElementPlusResolver({importStyle:"sass"})],
        })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        //自动导入定制化样式文件进行覆盖
        additionalData: `
        @use "@/styles/element/index.scss" as *;
        @use "@/styles/var/var.scss" as *;
        `,
      }
    }
  }
})
