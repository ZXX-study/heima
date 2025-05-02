<script setup>
import { ref } from 'vue'
import { getChannelsList } from '@/api/artivle'

const channelList = ref([])
const getChannels = async () => {
  const res = await getChannelsList()
  channelList.value = res.data.data
}
const model = defineModel({ type: [String, Number] })
const width = defineModel('width', { type: String, default: '210px' })

getChannels()
</script>

<template>
  <el-select v-model="model" :style="{ width }">
    <el-option
      v-for="item in channelList"
      :key="item.id"
      :label="item.cate_name"
      :value="item.id"
    ></el-option>
  </el-select>
</template>
