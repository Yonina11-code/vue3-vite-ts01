import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import echartsRouter from './modules/echarts'
interface extendRoute {
  hidden?: boolean
}

// 异步组件
export const asyncRoutes = [
  ...echartsRouter
]

// 404组件
export const notFoundRouter = {
  path: '/:pathMatch(.*)',
  name: 'notFound',
  redirect: '/404'
}

export const constantRoutes = [
  {
    path: '/',
    name: 'home',
    redirect: '/resume'
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('../views/resume.vue')
  }


]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes
})

export default router
