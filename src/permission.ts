import router from '@/router/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useUserStore } from '@/pinia/modules/user'
import { usePermissionStore } from '@/pinia/modules/permission'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/auth-redirect'] // 设置路由白名单
let hasRoles = true
router.beforeEach(async (to, from, next) => {
  NProgress.start() // 开启进度条
  if (typeof to.meta.title === 'string') {
    document.title = to.meta.title || 'vue-admin' // 设置标题
  }

  const userStore = useUserStore()
  const hasToken = userStore.token // 确定用户是否已登录过， 存在token
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      try {
        const PermissionStore = usePermissionStore()
        if (!PermissionStore.routes.length) {
          const accessRoutes = await PermissionStore.generateRoutes(userStore.roles)
          hasRoles = false
          accessRoutes.forEach(item => router.addRoute(item)) // 动态添加访问路由表
          next({ ...to, replace: true})
        } else {
          next()
        }
      } catch (error) {
        next(`/login?redirect=${to.path}`)
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})