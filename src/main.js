import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import { setupStore } from './stores'
import { router, setupRouter } from './router'
import { setupRouterGuard } from './router/guard'

const app = createApp(App)


// 配置仓库
setupStore(app)

// 配置路由组件S
setupRouter(app)

// 配置路由守卫
setupRouterGuard(router)

app.mount('#app')
