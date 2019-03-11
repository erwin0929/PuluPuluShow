<!-- 待收货和待发货页,承载2个页面 -->
<template>
  <section>
    <!-- 订单列表 -->
    <order-item v-for="(item, index) in list" :item="item" :key="index" />
  </section>
</template>

<script>
import OrderItem from './components/OrderItem'
import {mapState} from 'vuex'
export default {
  props: ['module'],
  computed: {
    ...mapState({
      list (state) {
        // 判断是收货还是发货,来获取不同的数据
        let whiteList = ['send', 'receive']
        if (whiteList.includes(this.module)) {
          return state.personCenter[this.module]
        }
      },
    })
  },
  components: {
    OrderItem
  }
}
</script>

<style scoped lang="scss">

</style>
