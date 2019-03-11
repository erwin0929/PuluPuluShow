<!-- 修改密码页 -->
<template>
  <section>
    <simple-input field="旧密码" v-model="form.password_old" type="password" />
    <simple-input field="设置新密码" v-model="form.password_new" type="password" />
    <simple-input field="验证密码" v-model="checkPwd" type="password" />
    <btn-comp msg="确认" cutting close-bottom @custom="submit" />
  </section>
</template>

<script>
import SimpleInput from '../components/SimpleInput'
import mixin from '@mixin/modules/personCenter'
export default {
  name: 'UpdatePwd',
  data () {
    return {
      checkPwd: '111111'
    }
  },
  methods: {
    // 提交表单
    async submit () {
      const { status } = await this.updatePwd(this.form)
      if (status) {
        this.$toast.success({ message: '修改密码成功' })
        await new Promise(resolve => {
          setTimeout(() => {
            this.closeToast()
            resolve()
          }, 2000)
        })
        this.$router.back()
      }
    }
  },
  computed: {
    form () {
      return {
        userid: this.userInfo.id,
        password_old: '111111',
        password_new: '111111'
      }
    }
  },
  components: {
    SimpleInput
  },
  mixins: [mixin]
}
</script>

<style scoped lang="scss">

</style>
