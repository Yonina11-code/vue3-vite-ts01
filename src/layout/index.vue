<template>
  <div class="g-container-layout flex-row" :class="classObj">
    <component :is="LayoutComponents[themeConfig.mode]"></component>
    <Theme />
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import LayoutVertical from './LayoutVertical/index.vue'
import { useSettingsStore } from '@/pinia/modules/setting.ts'
import LayoutHorizontal from './LayoutHorizontal/index.vue'
import Theme from '@/components/Theme/index.vue'
import { useResizeHandler } from '@/hooks/useResizeHandler'
const LayoutComponents = {
  horizontal: LayoutHorizontal,
  vertical: LayoutVertical
}
const SettingStore = useSettingsStore()
const themeConfig = computed(() => {
  console.log('themeConfig', SettingStore.themeConfig)
  return SettingStore.themeConfig
})
let { device } = useResizeHandler()
watch(
  () => device.value, // getter 函数
  (val) => {
    console.log('val', val)
    let vertical = val === 'mobile' ? 'vertical' : themeConfig.value.mode
    const body = document.body
    body.setAttribute('class', `layout-${vertical}`)
  },
  {
    immediate: true,
  },
)

// 当屏幕切换时进行变换
const classObj = computed(() => {
  return {
    hideSidebar: !SettingStore.isCollapse,
    openSidebar: SettingStore.isCollapse,
    withoutAnimation: SettingStore.withoutAnimation,
    mobile: device.value === 'mobile',
  }
})
</script>

<style lang="scss" scoped>
  .g-container-layout {
    height: 100%;
    width: 100%;
    .main-container {
      display: flex;
      flex: 1;
      box-sizing: border-box;
      flex-direction: column;
    }
    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }
  .sidebar-container {
    display: flex;
    flex-direction: column;
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 90;
  }
</style>
