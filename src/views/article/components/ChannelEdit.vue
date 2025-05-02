<script setup>
import { ref } from 'vue'
import { artAddChannels, artEditChannels } from '@/api/artivle'
import { ElMessage } from 'element-plus'
const dialogVisible = ref(false)
const formRef = ref(null)

const form = ref({
  cate_name: '',
  cate_alias: ''
})
const rules = ref({
  cate_name: [
    { required: true, message: '分类名称不能为空', trigger: 'blur' },
    {
      pattern: /^\S{1,10}$/,
      message: '分类名称需为 1 到 10 的非空字符',
      trigger: 'blur'
    }
  ],
  cate_alias: [
    { required: true, message: '分类别名不能为空', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9]{1,15}$/,
      message: '分类别名需为 1 到 15 的字母数字组合',
      trigger: 'blur'
    }
  ]
})

const emit = defineEmits(['success'])
const onSubmit = async () => {
  await formRef.value.validate()
  const isEdit = form.value.id
  if (isEdit) {
    await artEditChannels(form.value)
    ElMessage.success('编辑成功')
  } else {
    await artAddChannels(form.value)
    ElMessage.success('添加成功')
  }

  dialogVisible.value = false
  emit('success')
}
const on = (row) => {
  form.value = { ...row }
  dialogVisible.value = true
}
defineExpose({ on })
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    :title="form.cate_name ? '编辑分类' : '添加分类'"
    width="30%"
    style="padding-right: 50px"
  >
    <el-form ref="formRef" :model="form" :rules="rules" label-width="100px">
      <el-form-item label="分类名称" prop="cate_name">
        <el-input v-model="form.cate_name" placeholder="请输入分类名称" />
      </el-form-item>
      <el-form-item label="分类别名" prop="cate_alias">
        <el-input v-model="form.cate_alias" placeholder="请输入分类别名" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="onSubmit"> 确定 </el-button>
      </div>
    </template>
  </el-dialog>
</template>
