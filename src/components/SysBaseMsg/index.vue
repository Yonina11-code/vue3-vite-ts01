<template>
  <div class="content">
    <p class="title">个人信息</p>
    <div class="flex-justify-between">
      <div class="flex-start-center base-avatar">
        <img class="avatar" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
        <label>test</label>
      </div>
      <div class="flex-column-start base-pro">
        <p>用户登录： LV12</p>
        <el-progress :percentage="100" :format="format" />
      </div>
    </div>
    <el-divider />
  </div>
</template>

<script setup lang="ts">
  const format = (percentage: number) => (percentage === 100 ? 'Full' : `${percentage}%`)
</script>

<style lang="scss" scoped>
.content {
  flex: 1;
  padding: 20px;
  // background-color: var(--color-background);
  .title {
    height: 48px;
  }
  .base-avatar {
    flex: 1;
    .avatar {
      width: 48px;
      height: 48px;
      object-fit: cover;
      border-radius: 50%;
      margin-right: 20px;
    }
  }
  .base-pro {
    flex: 2;
  }
}
.el-progress--line {
  margin-bottom: 15px;
  width: 100%;
}
</style>