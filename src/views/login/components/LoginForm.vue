<template>
  <div class="login-title">
    <img class="icon" src="@/assets/image/logo.png" alt="logo" />
    <h2 class="title">Vue-Admin</h2>
  </div>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules">
    <el-form-item label="" prop="username">
      <el-input
        placeholder="请输入用户名"
        autoComplete="on"
        style="position: relative"
        v-model="ruleForm.username"
        @keyup.enter.native="submitForm(ruleFormRef)">
          <template #prefix>
            <el-icon class="el-input_icon">
              <UserFilled />
            </el-icon>
          </template>
        </el-input>
    </el-form-item>
    <el-form-item label="" prop="password">
      <el-input
        placeholder="请输入密码"
        autoComplete="on"
        @keyup.enter.native="submitForm(ruleFormRef)"
        v-model="ruleForm.password"
        :type="passwordType">
          <template #prefix>
            <el-icon class="el-input__icon">
              <GoodsFilled />
            </el-icon>
          </template>
          <template #suffix>
            <el-icon class="el-input__icon" @click="changePasswordType">
              <View  v-if="passwordType === 'text'"/>
              <Hide v-else />
            </el-icon>
          </template>
        </el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button
        class="login-btn"
        type="primary"
        @click="submitForm(ruleFormRef)">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { UserFilled, GoodsFilled, View, Hide } from '@element-plus/icons-vue'
import type { FormInstance } from 'element-plus';
import { useUserStore } from '@/pinia/modules/user.ts'
import { useRouter } from 'vue-router'
const ruleFormRef = ref<FormInstance>() // 主要用于校验表单
const UserStore = useUserStore()
const router = useRouter()
const passwordType = ref('text')
const ruleForm = reactive({
  username: 'admin',
  password: '123456'
})
const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})
const submitForm = (formEl: FormInstance | undefined) => {
  formEl.validate((valid) => {
    console.log('valid', valid)
    if (valid) {
      setTimeout(async () => {
        await UserStore.login(ruleForm)
        await router.push({
          path: '/'
        })
      })
    }
  })
}
const changePasswordType = () => {
  passwordType.value = passwordType.value === 'text' ? 'password' : 'text'
}
</script>

<style lang="scss" scoped>

</style>