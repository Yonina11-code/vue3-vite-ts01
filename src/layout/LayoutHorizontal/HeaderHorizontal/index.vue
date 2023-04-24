<template>
  <nav class="fixed-top navbar top-nav-collapse">
    <div></div>
    <div></div>
  </nav>
</template>

<script setup ts="ts">

</script>

<style lang="less" scoped>
.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}
.navbar {
  background-color: #ffffff;
  font-weight: 600;
  line-height: 54px;
  height: 54px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.05);
}
.top-nav-collapse {
  padding-top: 28px;
  padding-bottom: 28px;
  background-color: #ffffff;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05);
}
</style>