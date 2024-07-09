import request from '../utils/request'

/**
 * 获取分类列表
 */
export const getCategoryList = () => {
  return request({
    url: '/category'
  })
}
