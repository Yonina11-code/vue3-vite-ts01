import { defineStore, createPinia } from 'pinia';
// 引入持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export const Store = defineStore({
  id: 'globalState', // id: 必须的，在所有Store 中唯一
  state: () => ({}), // 返回对象的函数
  getters: {},
  actions: {},
  persist: {
    key: 'globalState', // 本地存储的名称
    storage: window.sessionStorage, // 保存的位置
  }
})

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export default pinia