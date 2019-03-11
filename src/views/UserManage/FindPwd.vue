<!-- 找回密码 -->
<template>
  <div>
    <!-- 第一步,根据step变量判断处于第几步 -->
    <template v-if="step === 1">
      <!-- 手机号 -->
      <input-comp type="number" placeholder="手机号" v-model="findPwd1.Telephone" />
      <!-- 验证码 -->
      <input-comp capt type="number" placeholder="短信验证码" v-model="findPwd1.VerifyCode" @custom="sendCapt" />
      <!-- 下一步 -->
      <btn-comp msg="下一步" @custom="go" />
    </template>

    <!-- 第二步 -->
    <template v-else>
      <!-- 新密码 -->
      <input-comp type="password" placeholder="密码" v-model="findPwd2.password" />
      <!-- 验证密码 -->
      <input-comp type="password" placeholder="确认密码" v-model="findPwd2.confimPwd" />
      <!-- 下一步 -->
      <btn-comp msg="下一步" @custom="go" />
    </template>
  </div>
</template>

<script>
import InputComp from './components/InputComp'
import {
  checkCode,
  retrievePwd,
  sendSMS
} from '@/api'
export default {
  name: 'FindPwd',
  components: {
    InputComp
  },
  data () {
    return {
      step: 1,
      // 找回密码字段
      findPwd1: {
        Telephone: '13917168304',
        VerifyCode: ''
      },
      findPwd2: {
        telephone: '',
        password: ''
      }
    }
  },
  methods: {
    async sendCapt () {
      const res = await sendSMS()
      console.log(res)
    },
    async go () {
      this.$toast.loading(this.$t('loading'))
      // 第一步,填写手机号和验证码
      if (this.step === 1) {
        // const res = await checkCode(this.findPwd1)
        // console.log(res)
        this.step++
        this.closeToast()
        return
      }
      // 第二步,确认密码
      if (this.step === 2) {
        const res = await retrievePwd({
          telephone: this.findPwd1.Telephone,
          password: this.findPwd2.password
        })
        console.log(res)
        this.closeToast()
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
