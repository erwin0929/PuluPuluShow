<!-- 场馆,日期,游戏,规格 -->
<template>
  <section class="order-param-comp">
    <person-cell field="场馆" content="徐家汇xxx馆" />
    <person-cell field="日期" content="9月1日周五 12:30~14:3" />
    <person-cell field="游戏" content="xxxx游戏" />
    <person-cell field="规格" multi />
    <person-cell field="增值服务" multi />
  </section>
</template>

<script>
import PersonCell from './PersonCell'
export default {
  name: "OrderParam",
  components: {
    PersonCell
  }
}
</script>

<style scoped lang="scss">
  @import "~@/scss/modules/personCenter";
  .order-param-comp{
    margin-bottom: $spacing;
  }
</style>
