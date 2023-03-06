<template>
  <base-msg01 :name="data.name"></base-msg01>
</template>

<script setup>
import baseMsg01 from '@/components/baseMg/baseMsg01.vue'
import { reactive } from 'vue'
let data = reactive({
  name: 'test0101'
})
// 获取基本数据
function getMsg () {

}
</script>

<style lang="scss" scoped>

</style>