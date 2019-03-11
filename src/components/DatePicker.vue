
<!-- 日期选择器 -->
<template>
  <van-popup
    v-model="show"
    position="bottom"
    :close-on-click-overlay="false"
    @click-overlay="close"
  >
    <van-datetime-picker
      v-model="currentDate"
      type="date"
      :min-date="minDate"
      :formatter="formatter"
      @confirm="confirm"
      @cancel="close"
    />
  </van-popup>
</template>

<script>
import mixin from '@mixin/modules/personCenter'
import { beforeHalfYear } from '@/util'
export default {
  name: 'DatePicker',
  props: ['currentDate', 'show', 'type'],
  data () {
    return {
      minDate: beforeHalfYear()
    }
  },
  methods: {
    // 格式化上拉菜单日期格式
    formatter (type, value) {
      const msg = {
        year: '年',
        month: '月',
        day: '日'
      }
      return value + msg[type]
    },
    // 关闭窗口
    close () {
      this.$emit('update:show', false)
    },
    // 确认回调
    confirm (value) {
      let { type } = this
      this.setDate({
        type,
        value
      })
      this.close()
      this.$emit('custom')
    }
  },
  mixins: [mixin]
}
</script>

<style scoped lang="scss">

</style>
