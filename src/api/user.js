import require from '@/utils/require'

//注册接口
export const userRegisterService = ({ username, password, repassword }) => {
  return require({
    url: '/api/reg',
    method: 'post',
    data: {
      username,
      password,
      repassword
    }
  })
}

//登录接口
export const userLoginService = ({ username, password }) => {
  return require({
    url: '/api/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

//获取用户信息接口
export const userGetrInfoService = () => {
  return require({
    url: '/my/userinfo',
    method: 'get'
  })
}

//修改用户信息接口
export const userUpdateInfoService = ({ id, nickname, email }) => {
  return require({
    url: '/my/userinfo',
    method: 'put',
    data: { id, nickname, email }
  })
}

//修改用户头像接口
export const userUpdateAvatarService = (avatar) => {
  return require({
    url: '/my/update/avatar',
    method: 'patch',
    data: { avatar }
  })
}

//修改用户密码接口
export const userUpdatePasswordService = ({ old_pwd, new_pwd, re_pwd }) => {
  return require({
    url: '/my/updatepwd',
    method: 'patch',
    data: { old_pwd, new_pwd, re_pwd }
  })
}
