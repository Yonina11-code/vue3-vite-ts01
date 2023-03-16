<template>
  <div class="hamburger-container" @click="handleCollapse">
    <el-icon class="icon" v-if="isCollapse">
      <Expand />
    </el-icon>
    <el-icon class="icon" v-else>
      <Fold />
    </el-icon>
  </div>
</template>

<script lang="ts" setup>
  import { useSettingsStore } from '@/pinia/modules/setting'
  import { computed } from 'vue'
  import { Expand, Fold } from '@element-plus/icons'
  const SettingStore = useSettingsStore()
  const isCollapse = computed(() => !SettingStore.isCollapse)
  const handleCollapse = () => {
    console.log('isCollapse', isCollapse)
    SettingStore.setCollapse(isCollapse.value)
  }
</script>

<style lang="scss" scoped>
  .hamburger-container {
    padding: 0px 15px;
    height: 100%;
    display: flex;
    align-items: center;
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
    .icon {
      font-size: 24px;
      cursor: pointer;
    }
  }
</style>