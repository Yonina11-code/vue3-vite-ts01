<template>
  <div class="sidebar-logo-container">
    <transition name="sidebarLogoFadeCl">
      <router-link v-if="isCollapse" to="/" class="sidebar-logo-link">
        <img class="sidebar-logo" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
      </router-link>
      <router-link v-else to="/" class="sidebar-logo-link">
        <img class="sidebar-logo" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
        <h1 class="sidebar-title">vue Admin</h1>
      </router-link>
    </transition>
  </div>
</template>

<script lang="ts" setup>
  defineProps<{ isCollapse: boolean }>()
</script>

<style lang="scss" scoped>
  .sidebarLogoFadeCl-enter-active {
    transition: opacity 2s;
  }
  .sidebarLogoFadeCl-enter-from,
  .sidebarLogoFadeCl-leave-to {
    opacity: 0;
  }
  .sidebar-logo-container {
    position: relative;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #2b2f3a;
    text-align: center;
    overflow: hidden;

    & .sidebar-logo-link {
      height: 100%;
      width: 100%;

      & .sidebar-logo {
        width: 32px;
        height: 32px;
        vertical-align: middle;
      }
      & .sidebar-title {
        display: inline-block;
        margin: 0;
        color: #fff;
        font-weight: 600;
        margin-left: 12px;
        line-height: 50px;
        font-size: 14px;
        vertical-align: middle;
      }
    }
  }
</style>
