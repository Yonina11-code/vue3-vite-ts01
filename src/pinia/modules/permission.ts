import { defineStore } from "pinia";
import { asyncRoutes, notFoundRouter, constantRoutes } from '@/router/index'
import { filterKeepAlive, filterAsyncRoutes } from '@/utils/routers'

export const usePermissionStore = defineStore({
  id: 'permissionState',
  state: () => ({
    routes: [], // 路由
    addRoutes: [], // 动态路由
    cacheRoutes: {}, // 缓存路由
  }),
  getters: {
    permission_routes: (state) => {
      return state.routes
    },
    keepAliveRoutes: (state) => {
      return filterKeepAlive(asyncRoutes)
    }
  },
  actions: {
    generateRoutes(roles) {
      return new Promise((resolve) => {
        let accessedRoutes
        if (roles && roles.length && !roles.includes('admin')) {
          accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
        } else {
          accessedRoutes = asyncRoutes || []
        }
        accessedRoutes = accessedRoutes.concat(notFoundRouter) // 加上404页面
        this.routes = constantRoutes.concat(accessedRoutes)
        this.addRoutes = accessedRoutes
        resolve(accessedRoutes)
      })
    },
    // 清除路由
    clearRoutes () {
      this.routes = []
      this.addRoutes = []
      this.cacheRoutes = []
    },
    getCacheRoutes () {
      this.cacheRoutes = filterKeepAlive(asyncRoutes)
      return this.cacheRoutes
    }
  }
})