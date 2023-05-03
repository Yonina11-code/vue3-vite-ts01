<template>
  <nav class="fixed-top">
    <el-menu
      class="navbar top-nav-collapse"
      :default-active="activeIndex"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">LOGO</el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">Processing Center</el-menu-item>
      <el-menu-item index="3">Processing Center</el-menu-item>
      <li class="el-menu-item">
        <el-button type="primary" round>Primary</el-button>
      </li>
    </el-menu>
  </nav>
</template>

<script setup ts="ts">

</script>

<style lang="less" scoped>
.fixed-top {
  position: sticky;
  top: -1px;
  background: #B8C1C8;
  border-bottom: 1px solid #989EA4;
  border-top: 1px solid #717D85;
  color: #FFF;
  font: bold 18px/21px Helvetica, Arial, sans-serif;
  margin: 0;
 // padding: 2px 0 0 12px;
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
//   right: 0;
//   left: 0;
//   z-index: 1030;
}
.navbar {
  background-color: #ffffff;
  font-weight: 600;
  line-height: 54px;
  height: 54px;
  padding: 28px 100px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.05);
}
.top-nav-collapse {
  background-color: #ffffff;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05);
}
.flex-grow {
  flex-grow: 1;
}
</style>