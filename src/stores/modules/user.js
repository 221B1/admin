import { defineStore } from 'pinia'
import { loginApi, getUserInfo } from '@/api/user'
import { usePermissonStore } from './permission'
import router from '@/router'
import { isArray } from '@/utils/is'

export const useUserStore = defineStore('users', {
  state: () => {
    return {
      userInfo: {},
      token: undefined,
      roleList: []
    }
  },
  getters: {
    getUserInfo(state){
      return state.userInfo || {};
    },
    getToken(state) {
      return state.token || undefined
    },
    getRoleList(state){
      return state.roleList || []
    }
  },
  actions: {
    setToken(info) {
      this.token = info ? info : ''
      window.sessionStorage.setItem('token',info)
    },

    setRoleList(info) {
      this.roleList = info
      window.sessionStorage.setItem('roleList',info)
    },

    setUserInfo(info) {
      this.userInfo = info
      window.sessionStorage.setItem('userInfo',info)
    },

    async login(params) {
      try {
        // 发请求
        const result = await loginApi(params)
        // 保存token
        const { token, username } = result
        this.setToken(token)
        // 进行登录成功后跳转等工作
        return this.afterLoginAction(username)
      } catch (error) {
        return Promise.reject(error)
      }
    },

    async afterLoginAction() {
      // 获取用户信息
      const userInfo = await this.getUserInfoAction();
      // 动态匹配路由，加载菜单
      const permissionStore = usePermissonStore()
      const routes = await permissionStore.buildRoutesAction()
      routes.forEach((route) => {
        router.addRoute(route)
      })
      // 跳转主页面
      router.push('/dashboard')
      return userInfo
    },

    async getUserInfoAction(){
      const userInfo = await getUserInfo({username:"admin"});
      // 对roles的操作要视具体情况而定，看后端返回的数据是怎样的，我这里自己模拟是数组中包含对象
      const { roles = [] } = userInfo;
      if(isArray(roles)){
        const roleList = roles.map((item) => item.value);
        this.setRoleList(roleList)
      }else{
        userInfo.roles = [];
        this.setRoleList([])
      }
      this.setUserInfo(userInfo);
      return userInfo
    }
  }
})
