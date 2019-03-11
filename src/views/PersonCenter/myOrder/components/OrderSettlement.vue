<!-- 结算: 发票,合计,优惠券抵扣等 -->
<template>
  <section class="order-settle-comp">
    <person-cell field="发票" content="不要发票" />
    <person-cell field="合计" content="¥260.00" />
    <person-cell field="优惠券抵扣" content="-¥5.00" />
    <person-cell field="已支付" payed :content="210" />
  </section>
</template>

<script>
import PersonCell from './PersonCell'
export default {
  name: "OrderInvoice",
  components: {
    PersonCell
  }
}
</script>

<style scoped lang="scss">
  @import "~@/scss/modules/personCenter";
  .order-settle-comp{
    margin-bottom: $spacing;
  }
</style>
