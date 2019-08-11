import request from '@/utils/request'

const URL = {
  LOGIN_CELLPHONE: '/login/cellphone',
  LOGIN_EMAIL: '/login',
  LOGIN_REFRESH: '/login/refresh', // 登录刷新
  LOGIN_STATUS: '/login/status', // 登录状态获取
  CAPTCHA_SENT: '/captcha/sent', // 验证码发送
  CAPTCHA_VERIFY: '/captcha/verify', // 验证码验证
  REGISTER: '/register/cellphone', // 手机注册
  EXISTENCE_CELL: '/cellphone/existence/check', // 手机号码是否已注册检测
  REBIND: '/rebind', // 更换绑定手机
  NICKNAME_INIT: '/activate/initProfile', // 初始化昵称
  LOGOUT: '/logout'
}

export default {
  loginCellphone (phone, password, countryCode) {
    return request(URL.LOGIN_CELLPHONE, 'post', {
      phone,
      password,
      countryCode
    })
  },
  loginEmail (email, password) {
    return request(URL.LOGIN_EMAIL, 'post', {
      email,
      password
    })
  },
  loginRefresh () {
    return request(URL.LOGIN_REFRESH)
  },
  getLoginStatus () {
    return request(URL.LOGIN_STATUS)
  },
  sentCaptcha (phone, countryCode = 86) {
    return request(URL.CAPTCHA, 'post', {
      phone,
      countryCode
    })
  },
  verifyCaptcha (phone, captcha) {
    return request(URL.CAPTCHA_VERIFY, 'post', {
      phone,
      captcha
    })
  },
  register (captcha, phone, password, nickname) {
    return request(URL.REGISTER, 'post', {
      captcha,
      phone,
      password,
      nickname
    })
  },
  checkCellExistence (phone) {
    return request(URL.EXISTENCE_CELL, 'post', { phone })
  },
  rebind (oldCaptcha, captcha, phone, countryCode) {
    return request(URL.REBIND, 'post', {
      oldCaptcha,
      captcha,
      phone,
      countryCode
    })
  },
  initNickname (nickname) {
    return request(URL.NICKNAME_INIT, 'post', { nickname })
  },
  logout () {
    return request(URL.LOGOUT)
  }
}