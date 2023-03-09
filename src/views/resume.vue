<template>
<div class="resume-content">
  <base-msg01 :data="data.baseMsg"></base-msg01>
  <title01 :config="optionConfig.title" name="搜狗拼音"></title01>
</div>
</template>

<script setup>
import baseMsg01 from '@/components/baseMg/baseMsg01.vue'
import title01 from '@/components/titles/title01.vue'
import api from '@/mock/index.ts'
import { optionConfig } from '@/const/index.ts'
import { reactive } from 'vue'
let data = reactive({
  name: 'test0101'
})
getMsg()
// 获取基本数据
function getMsg () {
  data = api[0].response().data
}
</script>

<style lang="less" scoped>
.resume-content {
  padding: 20px;
}
</style>