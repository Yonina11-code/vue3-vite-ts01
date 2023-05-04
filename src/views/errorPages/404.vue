<template>
  <div class="content flex-center">
    <video class="background" autoplay loop muted>
      <source src="@/assets/404_images/404.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.content {
  height: 100vh;
  background-color: #ffffff;
  .background {
    object-fit: contain;
  }
}
</style>