<template>
<div ref="content" class="resume-content">
  <!-- <h1>tetet</h1> -->
  <base-msg01 :data="data.baseMsg"></base-msg01>
  <title01 :config="optionConfig.title" name="搜狗拼音"></title01>
</div>
<el-button @click="handlePrint">打印</el-button>
</template>

<script lang="ts" setup>
import baseMsg01 from '@/components/baseMg/baseMsg01.vue'
import title01 from '@/components/titles/title01.vue'
import api from '@/mock/index.ts'
import { optionConfig } from '@/const/index.ts'
import { reactive, ref } from 'vue'
import { htmlToPdf, downloadPDF } from '@/utils/htmlToPdf.ts'
let data = reactive({
  name: 'test0101'
})
let content = ref()
getMsg()
// 获取基本数据
function getMsg () {
  data = api[0].response().data
}
function handlePrint () {
  console.log('content', content.value)
  htmlToPdf('test', content.value)
}
</script>

<style lang="less" scoped>
.resume-content {
  padding: 20px;
  width: 100%;
}
</style>