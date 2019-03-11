<!-- 订单详情 -->
<template>
	<section>
    <!-- 剩余支付时间 -->
    <count-down msg="剩余支付时间" />

    <!-- 分隔符 -->
    <split-com></split-com>

    <!-- 收货地址 -->
    <receiving-addr v-bind="addr"></receiving-addr>

    <!-- 分隔符 -->
    <split-com></split-com>

    <!-- 这里推测用指令来做,如果条目大于1条则增加上下padding,若只有1条则不添加 -->
    <div :class="hasPad">
      <field-intro
        v-for="(item, index) in filedList"
        :key="index"
        :field="item.filed"
        :content="item.content"
        :r_color="r_color"></field-intro>
    </div>

    <!-- 分隔符 -->
    <split-com></split-com>

    <div :class="hasPad">
      <field-intro
        v-for="(item, index) in filedList2"
        :key="index"
        :field="item.filed"
        :content="item.content"
        :r_color="r_color"></field-intro>
    </div>

    <!-- 分隔符 -->
    <split-com></split-com>

    <div class="s-split">
      <div :class="hasPad">
        <field-intro
          v-for="(item, index) in filedList3"
          :key="index"
          :field="item.filed"
          :content="item.content"
          :r_color="r_color"></field-intro>
        <div class="pay-status">
          <span class="txt">已支付</span>
          <price-txt :price="3434"></price-txt>
        </div>
      </div>
    </div>

    <!-- 支付方式 -->
    <pay-way />

    <!-- 支付按钮 -->
    <div>
      <btn-comp msg="支付" radian="square" />
    </div>

  </section>
</template>

<script>
import ReceivingAddr from '@views/Item/components/ReceivingAddr'
import CountDown from '@views/PersonCenter/myOrder/components/CountDown'
import PayWay from '@components/common/PayWay'
import mixin from '@/mixin'
export default {
  name: 'OrderDetail',
  data () {
    return {
      addr: {
        revev: 'GD',
        addr: '上海市静安区永和路493弄 悉尼大厦3楼',
        mobile: 14343243434
      },
      filedList: [
        {
          filed: '订单编号',
          content: 'asdasdjiaosd3434'
        },
        {
          filed: '状态',
          content: '待发货'
        }
      ],
      filedList2: [
        {
          filed: '场馆',
          content: '徐家汇场馆'
        },
        {
          filed: '游戏',
          content: '游戏啊'
        },
        {
          filed: '规格',
          content: '次卡*1'
        }
      ],
      filedList3: [
        {
          filed: '发票',
          content: '不要发票'
        },
        {
          filed: '合计',
          content: '¥260.00'
        },
        {
          filed: '优惠券抵扣',
          content: '-¥50.00'
        }
      ],
      r_color: '#676767'
    }
  },
  components: {
    ReceivingAddr,
    PayWay,
    CountDown
  },
  mixins: [mixin]
}
</script>

<style scoped lang="scss">
  .surplus-time{
    font-size: 23px;
    color: #e3524b;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pay-status{
    height: 65px;
    padding: 0 $side_pad;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .txt{
      color: #666;
      font-size: 29px;
    }
  }
  .pad{
    padding: 15px 0;
  }
  .pay-btn{
    font-size: 30px;
    text-align: center;
    line-height: 90px;
    background: $site_color;
  }
</style>
