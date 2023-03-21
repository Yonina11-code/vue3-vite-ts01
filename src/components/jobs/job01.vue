<template>
<div class="flex-justify-between">
  <div class="bold" v-for="item in data" :key="item">{{item}}</div>
  <slot></slot>
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  data: {
    type: Object,
    default: {}
  }
})
</script>

<style lang="scss" scoped>

</style>