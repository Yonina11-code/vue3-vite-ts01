<template>
  <div class="m-tool-right">
    <GlobalComSize class="item-children" />
    <HeaderSearch class="item-children" />
    <!-- <Remind class="item-children" />  -->
    <!-- <ScreenFull class="item-children" /> -->
    <Setting class="item-children" />
    <!-- <Avatar /> -->
  </div>
</template>

<script lang="ts" setup>
  import GlobalComSize from './components/globalComSize.vue'
  import HeaderSearch from './components/HeaderSearch.vue'
  // import Remind from './components/Remind.vue' // 消息通知
  // import ScreenFull from './components/ScreenFull.vue' // 全屏
  import Setting from './components/Setting.vue'
  // import Avatar from './components/Avatar.vue'
</script>

<style lang="scss" scoped>
  .m-tool-right {
    display: flex;
    align-items: center;
    height: 100%;
    .item-children {
      display: flex;
      margin-right: 22px;
    }
  }
</style>
