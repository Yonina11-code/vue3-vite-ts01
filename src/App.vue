<template>
  <el-config-provider :local="zhCn" :size="globalComSize">
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { useSettingsStore } from '@/pinia/modules/setting';
// 自适应
function resize() {
  let fs = document.body.clientWidth / 75
  // 上面的75是根据设计图尺寸修改，例如设计图宽为1220，给左右两边各留10px，即1220-20=1200，1200/16(字体大小)等于75

  if (fs > 16) {
    // 控制字体大小，以免过大过小
    fs = 16
  } else if (fs < 14) {
    fs = 14
  }
  // 👇注意这里不能直接document.body.style
  document.body.parentNode.style = 'font-size: ' + fs + 'px;'
}
resize()
window.onresize = resize

const SettingStore = useSettingsStore()
//  配置全局组件大小
const globalComSize = computed((): string => SettingStore.themeConfig.globalComSize)
</script>

<style scoped>
  #app {
    position: relative;
    width: 100%;
    height: 100%;
    font-family: Avenir, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .el-pager li:focus {
    border: none;
  }
  .el-dropdown:focus {
    border: none;
  }
  .svg-icon:focus {
    border: none;
  }
</style>
