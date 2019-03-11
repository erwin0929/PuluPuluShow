<!-- 订单编号和状态组件 -->
<template>
  <section class="order-number-comp">
    <person-cell field="订单编号" content="adasdaadasdasdasd" />
    <person-cell field="状态" :content="content" />
  </section>
</template>

<script>
import PersonCell from './PersonCell'
export default {
  props: ['content'],
  components: {
    PersonCell
  }
}
</script>

<style scoped lang="scss">
  @import "~@/scss/modules/personCenter";
  .order-number-comp{
    margin-bottom: $spacing;
  }
</style>
