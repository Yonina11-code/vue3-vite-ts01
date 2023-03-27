<template>
  <!-- <PageWrapLayout> -->
    <div ref="content" class="resume-content app-container">
      <div class="app-container-inner">
        <template v-for="block in optionConfig.columns" :key="block.name">
          <!-- 基本信息 -->
          <base-msg01 v-if="block.type === 'base'" :data="data[block.prop]"></base-msg01>
          <template v-else-if="block.type === 'skill'">
            <!-- 专业技能 -->
            <title01 :config="optionConfig.title" :name="block.name"></title01>
            <div class="flex-wrap">
              <description01 class="skill" v-for="des in data[block.prop]" :key="des" :data="des"></description01>
            </div>
          </template>
          <template v-else-if="block.type === 'job'">
            <!-- 工作经验 -->
            <title01 :config="optionConfig.title" :name="block.name"></title01>
            <job01 v-for="item in data[block.prop]" :key="item.name" :data="item"></job01>
          </template>
          <template v-else-if="block.type === 'project'">
            <!-- 项目经验 -->
            <title01 :config="optionConfig.title" :name="block.name"></title01>
            <experience01 v-for="item in data[block.prop]" :key="item.name" :data="item" :options="block.items"></experience01>
          </template>
          <template v-else-if="block.type === 'self'">
            <!-- 自我评价 -->
            <title01 :config="optionConfig.title" :name="block.name"></title01>
            <div>{{data[block.prop]}}</div>
          </template>
        </template>
      </div>
    <!-- </PageWrapLayout> -->
      </div>
    <el-button @click="handlePrint($event)">打印</el-button>
</template>

<script lang="ts" setup>
import baseMsg01 from '@/components/baseMg/baseMsg01.vue'
import title01 from '@/components/titles/title01.vue' // 标题
import job01 from '@/components/jobs/job01.vue'
import description01 from '@/components/descriptions/description01.vue'
import experience01 from '@/components/experiences/experience01.vue'
import api from '@/mock/index.ts'
import { optionConfig } from '@/const/index.ts'
import { reactive, ref } from 'vue'
import { htmlToPdf, downloadPDF } from '@/utils/htmlToPdf.ts'
import { outputPDF } from '@/utils/outputPDF.js'
let data = reactive({
  name: 'test0101'
})
let content = ref()
getMsg()
// 获取基本数据
function getMsg () {
  data = api[0].response().data
}
function handlePrint (color) {
  // htmlToPdf('test', content.value)
  console.log('color', content.value)
  outputPDF({
    element: content.value
  })
}
</script>

<style lang="less" scoped>
.resume-content {
  // padding: 20px;
  width: 592.28*2px;
  page-break-inside: avoid;
  background-color: var(--color-background);
}
.skill {
  width: 50%;
}
</style>