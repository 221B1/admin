// import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  // 配置需要使用的插件列表
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver({importStyle: true, resolveIcons: true})]
    })
  ],
  resolve: {
    // 配置别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      // 凡是遇到api路径的请求，都映射到target属性，虽然在控制台中的network看到的是本地地址，但实际上访问的是设置好的地址
      // 把后端地址代理到本机，本机映射过去，欺骗浏览器，让浏览器认为我们是在本地请求，就不会阻止我们发请求，也就不会有跨域报错
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        //去掉接口中的 '/api'以便和后端接口匹配
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    }
  },
})
