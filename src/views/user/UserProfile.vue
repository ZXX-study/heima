<script setup>
import PageContainer from '@/components/PageContainer.vue'
import { ref } from 'vue'
import { useUserStore } from '@/stores'
import { userUpdateInfoService } from '@/api/user'

// 表单引用
const formRef = ref()

// 表单数据
const {
  user: { username, nickname, email, id },
  getUser
} = useUserStore()
const formData = ref({
  id,
  username, // 登录名称（示例数据）
  nickname, // 用户昵称
  email // 用户邮箱
})

// 表单校验规则
const formRules = ref({
  nickname: [
    { required: true, message: '请输入用户昵称', trigger: 'blur' },
    {
      pattern: /^[^\s]{2,10}$/,
      message: '昵称必须为2-10位非空字符串',
      trigger: 'blur'
    }
  ],
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    {
      type: 'email',
      message: '请输入正确的邮箱地址',
      trigger: ['blur', 'change']
    }
  ]
})

// 提交表单
const submitForm = async () => {
  const valid = await formRef.value.validate()
  if (valid) {
    await userUpdateInfoService(formData.value)
    await getUser()
    ElMessage.success('修改成功')
  }
}
</script>

<template>
  <PageContainer title="用户信息">
    <template #default>
      <el-form
        ref="formRef"
        :model="formData"
        :rules="formRules"
        label-width="100px"
        class="demo-form"
      >
        <!-- 第一行：登录名称（禁用） -->
        <el-form-item label="登录名称" prop="username">
          <el-input v-model="formData.username" disabled />
        </el-form-item>

        <!-- 第二行：用户昵称（可输入，需校验） -->
        <el-form-item label="用户昵称" prop="nickname">
          <el-input
            v-model="formData.nickname"
            placeholder="请输入2-10位昵称"
          />
        </el-form-item>

        <!-- 第三行：用户邮箱（可输入，需校验） -->
        <el-form-item label="用户邮箱" prop="email">
          <el-input v-model="formData.email" placeholder="请输入有效邮箱地址" />
        </el-form-item>

        <!-- 第四行：提交按钮 -->
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交修改</el-button>
        </el-form-item>
      </el-form>
    </template>
  </PageContainer>
</template>

<style scoped lang="scss">
.demo-form {
  max-width: 500px;
  :deep(.el-input__wrapper) {
    border: 1px solid #dcdfe6; /* 手动添加传统边框（可选） */
  }
  :deep(.el-input__inner) {
    padding-left: 5px; /* 调整左侧间距 */
  }
}
</style>
