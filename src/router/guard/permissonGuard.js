import { usePermissonStore } from "@/stores/modules/permission"
import { toRaw } from "vue";


export function createPermissonGuard(router){
    const permissionStore = usePermissonStore();
    router.beforeEach(async (to, from, next) => {
        // 如果去的是login界面，就不需要判断
        if(to.path === '/login'){
            next()
            return
        }
        // 判断是否登录
        const token = window.localStorage.getItem('token');
        // 未登录则路由重定向到login页面
        if(!token){
            console.log('未登录')
            next({path:'/login'})
            return
        }  
        if(!toRaw(permissionStore.getMenuList).length){
            const routes = await permissionStore.buildRoutesAction();
            routes.forEach((route)=>{
                router.addRoute(route)
            })
            next({...to, replace:true})
        }else{
            console.log('666');
            next()
        } 
    })
}