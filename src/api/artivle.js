import require from '@/utils/require'

//获取文章分类
export const getChannelsList = () => {
  return require({
    url: '/my/cate/list',
    method: 'get'
  })
}

//添加文章分类
export const artAddChannels = (data) => {
  return require({
    url: '/my/cate/add',
    method: 'post',
    data
  })
}

//编辑文章分类
export const artEditChannels = (data) => {
  return require({
    url: '/my/cate/info',
    method: 'put',
    data
  })
}

//删除文章分类
export const artDelChannels = (id) => {
  return require({
    url: '/my/cate/del',
    method: 'delete',
    params: {
      id
    }
  })
}

//获取文章列表
export const getArticleListSelect = (params) => {
  return require({
    url: '/my/article/list',
    method: 'get',
    params
  })
}

export const addArticle = (data) => {
  return require({
    url: '/my/article/add',
    method: 'post',
    data
  })
}

//编辑文章
export const editArticle = (id) => {
  return require({
    url: '/my/article/info',
    method: 'get',
    params: {
      id
    }
  })
}

export const updateArticle = (data) => {
  return require({
    url: '/my/article/info',
    method: 'put',
    data
  })
}

export const artDelService = (id) =>
  require.delete('my/article/info', { params: { id } })
