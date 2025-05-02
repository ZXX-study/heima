import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userGetrInfoService } from '@/api/user'

export const useUserStore = defineStore(
  'user',
  () => {
    //Token
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }

    // 用户信息
    const user = ref({})
    const getUser = async () => {
      const res = await userGetrInfoService()
      user.value = res.data.data
    }

    const setUser = (obj) => {
      user.value = obj
    }

    return {
      token,
      setToken,
      removeToken,
      getUser,
      setUser,
      user
    }
  },
  {
    persist: {
      paths: ['token', 'user']
    }
  }
)
