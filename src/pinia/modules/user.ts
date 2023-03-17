import { defineStore } from "pinia";
// 在需要的页面直接导入
export const useUserStore = defineStore({
  id: 'userState', // 必须且唯一
  state: () => ({ // 返回对象的函数
    token: null,
    userInfo: {},
    roles: localStorage.roles ? JSON.parse(localStorage.roles): []
  }),
  getters: {},
  actions: {
    login (userInfo) {
      const { username, password } = userInfo
      return new Promise(async (resolve, reject) => {
        this.token = username
        this.userInfo = userInfo
        await this.getRoles()
        resolve(username)
      })
    },
    getRoles () {
      return new Promise((resolve, reject) => {
        this.roles = ['admin'] // 没有接口， 写死
        localStorage.roles = JSON.stringify(this.roles)
        resolve(this.roles)
      })
    },
    logout () {
      return new Promise((resolve, reject) => {
        this.token = null
        this.userInfo = {}
        this.roles = []
        resolve(null)
      })
    }
  },
  persist: { // 进行持久化存储
    key: 'userState', // 本地存储的名称
    storage: window.localStorage
  }
})