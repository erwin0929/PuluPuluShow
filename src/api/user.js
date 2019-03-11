import service from './api'

// 注册
export const toRegister = data => {
  return service({
    url: 'user/register',
    data
  })
}

// 登录
export const toLogin = data => {
  return service({
    url: 'user/login',
    data
  })
}

// 发送验证码
export const sendSMS = data => {
  return service({
    url: 'SMS/SendSMS',
    data
  })
}

// 判断验证码
export const checkCode = data => {
  return service({
    url: 'user/checkverifycode',
    data
  })
}

// 修改密码(忘记密码通过接受验证码修改,无需登录)
export const retrievePwd = data => {
  return service({
    url: 'user/retrievepassword',
    data
  })
}