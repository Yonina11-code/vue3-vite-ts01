<template>
  <el-dropdown trigger="hover" @command="setAssemblySize">
    <svg-icon
      class-name="size-icon header-icon"
      icon-class="size"
      style="font-size: 20px; cursor: pointer"
    />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-if="item in assemblySizeList"
          :key="item"
          :disabled="globalComSize === item"
          :command="item"
          >
            {{ assemblySizeListCh[item] }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
  import { reactive, computed } from 'vue'
  import { useSettingsStore } from '@/pinia/modules/setting.ts'
  const settingStore = useSettingsStore()
  const globalComSize = computed((): string  => settingStore.themeConfig.globalComsize)
  const assemblySizeListCh = reactive<{ [key: string]: any }>({
    default: '默认',
    large: '大型',
    small: '小型'
  })
  const assemblySizeList = reactive<string[]>(['defalut', 'large', 'small'])
  const setAssemblySize = (item: string) => {
    if (globalComSize.value === item) return
    settingStore.setThemeConfig({key: 'globalComsize', val: item })
  }
</script>

<style lang="scss" scoped>
  .transverseMenu {
    .size-icon {
      color: white;
    }
  }
</style>