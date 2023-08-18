import axios from 'axios'
import { errorCatch } from './errorHandle'

const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 10 * 1000,
  requestOptions: {
    withToken: true
  },
  keepAlive: true
})

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('token')
    // token存在且对应的接口需要带token时才对请求头进行设置
    token && config?.requestOptions?.withToken && (config.headers.Authorization = token)
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response)
    return response
  },
  (err) => {
    errorCatch(err)
    return Promise.reject(err)
  }
)

export default axiosInstance
