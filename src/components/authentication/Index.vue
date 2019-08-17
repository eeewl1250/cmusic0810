<template>
  <div class="auth">
    <div class="background">
      <img src="../../assets/bg-login.jpg" width="100%" />
    </div>
    <div class="content">
      <div class="logo">
        <img src="../../assets/logo-login.png" />
      </div>
      <div class="auth-main">
        <button class="login-cellphone">手机号登录</button>
        <button class="register">注册</button>
        <button class="try">游客试用</button>
      </div>
      <dl class="auth-others">
        <dt>其他登录方式</dt>
        <dd class="login-weixin">
          <img src="../../assets/logo-weixin.png" />
          <span>微信</span>
        </dd>
        <dd class="login-qq">
          <img src="../../assets/logo-qq.png" />
          <span>QQ</span>
          </dd>
        <dd class="login-weibo">
          <img src="../../assets/logo-weibo.png" />
          <span>微博</span>
          </dd>
        <dd class="login-wymail">
          <img src="../../assets/logo-mail.png" width="42" />
          <span>网易邮箱</span>
          </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Auth',
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.auth
  height: 100%
  .background
    position: absolute
    z-index: -1
  .content
    display: flex
    flex-direction: column
    height: 100%
    >div, >dl
      flex: 33% 0 0
    .logo
      display: flex
      flex-direction: column-reverse
      img
        margin: 0 auto
        width: (100 / 360 * 100)vw
    .auth-main
      display: flex
      flex-direction: column
      justify-content: flex-end
      .login-cellphone, .register
        display: block
        margin: 1.6rem auto 0
        padding: 1.1rem 0
        width: 80%
        color: #ce3d3e
        font-size: 16px
        border: 1px solid #ce3d3e
        border-radius: 2rem
      .try
        display: block
        margin-top: 3rem
        color: #666666
        font-size: 14px
        text-decoration: underline
    .auth-others
      padding: 0 1.6rem
      display: flex
      align-content: flex-end
      flex-wrap: wrap
      text-align: center
      dt
        flex-basis: 100%
        margin: 0 auto 2.1rem
        font-size: 12px
        //line-height: 12px
        //vertical-align: middle
        color: #666666
        display: flex //控制两边的装饰线
        &::before, &::after
          content: ''
          display: inline-block
          flex: 1 //让装饰线填满两边的空隙
          margin: 8px 5px 0 5px //装饰线上下居中
          //vertical-align: middle
          height: 1px //linear-gradient不能用于border，所以需要用到背景，因此设置height
          background: linear-gradient(to right, transparent, lightgray) //装饰线减隐
          //border-bottom: 1px solid gray
        &::after
          background: linear-gradient(to left, transparent, lightgray)
      dd
        flex-basis: 25%
        display: flex
        align-items: center
        flex-direction: column
        margin-bottom: 3rem
        img
          width: 4.2rem
        span
          margin-top: 0.6rem
          font-size: 11px
          color: #999999
</style>