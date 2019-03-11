<!-- 添加收货地址 -->
<template>
  <section>
    <div>
      <simple-input field="收货人" v-model="addr.receiver" pholder="姓名"/>
      <simple-input field="联系电话" v-model="addr.telephone" type="number" pholder="手机或固定电话"/>
      <simple-input field="选择地区" v-model="addr.area" pholder="地区信息" readonly more @custom="show = true"/>
      <simple-input field="详细地址" v-model="addr.address" pholder="街道门牌信息" textarea  />
      <simple-input field="邮政编码" v-model="addr.code" type="number" />
      <btn-comp msg="保存" @custom="submit" cutting close-bottom />
    </div>

    <van-popup v-model="show" position="bottom">
      <van-area
        :area-list="areaList"
        @confirm="confirm"
        @cancel="show = false"
      />
    </van-popup>
  </section>
</template>

<script>
import common from '@mixin/common'
import mixin from '@mixin/modules/personCenter'
import SimpleInput from '../components/SimpleInput'
import areaList from '@/provinces'
export default {
  name: 'AddNewAddr',
  data () {
    return {
      areaList,
      show: false
    }
  },
  methods: {
    // 确认选择地区
    confirm (value) {
      this.addr.area = ''
      let arr = value.map(item => item.name)
      this.addr.area = arr.join(' ')
      this.show = false
    },
    // 提交
    async submit () {
      this.$toast.loading('正在提交...')
      const res = await this.addAddr(this.addr)
      if (res) this.$toast.success({ message: '保存成功' })
      await new Promise(resolve => {
        setTimeout(() => {
          this.closeToast()
          resolve()
        }, 2000)
      })
      this.$router.back()
    }
  },
  computed: {
    addr () {
      return {
        userID: this.userInfo.id,
        receiver: 'Erwin',
        telephone: '13917168304',
        area: '',
        address: '上海市大使馆',
        code: '200031'
      }
    }
  },
  components: {
    SimpleInput
  },
  mixins: [mixin, common]
}
</script>

<style scoped lang="scss">
</style>
