<template>
  <!-- 纵向布局 -->
  <Siddebar class="noNeedPrint"></Siddebar>
  <div class="main-container">
    <HeaderVertical class="noNeedPrint"/>
    <Main></Main>
    <Footer class="noNeedPrint"></Footer>
  </div>
</template>

<script setup>
import Siddebar from '../components/Sidebar/index.vue'
import HeaderVertical from './HeaderVertical/index.vue'
import Main from '../components/Main/index.vue'
import Footer from '../components/Footer/index.vue'
</script>

<style lang="scss" scoped>
  .g-container-layout {
    height: 100%;
    width: 100%;
    .main-container {
      display: flex;
      flex: 1;
      box-sizing: border-box;
      flex-direction: column;
    }
    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }
  .sidebar-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 90;
  }
</style>
