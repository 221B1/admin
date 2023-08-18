import { defineStore } from "pinia";
import { asyncRoutes } from "@/router/routes";
import { filter } from "@/utils/helper/treeHelper";
import { useUserStore } from "./user";
import { toRaw } from "vue";
import projectSetting from "@/setting/projectSetting";
import { getMenuList } from "@/api/menu";

export const usePermissonStore = defineStore('permission',{
    state: ()=>({
        // 菜单列表
        menuList: []
    }),
    getters:{
        getMenuList(state){
            return state.menuList
        }
    },
    actions:{
        setMenuList(menu){
            this.menuList = menu;
        },

        async buildRoutesAction() {
            // 获取角色
            const userStore = useUserStore();
            const roleList = toRaw(userStore.getRoleList);
            // 获取权限获取方式
            const permissionMode = projectSetting.permissionMode;
            let routes = []

            // 定义根据角色过滤路由的函数
            const filterByRole = (route)=>{
                const { meta = {} } = route;
                const { roles } = meta || [];
                if(!roles)return true
                return roleList.some((role) => roles.includes(role))
            }

            // 根据permissionMode选择权限过滤方法
            switch (permissionMode) {
                // 路由映射，根据角色过滤
                case "ROUTEMAPPING":
                    // 对路由进行过滤
                    routes = filter(asyncRoutes, filterByRole)
                    // 设置菜单
                    this.setMenuList(routes);
                    break;
            
                // 后台获取
                case "BACK":
                    try {
                        // 通过后端接口获取路由
                        // 这里的routes是否需要进行结构转换具体视后端接口返回的数据结构而定
                        routes = await getMenuList();
                        this.setMenuList(routes)
                    } catch (error) {
                        console.log(error)
                    }
                    break;
            }
            return routes
        }
    }
})