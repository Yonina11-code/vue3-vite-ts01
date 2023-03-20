<template>
  <div>
    <el-drawer v-model="drawer" title="主题配置" size="300px">
      <div class="theme-item" v-for="(item, index) in options" :index="item.prop">
        <label>{{item.label}}</label>
        <el-select
          v-if="item.type === 'select'"
          v-model="form[item.prop]"
          placeholder="请选择"
          style="width: 150px"
          @change="(val) => changeSwitch('mode', val)">
          <el-option
            v-for="(direct, index) in directionDict"
            :key="index"
            :label="direct.label"
            :value="direct.value"
          ></el-option>
        </el-select>
        <el-color-picker v-model="form[item.prop]" v-if="item.type === 'color'"></el-color-picker>
        <el-switch v-model="form[item.prop]" v-if="item.type === 'switch'" @change="(val) => changeSwitch(item.prop, val)"/>
      </div>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useSettingsStore } from '@/pinia/modules/setting'
const settingStore = useSettingsStore()
const directionDict = ref([
  {
    label: '纵向',
    value: 'vertical'
  },
  {
    label: '横向',
    value: 'horizontal'
  },
  {
    label: '分栏',
    value: 'columns'
  }
])
const layout = ref(settingStore.themeConfig.mode) // 布局
const drawer = computed({
  get () {
    return settingStore.themeConfig.showSetting
  },
  set () {
    changeSwitch('showSetting', !settingStore.themeConfig.showSetting)
  }
})
const changeSwitch = (key, val) => {
  console.log('key, val', key, val)
  settingStore.setThemeConfig({ key, val })
  // if (key === 'mode') {}
  if (key === 'isDark') {
    const body = document.documentElement as HTMLElement
    if (settingStore.themeConfig.isDark) body.setAttribute('class', 'dark')
    else body.setAttribute('class', '')
  } else if (key === 'gray' || key === 'weak') {
    const body = document.documentElement as HTMLElement
    if (!val) return body.setAttribute('style', '')
    if (key === 'gray') body.setAttribute('style', 'filter: grayscale(1)')
    if (key === 'weak') body.setAttribute('style', 'filter: invert(80%)')
  }
}

const form = reactive({
  primary: settingStore.themeConfig.primary, // 颜色
  gray: settingStore.themeConfig.gray,
  weak: settingStore.themeConfig.weak,
  showLogo: settingStore.themeConfig.showLogo,
  showTag: settingStore.themeConfig.showTag,
  uniqueOpened: settingStore.themeConfig.uniqueOpened,
  fixedHeader: settingStore.themeConfig.fixedHeader,
  isDark: settingStore.themeConfig.isDark
})
// const fixedHeader = ref(settingStore.themeConfig.fixedHeader)
// const isDark = ref(settingStore.themeConfig.isDark)
const options = ref([
  {
    label: '导航栏布局',
    prop: 'layout',
    type: 'select',
    dic: directionDict
  },
  {
    label: '主题颜色',
    prop: 'primary',
    type: 'color',
  },
  {
    label: '暗黑模式',
    prop: 'isDark',
    type: 'switch',
  },
  {
    label: '灰色模式',
    prop: 'gray',
    type: 'switch',
  },
  {
    label: '色弱模式',
    prop: 'weak',
    type: 'switch',
  },
  {
    label: '标签栏',
    prop: 'showTag',
    type: 'switch',
  },
  {
    label: '侧边栏LOGO',
    prop: 'showLogo',
    type: 'switch',
  },
  {
    label: '保持一个子菜单的展开',
    prop: 'uniqueOpened',
    type: 'switch',
  },
  {
    label: '固定header',
    prop: 'fixedHeader',
    type: 'switch',
  }
])
</script>

<style lang="scss" scoped>
  ::v-deep(.el-drawer__header) {
    border-bottom: 1px solid #ebeef5;
    padding: 15px 20px 14px;
    margin-bottom: 0;
  }
  .m-setting-fix {
    position: fixed;
    top: 50%;
    right: 0;
    z-index: 999;
    padding: 10px 0 0 0;
    margin: 0;
    text-align: center;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    border-top-left-radius: 5.5px;
    border-bottom-left-radius: 5.5px;
    box-shadow: 0 0 50px 0 rgb(82 63 105 / 15%);
    transform: translateY(-50%);
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;

      justify-content: center;
      padding: 0 8px 10px 10px;
      margin: 0;
      list-style: none;
    }
    .item-child {
      color: #3698fd;
      width: 60px;
      height: 60px;
      /*padding-top: 10px;*/
      text-align: center;
      display: flex;
      flex-direction: column;
      background: #f6f8f9;
      align-items: center;
      justify-content: center;
      border-radius: 5.5px;
      font-size: 12px;
      background: #ebf5ff;
      transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease,
        box-shadow 0.15s ease;
    }
    .item-child2 {
      margin-top: 10px;
      color: #b37feb;
      background: #f7f2fd;
      transition: color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease,
        box-shadow 0.15s ease;
    }
  }

  :deep(.el-drawer__title) {
    font-weight: bold;
    color: black;
  }
  .theme-item {
    width: 100%;
    display: flex;
    margin-bottom: 15px;
    align-items: center;
    font-size: 14px;
    color: black;
    justify-content: space-between;
  }
</style>
