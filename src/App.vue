<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import myHeader from '@/components/myHeader.vue'
// 自适应
	function resize() {
		let fs = document.body.clientWidth / 75;
        // 上面的75是根据设计图尺寸修改，例如设计图宽为1220，给左右两边各留10px，即1220-20=1200，1200/16(字体大小)等于75

		if (fs > 16) { // 控制字体大小，以免过大过小
			fs = 16;
		} else if (fs < 14) {
			fs = 14;
		}
    // 👇注意这里不能直接document.body.style
		document.body.parentNode.style = "font-size: " + fs + "px;";
	}
	resize()
	window.onresize = resize;
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <my-header></my-header>
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
</style>
