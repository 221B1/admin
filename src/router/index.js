import { createRouter, createWebHistory } from 'vue-router'
import { BasicRoute } from './routes/basic'

// 创建路由实例
export const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes: BasicRoute
})

export default router
// 配置路由器
export function setupRouter(app) {
  app.use(router)
}
