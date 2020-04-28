import request from '@/utils/request'

// 登录
export function login (data) {
  return request({
    url: '/user/dologin',
    method: 'post',
    data: data,
  })
}

// 验证码
export function createValidateCode () {
  return request({
    url: '/user/createValidateCode',
    method: 'get'
  })
}

// 查询昵称是否用过
export const getUserNameIfExistPost = formData => 
  request.post('/user/getUserNameIfExist', formData )

  // 注册
export const registerPost = formData => 
  request.post('/user/doreg', formData )

// 短信验证码
export const sendCodePost = formData => 
  request.post('/user/sendCode', formData )
