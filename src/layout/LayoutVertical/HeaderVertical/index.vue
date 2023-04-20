<template>
  <!-- <Height class="noNeedPrint"/> -->
  <div
    class="m-layout-header noNeedPrint"
    :class="{
      'fixed-header': themeConfig.fixedHeader,
      collapse: themeConfig.fixedHeader && isCollapse,
      'no-collapse': themeConfig.fixedHeader && !isCollapse,
    }">
    <div class="header-inner">
      <HeaderToolLeft />
      <HeaderToolRight />
    </div>
    <TagsView v-if="themeConfig.showTag" />
  </div>
</template>

<script lang="ts" setup>
  import Height from '../../components/Header/components/Height.vue'
  import HeaderToolRight from '../../components/Header/ToolRight.vue'
  import HeaderToolLeft from '../../components/Header/ToolLeft.vue'
  import TagsView from '../../components/TagsView/index.vue'
  import { useSettingsStore } from '@/pinia/modules/setting'
  import { computed } from 'vue'
  const settingStore = useSettingsStore()
  const themeConfig = computed(() => {
    return settingStore.themeConfig
  })
  const isCollapse = computed(() => !settingStore.isCollapse)
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>