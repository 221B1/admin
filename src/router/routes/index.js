// 导入设置的所有路由
const modules = import.meta.glob('./modules/**/*.js', { eager: true });
// 将路由加入路由集合
const routeModuleList = [];
Object.keys(modules).forEach((key)=>{
    const mod = modules[key].default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    routeModuleList.push(...modList)
})

export const asyncRoutes = [...routeModuleList];