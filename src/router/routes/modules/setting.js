const setting = {
    name: '系统设置',
    path: '/setting',
    component: () => import('@/layouts/index.vue'),
    meta: {},
    children: [
        {
            name: '基础信息',
            path: 'base',
            component: () => import('@/views/setting/base/index.vue'),
            meta: {}
        },
        {
            name: '职员管理',
            path: 'user',
            component: () => import('@/views/setting/user/index.vue'),
            meta: {
                roles: ['super']
            }
        },
        {
            name: '岗位管理',
            path: 'role',
            component: () => import('@/views/setting/role/index.vue'),
            meta: {
                roles: ['super']
            }
        },
    ]
}

export default setting