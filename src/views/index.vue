<template>
  <div>
    <!-- section3 -->
    <section id="section3">
      <div class="section3-title">在线简历制作工具</div>
      <div class="section3-description">以最简单的方式来写好简历，只需<span>专注内容本身</span>而<span>无需关注排版</span></div>
      <div class="section3-button">快速体验</div>
    </section>

    <!-- section1 -->
    <section id="section1">
      <h1>特色功能</h1>
      <div id="content">
        <div id="text-container">
          <h2>多主题选择</h2>
          <p>一份内容，多份简历，多种样式和排版尽收眼底</p >
        </div>
        <div id="image-container">
          <img src="@/assets/image/index/tip-login-icon.svg" alt>
        </div>
      </div>
    </section>

    <!-- section2 -->
    <section id="section2">
      <div id="content">
        <div id="image-container">
          <img src="@/assets/image/index/tip-login-icon.svg" alt>
        </div>
        <div id="text-container">
          <h2>智能一页</h2>
          <p>告别简历一页写不下，两页却太长的尴尬境地</p >
        </div>
      </div>
    </section>

    <!-- section4 -->
    <section id="section1">
      <div id="content">
        <div id="text-container">
          <h2>智能检测</h2>
          <p>错别字，常见专业英文词汇，标点误用一网打尽</p >
        </div>
        <div id="image-container">
          <img src="@/assets/image/index/tip-login-icon.svg" alt="" />
        </div>
      </div>
    </section>

    <!-- section5 -->
    <section id="section2">
      <div id="content">
        <div id="image-container">
          <img src="@/assets/image/index/tip-login-icon.svg" alt>
        </div>
        <div id="text-container">
          <h2>插件模式</h2>
          <p>可插拔式的设置，随时给你一片清爽的编辑页面</p >
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
// import type image from ''
</script>

<style lang="less" scoped>
    /* 全局样式 */
    body {
      margin: 0;
      padding: 0;
    }

    #section3 {
      background: linear-gradient(to right, #e8f3f4, #e1a5c9);
      background-color: #d9d9d9; /* 备用背景颜色，如果浏览器不支持渐变则显示此颜色 */
      padding: 50px;
      height: 350px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    .section3-title,
    .section3-description,
    .section3-button {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: left;
    }

    .section3-title {
      font-size: 50px;
      font-weight: bold;
    }

    .section3-description {
      margin-top: 10px;
      font-size: 18px;
    }

    .section3-description span {
      color: #54a9fb;
      font-weight: bold;
    }

    .section3-button {
      margin-top: 20px;
      font-size: 18px;
      background-color: #54a9fb;
      color: #fff;
      width: 120px;
      height: 40px;
      border-radius: 10px;
    }

    /* section1 样式 */
    #section1 {
      background-color: #f2f2f2;
      padding: 50px;
    }

    /* section1 标题样式 */
    #section1 h1 {
      font-size: 50px;
      text-align: center;
    }

    /* section1 内容容器样式为弹性盒子 */
    #section1 #content {
      display: flex;
      justify-content: center; /* 修改这行 */
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding-top: 50px;
    }

    /* section1 左侧容器样式 */
    #section1 #text-container {
      width: 100%;
      max-width: 600px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-right: 30px; /* 新增这行 */
    }

    /* section1 左侧标题样式 */
    #section1 #text-container h2 {
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    /* section1 左侧文本样式 */
    #section1 #text-container p {
      font-size: 16px;
      line-height: 1.6;
    }

    /* section1 右侧图片容器 */
    #section1 #image-container {
      box-sizing: border-box;
      width: 100%;
      max-width: 600px;
      height: 400px;
      margin-left: 30px; /* 修改这行 */
    }

    /* section1 图片元素 */
    #section1 #image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* section2 样式 */
    #section2 {
      background-color: #d9d9d9;
      padding: 50px;
    }

    /* section2 标题样式 */
    #section2 h1 {
      text-align: center;
    }

    /* section2 内容容器样式为弹性盒子 */
    #section2 #content {
      display: flex;
      justify-content: center; /* 修改这行 */
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding-top: 50px;
    }

    /* section2 左侧图片容器 */
    #section2 #image-container {
      box-sizing: border-box;
      width: 100%;
      max-width: 600px;
      height: 400px;
      margin-right: 30px; /* 修改这行 */
    }

    /* section2 右侧容器样式 */
    #section2 #text-container {
      width: 100%;
      max-width: 600px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 30px; /* 新增这行 */
    }

    /* section2 右侧标题样式 */
    #section2 #text-container h2 {
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    /* section2 右侧文本样式 */
    #section2 #text-container p {
      font-size: 16px;
      line-height: 1.6;
    }
</style>
