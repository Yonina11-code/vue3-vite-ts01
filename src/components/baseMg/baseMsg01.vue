<template>
  <h1 :style="options.name.style">{{data[options.name.prop]}}</h1>
  <div class="flex-row-wrap" :style="options.style">
    <div class="item" v-for="(item, index) in options.columns" :key="index">
      <span v-if="item.label" :style="item.style">{{item.label}}:</span>
      <span :style="item.style">{{data[item.prop]}}</span>
    </div>
  </div>

</template>

<script setup lang="ts">
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