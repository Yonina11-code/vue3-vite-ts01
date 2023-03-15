<template>
  <div>
    <transition>
      <router-link v-if="isCollapse" to="/">
        <img class="icon" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
      </router-link>
      <router-link v-else to="/">
        <img class="icon" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
        <h1> vue Admin</h1>
      </router-link>
    </transition>
  </div>
</template>

<script lang="ts" setup>
  defineProps<{ isCollapse: boolean }>()
</script>

<style lang="less" scoped>
.icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>