<template>
  <div class="flex-row-wrap" :style="options.style">
    <div class="item" v-for="(item, index) in options.column" :key="index" :style="item.style">
      <span v-if="item.label">{{item.label}}:</span>
      <span>{{data[item.prop]}}</span>
    </div>
  </div>

</template>

<script setup>
import { optionsConfig } from './config.ts'
import { ref } from 'vue'
const props = defineProps({
  name: String,
  data: {
    type: [Object],
    default: {}
  }
})
const options = ref(optionsConfig())
</script>

<style lang="less" scoped>
.item {
  flex: 1;
}
</style>