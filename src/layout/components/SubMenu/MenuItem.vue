<template>
  <el-menu-item
    :index="subItem.path"
    @click="handleClickMenu(subItem)">
      <el-icon>
        <component :is="subItem?.meta?.icon"></component>
      </el-icon>
      <template #title>
        <span>{{subITem?.meta?.title}}</span>
      </template>
  </el-menu-item>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { isExternal } from "@/utils/validate";
import { ref } from 'vue'
const router = useRouter()
let props = defineProps({
  subItem: {
    type: Object,
    default: () => {}
  }
})
const handleClickMenu = (subItem) => {
  if (isExternal(subItem.path)) return window.open(subItem.path, '_blank')
  router.push(subItem.path)
}
</script>

<style lang="scss" scoped>

</style>