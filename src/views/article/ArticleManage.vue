<script setup>
import { ref } from 'vue'
import { Edit, Delete } from '@element-plus/icons-vue'
import ChannelSelect from './components/ChannelSelect.vue'
import { getArticleListSelect, artDelService } from '@/api/artivle'
import { formatTime } from '@/utils/format'
import ArticleEdit from './components/ArticleEdit.vue'
import { ElMessageBox, ElMessage } from 'element-plus'

const loading = ref(false)
const articleList = ref([]) // 文章列表数据
const total = ref(0) //文章总数
const articleEditRef = ref()

//获取文章列表参数
const params = ref({
  pagenum: 1,
  pagesize: 3,
  cate_id: '',
  state: ''
})

//获取文章列表
const getArticleList = async () => {
  loading.value = true
  const res = await getArticleListSelect(params.value)
  articleList.value = res.data.data
  total.value = res.data.total
  loading.value = false
}
getArticleList()

const onAdd = () => {
  articleEditRef.value.handleOpen({})
}

const onChange = (row) => {
  articleEditRef.value.handleOpen(row)
}

const onDelete = async (row) => {
  await ElMessageBox.confirm('确定删除该文章吗?', '温馨提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
  await artDelService(row.id)
  ElMessage({ type: 'success', message: '删除成功' })
  getArticleList()
}

// 搜索重置
const OnSearch = () => {
  params.value.pagenum = 1
  getArticleList()
}
const OnReset = () => {
  params.value.pagenum = 1
  params.value.cate_id = ''
  params.value.state = ''
  getArticleList()
}

//处理分页逻辑
const onSizeChange = (size) => {
  params.value.pagenum = 1
  params.value.pagesize = size
  getArticleList()
}
const onCurrentChange = (page) => {
  params.value.pagenum = page
  getArticleList()
}

//处理文章添加和修改
const OnchangeArticle = (state) => {
  if (state === 'add') {
    params.value.pagenum = Math.ceil((total.value + 1) / params.value.pagesize)
  }
  getArticleList()
}
</script>

<template>
  <page-container title="文章管理">
    <template #extra>
      <el-button @click="onAdd" type="primary"> 发布文章 </el-button>
    </template>

    <!-- 表单筛选 -->
    <el-form inline>
      <el-form-item label="文章分类：">
        <channel-select v-model="params.cate_id"></channel-select>
      </el-form-item>
      <el-form-item label="发布状态：">
        <el-select v-model="params.state">
          <el-option label="已发布" value="已发布"></el-option>
          <el-option label="草稿" value="草稿"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="OnSearch">搜索</el-button>
        <el-button @click="OnReset">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格 -->
    <el-table v-loading="loading" :data="articleList" style="width: 100%">
      <el-table-column prop="title" label="文章标题" width="300">
        <template #default="scope">
          <el-link type="primary">{{ scope.row.title }}</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="cate_name" label="分类"> </el-table-column>
      <el-table-column prop="pub_date" label="发表时间">
        <template #default="{ row }">
          {{ formatTime(row.pub_date) }}
        </template>
      </el-table-column>
      <el-table-column prop="state" label="状态"></el-table-column>
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button
            circle
            plain
            :icon="Edit"
            type="primary"
            @click="onChange(row)"
          ></el-button>
          <el-button
            circle
            plain
            :icon="Delete"
            type="danger"
            @click="onDelete(row)"
          ></el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty description="没有数据" />
      </template>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      v-model:current-page="params.pagenum"
      v-model:page-size="params.pagesize"
      :page-sizes="[2, 3, 5]"
      :background="true"
      layout="jumper, total, sizes, prev, pager, next "
      :total="total"
      @size-change="onSizeChange"
      @current-change="onCurrentChange"
      style="margin-top: 30px; justify-content: flex-end"
    />

    <!-- 文章抽屉 -->
    <article-edit
      ref="articleEditRef"
      @success="OnchangeArticle"
    ></article-edit>
  </page-container>
</template>

<style lang="scss" scoped>
.el-select {
  --el-select-width: 210px;
}
</style>
