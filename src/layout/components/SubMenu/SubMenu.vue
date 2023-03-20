<template>
  <template v-for="subItem in menuList" :key="subItem.path">
    <template v-if="!subItem.hidden">
      {{subItem.hidden}}
      <template v-if="!subItem.alwaysShow && hasOneChild(subItem.children, subItem)">
        <MenuItem :subItem="hasOneChild(subItem.children, subItem)" />
      </template>
      <el-sub-menu v-else :index="subItem.path">
        <template #title>
          <el-icon>
            <component :is="subItem?.meta?.icon"></component>
          </el-icon>
          <span>{{subItem?.meta?.title}}</span>
        </template>
        <SubMenu :menuList="subItem.children" />
      </el-sub-menu>
    </template>
  </template>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MenuItem from './MenuItem.vue'
let props = defineProps({
  menuList: {
    type: Array,
    default: () => []
  }
})
console.log('props', props.menuList)
const hasOneChild = (children = [], parent) => {
  const showingChildren = children.filter((item) => {
    // 过滤掉需要隐藏的菜单
    if (item.hidden) {
      return false
    } else {
      return true
    }
  })
  // 当只有一个子路由时， 默认情况下会显示该子路由
  if (showingChildren.length === 1) {
    return showingChildren[0]
  }
  if (showingChildren.length === 0) {
    return parent // 没有子路由则显示父路由
  }
}
</script>

<style lang="scss" scoped>

</style>