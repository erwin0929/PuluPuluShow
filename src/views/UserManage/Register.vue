<!-- 注册 -->
<template>
  <main>
    <!-- 第一步 -->
    <div v-if="step === 1">
      <input-comp placeholder="手机号" v-model="register.mobile" />
      <input-comp capt type="number" placeholder="短信验证码" v-model="register.capt" @custom="sendCapt" />
      <btn-comp msg="下一步" @custom="go" />
    </div>

    <!-- 第二步 -->
    <div v-else-if="step === 2">
      <input-comp type="password" placeholder="设置新密码" v-model="register2.password_new" />
      <input-comp type="password" placeholder="确认密码" v-model="register2.confirmPwd" />
      <btn-comp msg="下一步" @custom="go"></btn-comp>
    </div>

    <!-- 第三步 -->
    <div v-else>
      <input-comp placeholder="姓" v-model="register3.surname" />
      <input-comp placeholder="名" v-model="register3.fullName" />
      <input-comp type="email" placeholder="邮箱" v-model="register3.email" />
      <btn-comp msg="完成" @custom="go"></btn-comp>
      <div class="ignore-step" @click="ignore">跳过,稍候完善</div>
    </div>
  </main>
</template>

<script>
import InputComp from './components/InputComp'
import {
  toRegister,
  checkCode,
  sendSMS
} from '@/api'
export default {
  name: 'Register',
  components: {
    InputComp
  },
  data () {
    return {
      step: 1,
      // 注册信息
      register: {
        mobile: '13945849543', // 手机
        VerifyCode: '' // 验证码
      },
      register2: {
        password_new: '', // 新密码
        confirmPwd: '' // 密码确认
      },
      register3: {
        surname: '', // 姓氏
        fullName: '', // 名字(不包含姓氏)
        email: '' // 邮箱
      },
      rules: {
        mobile: /^[1][3,4,5,7,8][0-9]{9}$/
      }
    }
  },
  methods: {
    // 注册
    async toRegister () {
      const res = await toRegister()
    },
    // 检测验证码
    async checkCode () {
      const { status, data } = await checkCode(this.register)
      if (status === 200) return data
    },
    ignore () {
      console.log('跳过此处')
    },
    // 发送验证码
    async sendCapt () {
      const res = await sendSMS()
      console.log(res)
    },
    async go () {
      this.$toast.loading(this.$t('loading'))
      // 第一步的判断
      if (this.step === 1) {
        if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.register.mobile)) {
          this.$toast.fail({ message: '请输入正确的手机', duration: 2000 })
          return
        }
        const res = await this.checkCode()
        console.log(res)
        return
        status ? this.step++ : this.$toast({ message, duration: 2000 })
      }
      if (this.step == 2) {

      }
      this.$toast.clear()
    }
  }
}
</script>

<style scoped lang="scss">
  @import "./scss/common";
  // 发送验证码
  .send-code{
    color: #000;
    margin: 0 15px 0 40px;
  }
  .ignore-step{
    font-size: 30px;
    color: #000;
    font-weight: 700;
    text-align: center;
    margin-top: 300px;
  }
</style>
