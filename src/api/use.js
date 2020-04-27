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