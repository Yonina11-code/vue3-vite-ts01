<template>
  <div>
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'">
        <keep-alive :include="cacheRoutes" v-if="isReload">
          <component :is="useWrapComponents(Component, route)" :key="route.path"></component>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
  import { useWrapComponents } from '@/hooks/useWrapComponents'
  import { computed } from 'vue'
  import { useSettingsStore } from '@/pinia/modules/setting'
  import { usePermissionStore } from '@/pinia/modules/permission'
  const SettingStore = useSettingsStore()
  const PermissionStore = usePermissionStore()
  const cacheRoutes = computed(() => PermissionStore.keepAliveRoutes)
  const isReload = computed(() => SettingStore.isReload)
</script>

<style lang="scss" scoped>

</style>