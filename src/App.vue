<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import myHeader from '@/components/myHeader.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <my-header></my-header>
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
</style>
