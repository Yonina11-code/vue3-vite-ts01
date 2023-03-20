<template>
  <div class="m-tags-view">
    <div class="tags-view">
      <el-tabs v-model="activeTabsValue" type="card" @tab-click="tabClick" @tab-remove="removeTab">
        <el-tab-pane
          v-for="item in visitedViews"
          :key="item.path"
          :label="item.title"
          :name="item.path"
          :closable="!(item.meta && item.meta.affix)">
            <template #label>
              <el-icon class="tabs-icon" v-if="item.icon">
                <component :is="item.icon"></component>
              </el-icon>
              {{ item.title }}
            </template>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="right-btn">
      <MoreButton />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useTagsViewStore } from '@/pinia/modules/tagsView.ts'
import { usePermissionStore } from '@/pinia/modules/permission.ts'
import { useRoute, useRouter } from 'vue-router'
import { TabsPaneContext } from 'element-plus'
import path from 'path-browserify'
const TagsViewStore = useTagsViewStore()
const permissionStore = usePermissionStore()
const route = useRoute()
const router = useRouter()
const routes = computed(() => permissionStore.routes)
const visitedViews = computed(() => TagsViewStore.visitedViews)
let affixTags = ref([])
const tabClick = (tabItem: TabsPaneContext) => {
  console.log('tabItem', tabItem)
}
const activeTabsValue = computed({
  get: () => {
    return TagsViewStore.activeTabsValue
  },
  set: (val) => {
    TagsViewStore.setTabsMenuValue(val)
  }
})
onMounted(() => {
  initTags()
  addTags()
})
watch(route, (() => {
  addTags()
}))
const initTags = (() => {
  let routesNew = routes.value
  let affixTag = (affixTags.value = filterAffixTags(routesNew))
})
function filterAffixTags(routes, basePath = '/') {
  let tags = []
  routes.forEach(route => {
    if (route.meta && route.meta.affix) {
      const tagPath = path.resolve(basePath)
      tags.push({
        fullPath: tagPath,
        path: tagPath,
        name: route.name,
        meta: { ...route.meta }
      })
    }
    if (route.children) {
      const tempTags = filterAffixTags(route.children, route.path)
      if (tempTags.length >= 1) {
        tags = [...tags, ...temTags]
      }
    }
  })
  return tags
}
const addTags = (() => {
  const { name } = route
  if (name === 'Login') {
    return
  }
  if (name) {
    TagsViewStore.addView(route)
  }
  return false
})
const removeTab = () => {

}

</script>

<style lang="scss" scoped>
  .m-tags-view {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    background: white;
    .right-btn {
      height: 100%;
      flex-shrink: 0;
    }
  }
  .tags-view {
    flex: 1;
    overflow: hidden;
    box-sizing: border-box;
  }

  .tags-view {
    .el-tabs--card :deep(.el-tabs__header) {
      box-sizing: border-box;
      height: 40px;
      padding: 0 10px;
      margin: 0;
    }
    :deep(.el-tabs) {
      .el-tabs__nav {
        border: none;
      }
      .el-tabs__header .el-tabs__item {
        border: none;
        color: #cccccc;
      }
      .el-tabs__header .el-tabs__item.is-active {
        color: $primaryColor;
        border-bottom: 2px solid $primaryColor;
      }
    }
  }
</style>
