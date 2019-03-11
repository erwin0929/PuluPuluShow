<!-- 优惠券和发票 -->
<template>
  <section>
    <div class="a-split">
      <!-- 优惠券 -->
      <field-intro class="coup" field="优惠券" :content="content" @custom="abc" :r_color="r_color" more />

      <!-- 发票 -->
      <div class="invoice-box ">
        <span class="f-filed">发票</span>
        <mt-switch v-model="switchValue" @change="$emit('custom')" />
      </div>
    </div>

    <!-- 发票选项 -->
    <div v-show="switchValue">
      <field-intro class="coup" field="发票类别" content="纸质发票" :r_color="r_color" more @custom="sheetVisible = true"></field-intro>
      <field-intro class="coup" field="发票内容" content="明细" :r_color="r_color" @custom="sheetVisible2 = true" more></field-intro>
      <field-intro class="coup" field="发票抬头" content="上海xxxxxxx" :r_color="r_color" more></field-intro>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      switchValue: false,
      sheetVisible2: false,
      content: '23张可用',
      r_color: '#636465',
      actions: [
        {
          name: '纸质发票',
          method (e) {
            console.log(e)
          }
        },
        {
          name: '电子发票',
          method () {
            console.log('电子发票')
          }
        }
      ],
      actions2: [
        {
          name: '明细'
        },
        {
          name: '明细33344'
        }
      ],
      sheetVisible: false
    }
  },
  methods: {
    init () {
      // 临时代码
      if (this.$route.params.cash) {
        this.content = `-${this.$route.params.cash}`
      }
    },
    abc () {
      this.$router.push({
        name: 'CouponList'
      })
    }
  }
}
</script>

<style scoped lang="scss">
  $IC_height: 70px;
  // 优惠券
  .coupon-box{
    border-bottom: 1px solid #f2f2f2; /*no*/
    @extend .CI-box
  }
  // 发票
  .invoice-box{
    @extend .CI-box
  }
  .CI-box{
    height: $IC_height;
    padding: 0 $side_pad;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  // 左侧字段的字体样式
  .f-filed{
    font-size: 24px;
    color: rgb(161, 161, 161);
  }

  // 右侧内容样式
  .r-content{
    color: #707070;
    font-size: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .coup{
    border-bottom: 1px solid #d2d3d4;/*no*/
    &:last-child{
      border-bottom: none;
    }
  }

  // 箭头样式
  .arrow-box{
    width: 25px;
    margin-left: 15px;
  }
</style>
