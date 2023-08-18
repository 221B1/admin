import zh from '@/locales/zh'
import { ElMessageBox } from 'element-plus';
import "element-plus/es/components/message-box/style/css"

// 统一错误处理
export function errorCatch(error) {
    console.log(error);
    const { response, code, message } = error || {}
    if (response) {
      switch (response.status) {
        case 401:
          ElMessageBox({message:response.data.message})
          break
        case 404:
          ElMessageBox({message:zh.api.errMsg404})
          break
        case 500:
          ElMessageBox({message:zh.api.errMsg500})
          break
      }
    } else if (
      code === 'ECONNABORTED' ||
      message === 'Newword Error' ||
      message.includes('timeout') ||
      !window.navigator.onLine
    ) {
      ElMessageBox({message:zh.api.networkExceptionMsg})
    } else {
      alert('err')
    }
  }
  