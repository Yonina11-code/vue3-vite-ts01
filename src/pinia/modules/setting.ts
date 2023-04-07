import { defineStore } from "pinia";
import { PRIMARY_COLOR } from "@/config";

export const useSettingsStore = defineStore({
  id: 'settingsState',
  state: () => ({
    isCollapse: true, // menu 是否收缩
    withoutAnimation: false,
    device: 'desktop',
    isReload: true, // 刷新当前页
    themeConfig: { // 主题设置
      showSetting: false, // 显示设置
      mode: 'vertical', // 菜单展示模式
      showTag: true, // tagsView 是否展示 默认展示·
      footer: true, // 页脚
      isDark: false, // 深色模式 切换暗黑模式
      showLogo: true, // 是否显示侧边栏logo
      primary: PRIMARY_COLOR, // 主题颜色
      globalComSize: 'default', // element组件大小
      uniqueOpened: true, // 是否只支持一个子菜单的展开
      fixedHeader: true, // 固定header
      gray: false, // 灰色模式
      weak: false, // 色弱模式
    }
  }),
  actions: {
    setThemeConfig({key, val}) {
      this.themeConfig[key] = val
    },
    setCollapse (value: boolean) { // 切换collapse
      this.isCollapse = value
      this.withoutAnimation = false
    },
    closeSideBar({ withoutAnimation }) { // 关闭侧边栏
      this.isCollapse = false
      this.withoutAnimation = withoutAnimation
    },
    toggleDevice (device) {
      this.device = device
    },
    setReload () {
      this.isReload = false
      setTimeout(() => {
        this.isReload = true
      }, 50)
    }
  }
})
