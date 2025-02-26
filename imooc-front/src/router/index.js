import { createRouter, createWebHistory } from 'vue-router'
import { isMobileTerminal } from '../utils/flexibles'
import mobileRoutes from './modules/mobile-routes'
import pcRoutes from './modules/pc-routes'

// 创建 vueRouter 实例
const router = createRouter({
  history: createWebHistory(),
  routes: isMobileTerminal.value ? mobileRoutes : pcRoutes
})

export default router
