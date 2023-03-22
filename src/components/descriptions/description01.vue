<template>
  <div class="setence">{{data}}</div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: [Array, Object]
  }
})
</script>

<style lang="scss" scoped>
.setence {
  &::before {
    content: '';
    display: inline-block;
    background-color: var(--color-text);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 5px;
    // vertical-align: text-bottom;
  }
}
</style>