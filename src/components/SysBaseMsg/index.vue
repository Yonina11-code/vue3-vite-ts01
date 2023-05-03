<template>
  <div class="content">
    <p class="title">个人信息</p >
    <div class="flex-justify-between">
      <div class="flex-start-center base-avatar">
        <img class="avatar" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
        <label>test</label>
      </div>
      <div class="flex-column-start base-pro">
        <p>用户登录： LV12</p >
        <el-progress :percentage="100" :format="format" />
      </div>
    </div>
    <el-divider />
    <!-- 登录信息 -->
    <div class="base-login-info">
      <div class="base-login-info-item" v-for="item of loginArr" :key="item.id">
        <div class="base-login-info-item-title">{{item.title}}</div>
        <div class="base-login-info-item-content">{{item.value}}</div>
      </div>
    </div>
    <!-- 最近编辑 -->
    <div class="base-login-edit">
      <p class="title">最近编辑</p >
      <div class="base-login-edit-resume" v-for="item of resumeArr" :key="item.id">
        <div class="base_login-edit-resume-title">
          <el-icon :size="25" color="hotpink">
            <edit />
          </el-icon>
          {{item.title}}
        </div>
        <div>{{item.time}}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref,reactive } from 'vue'
  import { Edit } from '@element-plus/icons-vue'
  import { api } from '@/axios/api'

  interface loginArrObj{
  id:number,
  title?:string,
    value?:string
 }

  interface resumeArrObj{
    id: number,
    title?: string,
    time?: string
  }

  const loginArr = ref<loginArrObj[]>([{id:1, title:"最近登录时间", value:"2023-04-03 00:00:00"}, {id:2, title:"最近登录IP地址", value:"127.0.0.1"}, {id:3, title:"当前登录用户IP", value:"127.0.0.1"}])

  const resumeArr = ref<resumeArrObj[]>([{id:1, title:"如何快速定制个性化简历?", time:"2023-04-03 00:00:00"}, {id:2, title:"如何快速定制个性化简历?", time:"2023-04-03 00:00:00"}, {id:3, title:"如何快速定制个性化简历?", time:"2023-04-03 00:00:00"}])

  const format = (percentage: number) => (percentage === 100 ? 'Full' : `${percentage}%`)
  const getBaseMsg = () => {
    api
  }
</script>

<style lang="less" scoped>
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
  .base-login-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .base-login-info-item {
      display: flex;
      flex-direction: column;
      align-content: center;
      .base-login-info-item-title {
        font-size: 12px;
        color: #ebecef;
      }
      .base-login-info-item-content {
        color: #000000;
      }
    }
  }
  .base-login-edit {
    margin-top: 10px;
    .base-login-edit-resume {
      display: flex;
      margin-top: 5px;
      flex-direction: row;
      justify-content: space-between;
    }
    .base_login-edit-resume-title {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }
  }
}
.el-progress--line {
  margin-bottom: 15px;
  width: 100%;
}
</style>