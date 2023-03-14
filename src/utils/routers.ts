import path from 'path-browserify' // node的兼容模块

/**
 * 通过递归过滤异步路由表
 */

export function filterAsyncRoutes(routes, roles) {
  const res = []
  routes.forEach((route) => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

/**
 * 使用meta.role 来确定当前用户是否具有权限
 */

export function hasPermission (roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => route.meta.roles.includes(role))
  } else {
    return false
  }
}
/**
 *
 * @param routers 使用递归过滤掉需要缓存的路由
 */
export function filterKeepAlive (routers) {
  const cacheRouter: any[] = []
  const deep = (routers) => {
    routers.forEach((item) => {
      if (item.meta?.keepAlive && item.name) {
        cacheRouter.push(item.name)
      }
      if (item.children && item.children.length) {
        deep(item.children)
      }
    })
  }
  deep(routers)
  return cacheRouter
}

export function hanldeRouters(routers, pathUrl = '') {
  routers.forEach((item) => {
    item.path = path.resolve(pathUrl, item.path)
    if (item.children && item.children.length) {

    }
  })
}