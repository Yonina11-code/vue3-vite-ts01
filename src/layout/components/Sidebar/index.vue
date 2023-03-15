<template>
  <div>
    <Logo :isCollapse="isCollapse" v-if="themeConfig.showLogo"></Logo>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
  import Logo from './components/Logo.vue'
import { useSettingsStore } from '@/pinia/modules/setting';
  const SettingStore = useSettingsStore()
  // 是否折叠
  const isCollapse = computed(() => !SettingStore.isCollapse)
  // 设置
  const themeConfig = computed(() => SettingStore.themeConfig)
</script>

<style lang="scss" scoped>

</style>