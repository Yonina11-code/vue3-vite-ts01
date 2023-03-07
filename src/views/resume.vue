<template>
<div class="resume-content">
  <base-msg01 :name="data.name" :data="data"></base-msg01>
</div>
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

<style lang="less" scoped>
.resume-content {
  padding: 20px;
}
</style>