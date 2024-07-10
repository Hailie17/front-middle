import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})

/**
 * 响应拦截器
 */
service.interceptors.response.use(response => {
  const { success, message, data } = response.data
  if (success) {
    return data
  }
  // TODO 请求失败
  return Promise.reject(new Error(message))
})

export default service
