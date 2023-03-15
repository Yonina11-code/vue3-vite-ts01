<template>
  <div :style="{ height: `${themeConfig.showTag ? 90 : 50}px`}" v-if="themeConfig.fixedHeader">

  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useSettingsStore } from '@/pinia/modules/setting'
const SettingStore = useSettingsStore()
const themeConfig = computed(() => SettingStore.themeConfig)
</script>

<style lang="scss" scoped>

</style>