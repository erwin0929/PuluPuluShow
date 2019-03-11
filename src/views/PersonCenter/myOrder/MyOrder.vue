<!-- 订单列表 -->
<!-- 多商品显示共numer件, 单商品显示明细 -->
<!-- 不同状态文案不一样,颜色不一样,待支付有2个按钮布局也稍有不同 -->
<template>
  <section>
    <!-- 筛选列表 -->
    <scree-comp :list="screenList" @input="getScreen" />

    <!-- 订单列表 -->
    <div class="scroll-box">
      <scroller
        v-if="dataList.length"
        ref="orderScroller"
        refreshLayerColor="red"
        :on-refresh="refresh"
        refreshText="下拉加载更多">
        <order-item v-for="(item, index) in dataList" :key="index" :item="item" />
      </scroller>
      <no-data v-else />
    </div>
  </section>
</template>

<script>
import ScreeComp from '../components/ScreeComp'
import OrderItem from './components/OrderItem'
import mixin from '@mixin/modules/personCenter'
import { mapState } from 'vuex'
export default {
  name: 'OrderList',
  data () {
    return {
      // 筛选菜单
      screenList: [
        {
          name: this.$t('personCenter.all'),
          status: '???'
        },
        {
          name: this.$t('personCenter.waitPay'),
          status: 'unpaid'
        },
        {
          name: this.$t('personCenter.payed'),
          status: 'paid'
        },
        {
          name: this.$t('personCenter.over'),
          status: 'overdue'
        },
        {
          name: this.$t('personCenter.cancel'),
          status: 'cancel'
        }
      ],
      // 订单列表数据
      dataList: []
    }
  },
  methods: {
    // 获取筛选菜单的选中项放到查询参数里
    getScreen ({ status }) {
      Object.assign(this.params, { status })
    },
    // 下拉回调
    async refresh (done) {
      this.params.page += 1
      await this.getData()
      // 想在数据装载完成后使用done,但是这里用了watch
      done()
    },
    async getData () {
      const { dataList } = await this.getOrderList(this.params)
      // Object.assign(this, { dataList })
      this.dataList.unshift(...dataList)
    }
  },
  created () {
    this.params.userid = this.userInfo.id
  },
  computed: {
    ...mapState('personCenter', {
      params: state => state.params
    })
  },
  watch: {
    'params.status': {
      async handler () {
        await this.getData()
      },
      deep: true,
      immediate: true
    },
    dataList: {
      handler () {
        this.closeToast()
      },
      deep: true
    }
  },
  components: {
    ScreeComp,
    OrderItem
  },
  mixins: [mixin]
}
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/common";
  @import "~@/scss/modules/personCenter";
  .scroll-box{
    font-size: 27px;
    width: 100%;
    position: absolute;
    top: $screen_h + $nav_h + $spacing;
    bottom: 0;
    overflow: hidden;
  }
</style>
