import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/LoginPage.vue')
    },
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/article/manage',
      children: [
        {
          path: '/article/manage',
          component: () => import('@/views/article/ArticleManage.vue')
        },
        {
          path: '/article/channel',
          component: () => import('@/views/article/ArticleChannel.vue')
        },
        {
          path: '/user/avatar',
          component: () => import('@/views/user/UserAvatar.vue')
        },
        {
          path: '/user/password',
          component: () => import('@/views/user/UserPassword.vue')
        },
        {
          path: '/user/profile',
          component: () => import('@/views/user/UserProfile.vue')
        }
      ]
    }
  ]
})

// 添加路由重置方法（防止动态路由重复注册）
const resetRouter = () => {
  const newRouter = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: []
  })
  router.matcher = newRouter.matcher // 替换路由匹配器
}

// 优化导航守卫
router.beforeEach((to, _, next) => {
  const userStore = useUserStore()
  if (!userStore.token && to.path !== '/login') {
    resetRouter() // 清理可能残留的路由
    next('/login')
  } else {
    next()
  }
})

export default router
