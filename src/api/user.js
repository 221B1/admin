import { requestList } from '@/utils/http/axios/Axios'

const userApi = {
  Login: '/login',
  Logout: '/logout',
  GetUserInfo: '/getUserInfo'
}

// 登录
export function loginApi(params) {
  return requestList.post({
    url: userApi.Login,
    data: {
      ...params
    }
  })
}

export function logoutApi(){
    return requestList.get({ url: userApi.Logout })
}

export function getUserInfo(params) {
  console.log(params)
  return requestList.post({ url: userApi.GetUserInfo, data: {...params} })
}
