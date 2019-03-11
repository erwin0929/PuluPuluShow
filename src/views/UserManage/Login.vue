<!-- 登录 -->
<template>
  <div>
    <!-- 用户名 -->
    <input-comp hasIcon="username" :placeholder="$t('userManage.username')" v-model="login.telephone" />
    <!-- 密码 -->
    <input-comp hasIcon="pwd" type="password" :placeholder="$t('userManage.pwd')" v-model="login.password" />
    <!-- 登录按钮 -->
    <btn-comp :msg="$t('userManage.loginBtn')" @custom="submit" />
    <div class="more">
      <router-link :to="{name: 'Register'}">{{$t('userManage.memberRegister')}}</router-link>
      <router-link :to="{name: 'Findpwd'}">{{$t('userManage.findPwd')}}</router-link>
    </div>
    <!-- 第三方登录 -->
    <div class="other-login">
      <span></span>
      <div>{{$t('userManage.thirdLogin')}}</div>
      <span></span>
    </div>

    <!-- 第三方登录按钮 -->
    <div class="btn-box">
      <div>
        <div class="l-img">
          <img src="@img/userManage/wechat.png" alt="">
        </div>
        <div class="log-txt">{{$t('userManage.wechatLogin')}}</div>
      </div>
      <div>
        <div class="l-img">
          <img src="@img/userManage/wangyi.png" alt="">
        </div>
        <div class="log-txt">{{$t('userManage.neteaseLogin')}}</div>
      </div>
      <div>
        <div class="l-img">
          <img src="@img/userManage/weibo.png" alt="">
        </div>
        <div class="log-txt">{{$t('userManage.sinaLogin')}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import InputComp from './components/InputComp'
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  components: {
    InputComp
  },
  data () {
    return {
      // 登录信息
      login: {
        telephone: '13888888888',
        password: '111111'
      }
    }
  },
  methods: {
    ...mapActions('user', ['signIn']),
    // 登录回调
    async submit () {
      const res = await this.signIn(this.login)
      // 若信息吻合登录成功,则跳转至首页
      if (res) {
        this.$toast.success('登录成功,即将跳转至首页')
        await new Promise(resolve => {
          setTimeout(() => {
            this.$router.push({ name: 'Home' })
          }, 2000)
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "./scss/common";
  .more{
    padding: 0 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    a{
      font-size: 24px;
      line-height: 60px;
    }
  }
  .other-login {
    margin: 100px 0 55px;
    font-size: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    span {
      width: 190px;
      height: 1px; /*no*/
      background: #dfe0e1;
    }
  }
  .btn-box {
    color: #000;
    font-size: 24px;
    display: flex;
    padding: 0 0px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .l-img{
      width: 65px;
    }
    & > div {
      width: 190px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .log-txt{
    line-height: 70px;
  }
  // 第三方登录背景图循环
  //$bg_list: weixin, pay, other-way;
  //$bg_size: 80px;
  //$i: 0;
  //@each $item in $bg_list{
  //  .#{$item}{
  //    width: $bg_size;
  //    height: $bg_size;
  //    background: url("#{$img_home}login_way.png") no-repeat 0 #{$i * -$bg_size};
  //    background-size: $bg_size;
  //  }
  //  $i: $i + 1;
  //}
</style>
