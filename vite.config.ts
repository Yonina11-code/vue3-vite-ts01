import { fileURLToPath, URL } from 'node:url'
import postCssPxToRem from 'postcss-pxtorem'

import { defineConfig } from 'vite'
// mock服务
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(),
  viteMockServe({
    // ↓解析根目录下的mock文件夹
    mockPath: "mock",
    supportTs: true, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
    watchFiles: true, // 监视文件更改
  })],
  resolve: { // 别名配置
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({ // 自适应，px>rem转换
          rootValue: 16, // 1rem的大小
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
        })
      ]
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/styles/index.scss" as *;`,
      },
    },
  }
})
