<!-- 申请次卡年卡 -->
<template>
	<section>
    <!-- 收货地址 -->
    <receiving-addr v-bind="addr"></receiving-addr>

    <!-- 分隔符 -->
    <split-com></split-com>

    <div :class="hasPad">
      <field-intro
        v-for="(item, index) in filedList"
        :key="index"
        :field="item.filed"
        :content="item.content"
        r_color="#676767"></field-intro>
    </div>

    <!-- 分隔符 -->
    <split-com></split-com>

    <!-- 选择规格和票数量 -->
    <standards-box></standards-box>

    <!-- 分隔符 -->
    <split-com></split-com>

    <!-- 优惠券和发票 -->
    <coupon-box></coupon-box>

    <!--  底部结算-->
    <settlement-box></settlement-box>

  </section>
</template>

<script>
import ReceivingAddr from '@/views/Item/components/ReceivingAddr'
export default {
  name: 'ApplyCard',
  data () {
    return {
      addr: {
        revev: 'GD',
        addr: '上海市静安区永和路493弄 悉尼大厦3楼',
        mobile: 14343243434
      },
      filedList: [
        {
          filed: '场馆',
          content: '徐家汇场馆啊哈哈'
        },
        {
          filed: '游戏',
          content: '什么鬼游戏啊'
        }
      ]
    }
  },
  computed: {
    hasPad () {
      if (this.filedList.length > 1) {
        return 'pad'
      }
    }
  },
  components: {
    ReceivingAddr
  }
}
</script>

<style scoped lang="scss">
  .pad{
    padding: 15px 0;
  }
</style>
