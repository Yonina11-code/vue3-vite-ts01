<template>
  <div>
    <component :is="LayoutComponents[themeConfig.mode]"></component>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import LayoutVertical from './LayoutVertical/index.vue'
import { useSettingsStore } from '@/pinia/modules/setting.ts'
const LayoutComponents = {
  vertical: LayoutVertical
}
const SettingStore = useSettingsStore()
const themeConfig = computed(() => SettingStore.themeConfig)
</script>

<style lang="scss" scoped></style>
