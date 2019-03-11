<!-- 修改个人资料页 -->
<template>
  <section class="update-info-page">
    <div class="user-head-box">
      <span>头像</span>
      <div class="h-box">
        <!-- 头像 -->
        <template v-if="form.headImg">
          <img class="head-img" :src="form.headImg" alt="">
        </template>
        <template v-else>
          <img class="head-img" src="@img/personCenter/head.png" alt="">
        </template>
      </div>
    </div>

    <!-- 输入框区域 -->
    <div>
      <div class="breakpoint">
        <van-cell-group>
          <van-field class="has-bor" label="姓" v-model="form.firstName" clearable />
          <van-field class="has-bor" label="名" v-model="form.lastName" clearable />
          <van-field label="邮箱" v-model="form.email" clearable />
        </van-cell-group>
      </div>

      <div>
        <field-input field="手机号" :content="telephone" read-only />
        <field-input field="微信" :content="form.nickName" read-only />
      </div>
    </div>

    <!-- 按钮区 -->
    <btn-comp msg="保存" @custom="submit" close-bottom cutting />

  </section>
</template>

<script>
import FieldInput from './components/FieldInput'
import mixin from '@mixin/modules/personCenter'
import commonMixin from '@mixin/common'
export default {
  name: 'UpdateInfo',
  data () {
    return {
      // 用户的个人信息
      headImg: '',
      form: {
        userID: 0,
        headImg: '',
        firstName: '',
        lastName: '',
        email: '',
        nickName: '',
        sex: 0
      },
      // 电话,无需提交
      telephone: 0
    }
  },
  methods: {
    async getData () {
      // 因为返还了较多不需要提交的数据,所以这里分别取出需要的
      const {
        firstName,
        lastName,
        email,
        nickName,
        telephone,
        is_Male: sex,
        avatar_Url: headImg
      } = await this.getUserInfo({ telephone: this.userInfo.telephone })
      // 手机不需要提交,不存于form里
      Object.assign(this, { telephone })
      // 提交的数据合并到form中
      Object.assign(this.form, {
        userID: this.userInfo.id,
        headImg,
        firstName,
        lastName,
        email,
        nickName,
        sex
      })
      this.closeToast()
    },
    // 提交信息
    async submit () {
      this.$toast.loading('正在保存...')

      // 根据res来判断是否成功这里的逻辑还没处理
      const res = await this.modified(this.form)
      // 保存成功后的回调
			console.error('这里后端没有一个明确的字段来告知是否保存成功,这个已经和他们说了,等他们修改完再补充这里的逻辑')
      if (res) {
        this.$toast.success({ message: '保存成功' })
        await new Promise(resolve => {
          setTimeout(() => {
            this.closeToast()
            resolve()
          }, 2000)
        })
        this.closeToast()
        this.$router.back()
      }
    }
  },
  components: {
    FieldInput
  },
  mixins: [commonMixin, mixin]
}
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/common";
  @import "~@/scss/modules/personCenter";
  $bgc: #fff;
  .update-info-page{
    font-size: 28px;
  }
  .user-head-box{
    padding: 0 $side_pad;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    margin-bottom: $split_h;
    background-color: $bgc;
  }
  .van-cell{
    font-size: 28px;
    padding: 0 $side_pad;
  }
  /deep/ .van-field__body{
    height: 100%;
  }
  /deep/ .van-field__control{
    height: 100%;
    padding: 20px 30px 20px 10px
  }
  /deep/ .van-icon-clear{
    &::after{
      $size: 75px;
      width: $size;
      height: $size;
    }
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .has-bor{
    border-bottom: 1px solid #d3d3d3; /*no*/
  }
  .h-box{
    display: flex;
    align-items: center;
    @include arrow_r();
  }
  .breakpoint{
    margin-bottom: $split_h;
  }
  .head-img{
    width: 80px;
    border-radius: 50%;
    margin-right: 30px;
  }
</style>
