export const RootRoute = {
    path: '/',
    name: 'home',
    redirect: '/dashboard/analysis',
}

export const LoginRoute = {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/LoginView.vue')
}

export const PageNotFoundRoute = {
    path: '/404',
    component: () => import('@/views/error-page/404.vue')
}

// 未经许可的基本路由，什么身份都可访问
export const BasicRoute = [
    RootRoute,
    LoginRoute,
    PageNotFoundRoute,
]