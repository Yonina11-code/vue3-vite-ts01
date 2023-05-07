<template>
  <div class="flex-start resume-container">
    <div>
      <div class="noNeedPrint">
        <!-- <el-button @click="handleWindowPrint()">打印</el-button> -->
        <el-button v-print="'#demo'">打印</el-button>
        <el-button @click="handleEdit()">编辑</el-button>
      </div>
      <!--startprint-->
      <div ref="content" id="demo" class="resume-content app-container">
        <div class="app-container-inner">
          <template v-for="block in optionConfig.column" :key="block.label">
            <!-- 基本信息 -->
            <base-msg01 v-if="block.blockType === 'base'" :data="data[block.prop]"></base-msg01>
            <template v-else-if="block.blockType === 'skill'">
              <!-- 专业技能 -->
              <title01 :config="optionConfig.title" :name="block.label"></title01>
              <div class="flex-wrap">
                <description01 class="skill" v-for="des in data[block.prop]" :key="des" :data="des"></description01>
              </div>
            </template>
            <template v-else-if="block.blockType === 'job'">
              <!-- 工作经验 -->
              <title01 :config="optionConfig.title" :name="block.label"></title01>
              <job01 v-for="item in data[block.prop]" :key="item.label" :data="item"></job01>
            </template>
            <template v-else-if="block.blockType === 'project'">
              <!-- 项目经验 -->
              <title01 :config="optionConfig.title" :name="block.label"></title01>
              <experience01 v-for="item in data[block.prop]" :key="item.label" :data="item" :options="block.column"></experience01>
            </template>
            <template v-else-if="block.blockType === 'self'">
              <!-- 自我评价 -->
              <title01 :config="optionConfig.title" :name="block.label"></title01>
              <div>{{data[block.prop]}}</div>
            </template>
          </template>
        </div>
        </div>
    </div>
    <!--endprint-->
    <iframe ref="printf" src="" width="0" height="0" frameborder="0"></iframe>
    <SysBaseMsg class="noNeedPrint" />
    <el-dialog v-model="dialogVisible" class="noNeedPrint" width="80%">
      <avue-form ref="form" :option="options" v-model="data">
        <template #baseMsg="{disabled, size}">
          <avue-form ref="baseMsgForm" :option="baseOptions" v-model="data.baseMsg"></avue-form>
        </template>
      </avue-form>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import baseMsg01 from '@/components/baseMg/baseMsg01.vue'
import title01 from '@/components/titles/title01.vue' // 标题
import job01 from '@/components/jobs/job01.vue'
import description01 from '@/components/descriptions/description01.vue'
import experience01 from '@/components/experiences/experience01.vue'
import SysBaseMsg from '@/components/SysBaseMsg/index.vue'
import api from '@/mock/index.ts'
import { optionConfig, options, baseOptions } from '@/const/index.ts'
import { reactive, ref } from 'vue'
// import { htmlToPdf, downloadPDF } from '@/utils/htmlToPdf.ts'
import { outputPDF } from '@/utils/outputPDF.js'
let data = reactive({
  name: 'test0101'
})
let content = ref() // 打印dom
let printf = ref()
let dialogVisible = ref(false)
getMsg()
// 获取基本数据
function getMsg () {
  data = api[0].response().data
}
// 打印
function handlePrint () {
  // htmlToPdf('test', content.value)
  console.log('color', content.value)
  outputPDF({
    element: content.value
  })
}
// 打印测试
function handleWindowPrint(ele, fileName) {
  //转异步 等待dom元素渲染（样式）完毕在打印
  setTimeout(() => {
    //打印
    window.print()
    //刷新页面
    window.location.reload()
  }, 20)
  //重新设会当前页面
  // window.document.body.innerHTML = bdHtml;
  // document.querySelector('#app').innerHTML =  bdHtml;
  //刷新页面
  // window.location.reload();
}
// 编辑
function handleEdit () {
  dialogVisible.value = true
  console.log('dialogVisible', dialogVisible)
}
</script>

<style lang="less" scoped>
.resume-container {
  background-color: #fff;
}
.resume-content {
  // padding: 20px;
  width: 900px;
  // height: 1568px;
  page-break-inside: avoid;
  background-color: var(--color-background);
}
.skill {
  width: 50%;
}
</style>