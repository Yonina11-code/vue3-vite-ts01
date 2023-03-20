import { createRouter, createWebHistory, RouteRecordRaw, } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import echartsRouter from './modules/echarts'
import Layout  from '@/layout/index.vue';
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

export const constantRoutes: Array<RouteRecordRaw & extendRoute> = [
  {
    path: '/',
    name: 'home',
    redirect: '/resume',
    component: Layout,
    children: [
      {
        path: '/resume',
        name: 'resume',
        component: () => import('../views/resume.vue'),
        meta: { title: '登录res' }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录' }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/errorPages/404.vue'),
    hidden: true,
  },


]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes

})

export default router
