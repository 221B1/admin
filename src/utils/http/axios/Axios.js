/**
 * 封装axios请求的各种方法，如get、post...
 * 不进行配置
 */

import axiosInstance from '.'

// 请求列表
export const requestList = {
  // get请求
  get: (config) => {
    return new Promise((resolve, reject) => {
      axiosInstance.request({ ...config, method: 'get' }).then(
        (response) => resolve(response),
        (err) => reject(err)
      )
    })
  },

  post: (config) => {
    return axiosInstance
      .request({ ...config, method: 'post' })
      .then((res) => res.data)
      .catch((err) => console.log(err))
  },

}
