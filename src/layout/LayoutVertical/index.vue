<template>
  <!-- 纵向布局 -->
  <Siddebar></Siddebar>
  <div>
    <HeaderVertical></HeaderVertical>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Siddebar from '../components/Sidebar/index.vue'
import HeaderVertical from './HeaderVertical/index.vue'
import Main from '../components/Main/index.vue'
import Footer from '../components/Footer/index.vue'
</script>

<style lang="scss" scoped></style>
