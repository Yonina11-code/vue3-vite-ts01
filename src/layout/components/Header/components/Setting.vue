<template>
  <div class="m-setting">
    <el-tooltip effect="dark" content="主题设置" placement="bottom">
      <el-icon style="font-size: 20px;" class="bell header-icon">
        <Setting @click="changeSwitch('showSetting', true)"/>
      </el-icon>
    </el-tooltip>
  </div>
</template>

<script lang="ts" setup>
  import { Setting } from '@element-plus/icons'
  import { useSettingsStore } from '@/pinia/modules/setting.ts'
  const settingStore = useSettingsStore()
  const changeSwitch = (key, val) => {
    settingStore.setThemeConfig({ key, val })
  }
</script>

<style lang="scss" scoped>
  .m-setting {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
    .item-info-pop {
      display: flex;
      align-items: center;
    }
    .bell {
      color: black;
    }
    .item-child {
      display: flex;
      align-items: center;
      font-size: 13px;
    }
  }
  .transverseMenu {
    .bell {
      color: white;
    }
  }
</style>
