const dashboard = {
  path: '/dashboard',
  name: 'dashboard',
  component: () => import('@/layouts/index.vue'),
  redirect: '/dashboard/analysis',
  children: [
    {
      path: 'analysis',
      name: 'analysis',
      component: () => import('@/views/dashboard/analysis/index.vue')
    },
    {
      path: 'workbench',
      name: 'workbench',
      component: () => import('@/views/dashboard/workbench/index.vue')
    }
  ]
}

export default dashboard