<script setup>
import { ref } from 'vue'
import { userUpdatePasswordService } from '@/api/user'
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router'

// 表单数据
const pwdForm = ref({
  old_pwd: '',
  new_pwd: '',
  re_pwd: ''
})

// 表单引用
const formRef = ref()
const userStore = useUserStore()
const router = useRouter()

// 验证新旧密码不相同
const validateDiffPassword = (rule, value, callback) => {
  if (value === pwdForm.value.old_pwd) {
    callback(new Error('新密码不能与原密码相同'))
  } else {
    callback()
  }
}

// 验证两次新密码输入一致
const validateSamePassword = (rule, value, callback) => {
  if (value !== pwdForm.value.new_pwd) {
    callback(new Error('两次输入的密码不一致'))
  } else {
    callback()
  }
}

// 表单验证规则
const rules = {
  old_pwd: [
    { required: true, message: '请输入原密码', trigger: 'blur' },
    { min: 6, max: 15, message: '密码长度在6到15个字符', trigger: 'blur' }
  ],
  new_pwd: [
    { required: true, message: '请输入新密码', trigger: 'blur' },
    { min: 6, max: 15, message: '密码长度在6到15个字符', trigger: 'blur' },
    { validator: validateDiffPassword, trigger: 'blur' }
  ],
  re_pwd: [
    { required: true, message: '请再次输入新密码', trigger: 'blur' },
    { min: 6, max: 15, message: '密码长度在6到15个字符', trigger: 'blur' },
    { validator: validateSamePassword, trigger: 'blur' }
  ]
}

// 提交表单
const submitForm = async () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      await userUpdatePasswordService(pwdForm.value)
      // 退出登录
      userStore.setToken('')
      userStore.setUser({})
      // 清除本地保存的登录信息
      localStorage.removeItem('savedLogin')

      ElMessage.success('修改成功')
      router.push('/login')
    } else {
      ElMessage.error('请检查表单输入')
      return false
    }
  })
}

// 重置表单
const resetForm = () => {
  formRef.value.resetFields()
}
</script>

<template>
  <page-container title="重置密码">
    <div>
      <el-form
        ref="formRef"
        :model="pwdForm"
        :rules="rules"
        label-width="120px"
        label-position="right"
        style="max-width: 500px"
      >
        <!-- 原密码 -->
        <el-form-item label="原密码" prop="old_pwd">
          <el-input
            v-model="pwdForm.old_pwd"
            type="password"
            show-password
            placeholder="请输入原密码"
          />
        </el-form-item>

        <!-- 新密码 -->
        <el-form-item label="新密码" prop="new_pwd">
          <el-input
            v-model="pwdForm.new_pwd"
            type="password"
            show-password
            placeholder="请输入新密码"
          />
        </el-form-item>

        <!-- 确认密码 -->
        <el-form-item label="确认密码" prop="re_pwd">
          <el-input
            v-model="pwdForm.re_pwd"
            type="password"
            show-password
            placeholder="请再次输入新密码"
          />
        </el-form-item>

        <!-- 按钮行 -->
        <el-form-item>
          <el-button type="primary" @click="submitForm">修改密码</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </page-container>
</template>

<style scoped>
:deep(.el-input__wrapper) {
  border: 1px solid #dcdfe6; /* 手动添加传统边框（可选） */
}
:deep(.el-input__inner) {
  padding-left: 5px; /* 调整左侧间距 */
}
</style>
