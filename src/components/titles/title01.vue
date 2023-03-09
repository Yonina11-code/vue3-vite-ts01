<template>
  <div class="name" :style="config.style">{{name}}</div>
</template>

<script setup>
const props = defineProps({
  name: String,
  data: {
    type: [Object],
    default: {}
  },
  config: {
    type: [Object],
    default: {}
  }
})
</script>

<style lang="less" scoped>
.name {
  // text-align: center;
  line-height: 15px;
  margin: 10px 0;
  &::after {
    content: '';
    display: inline-block;
    width: 100%;
    border-top: 1px solid;
  }
}
</style>