<template>
  <div class="flex-start resume-container">
    <div>
      <!--startprint-->
      <div ref="content" id="demo" class="resume-content app-container">
        <div class="app-container-inner">
          <div class="card">
            <div class="card-content">
              <h2>文章标题</h2>
              <p>创建时间：2023年5月6日</p>
            </div>
          </div>

          <div class="card">
            <div class="card-content">
              <h2>文章标题</h2>
              <p>创建时间：2023年5月6日</p>
            </div>
          </div>

          <div class="card">
            <div class="card-content">
              <h2>文章标题</h2>
              <p>创建时间：2023年5月6日</p>
            </div>
          </div>

          <div class="card">
            <div class="card-content">
              <h2>文章标题</h2>
              <p>创建时间：2023年5月6日</p>
            </div>
          </div>
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
.card {
  display: flex;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.card-content {
  padding: 20px;
  width: 100%;
}

.card h2 {
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 10px;
}

.card p {
  font-size: 14px;
  color: #999999;
  margin-top: 0px;
  margin-bottom: 0px;
}

.card-link {
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  margin-right: 20px;
}

.card-link:hover {
  background-color: #0069d9;
}

.card-link:active {
  background-color: #005cbf;
}
</style>