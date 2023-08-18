const educate = {
    name: '教务管理',
    path: '/educate',
    component: () => import('@/layouts/index.vue'),
    redirect: '/educate/student',
    meta: {},
    children: [
        {
            name: '学员中心',
            path: 'student',
            component: () => import('@/views/educate/student/index.vue'),
            meta: {}
        },
        {
            name: '班级管理',
            path: 'class',
            component: () => import('@/views/educate/class/index.vue'),
            meta: {}
        },
        {
            name: '课程管理',
            path: 'course',
            component: () => import('@/views/educate/course/index.vue'),
            meta: {}
        },
        {
            name: '课表管理',
            path: 'table',
            component: () => import('@/views/educate/table/index.vue'),
            meta: {}
        },
    ]
}

export default educate