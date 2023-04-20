<template>
  <div class="sidebar-container" :class="{ 'has-logo': themeConfig.showLogo }">
    <Logo :isCollapse="isCollapse" v-if="themeConfig.showLogo" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        background-color="#304156"
        text-color="#bfcbd9"
        :unique-opened="SettingStore.themeConfig.uniqueOpened"
        :collapse-transition="false"
        class="el-menu-vertical-demo"
        :collapse="isCollapse">
        <SubMenu :menuList="permission_routes"/>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import SubMenu from '../SubMenu/SubMenu.vue'
import Logo from './components/Logo.vue'
import { useSettingsStore } from '@/pinia/modules/setting'
import { usePermissionStore } from '@/pinia/modules/permission.ts'
import { useRoute } from 'vue-router'
  const SettingStore = useSettingsStore()
  const permissionStore = usePermissionStore()
  const route = useRoute()
  // 是否折叠
  const isCollapse = computed(() => !SettingStore.isCollapse)
  // 设置
  const themeConfig = computed(() => SettingStore.themeConfig)
  // 获取路由
  const permission_routes = computed(() => permissionStore.permission_routes)
  const activeMenu = computed(() => {
    const { meta, path } = route
    if (meta.activeMenu) {
      return meta.activeMenu
    }
    return path
  })
</script>

<style lang="scss" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    height: 100%;
  }
</style>