<template>
  <div>
    <el-tooltip effect="dark" content="菜单搜索" placement="bottom">
      <el-icon class="bell header-icon" style="font-size: 22px" @click="handleSearch">
        <Search />
      </el-icon>
    </el-tooltip>
    <el-dialog v-model="isShowSearch" width="600px" destroy-on-close :show-close="false">
      <el-select
        style="width: 100%"
        ref="headerSearchSelect"
        v-model="search"
        :remote-method="querySearch"
        filterable
        default-first-option
        remote
        placeholder="菜单搜索： 支持菜单名称、路径"
        @change="change">
        <el-option
          v-for="item in options"
          :key="item.item.path"
          :value="item.item.path"
          :label="item && item.item.title && item.item.title.length && item.item.title.join('>')">

        </el-option>
      </el-select>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import path from 'path-browserify' // node语法转换 path
import Fuse from 'fuse.js'
import { useVueFuse } from 'vue-fuse'
import { useRouter } from 'vue-router'
const router = useRouter()
const isShowSearch = ref(false)
const options = ref([])
const searchPool = ref([])
const fuse = ref(null)
const handleSearch = () => {
  isShowSearch.value = true
}
watch(searchPool, (list) => {
  initFuse(list)
})
onMounted(() => {
  searchPool.valu =
})
const querySearch = (query: string) => {
  if (query !== '') {
    options.value = fuse.value.search(query)
  } else {
    options.value = []
  }
}
// 筛选出可以在侧栏中显示的路线 生产标题
const generateRoutes = (routes, basePath = '/', prefixTitle = []) => {
  let res = []
  for (const router of routes) {
    // 忽略隐藏的路由
    if (router.hidden) {
      continue
    }
    const data = {
      path: path.resolve(basePath, router.path),
      title: [...prefixTitle]
    }
    if (router.meta && router.meta.title) {
      data.title = [...data.title, router.meta.title]
      if (router.redirect !== 'noRedirect') {
        // 仅推送带有标题的路由
        // 特殊情况： 需要排除无重定向的父路由器
        res.push(data)
      }
    }
    if (router.children) { // 递归子路由
      const tempRoutes = generateRoutes(router.children, data.path, data.title)
      if (tempRoutes.length >= 1) {
        res = [...res, ...tempRoutes]
      }
    }
  }
  return res
}
</script>

<style lang="scss" scoped>

</style>