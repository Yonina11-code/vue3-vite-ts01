<template>
  <div>
    {{themeConfig.mode}}
    <component :is="LayoutComponents[themeConfig.mode]"></component>
    <Theme />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import LayoutVertical from './LayoutVertical/index.vue'
import { useSettingsStore } from '@/pinia/modules/setting.ts'
import LayoutHorizontal from './LayoutHorizontal/index.vue'
import Theme from '@/components/Theme/index.vue'
const LayoutComponents = {
  horizontal: LayoutHorizontal,
  vertical: LayoutVertical
}
const SettingStore = useSettingsStore()
const themeConfig = computed(() => {
  console.log('themeConfig', SettingStore.themeConfig)
  return SettingStore.themeConfig
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
