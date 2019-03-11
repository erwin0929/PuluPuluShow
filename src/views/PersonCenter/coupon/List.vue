<!-- 优惠券列表页 -->
<template>
  <section>
    <!-- 筛选菜单 -->
    <scree-comp :list="screen" @input="getQuery"/>

    <div class="c-box">
      <scroller class="coupon-box" ref="scoller">
        <!-- 优惠券列表 3种状态 -->
        <!-- 未使用: will-use,已使用: used, 已失效: invalid -->
        <div class="c-list" :class="getClass(item)" v-for="(item, index) in couponList" :key="index">
          <div class="cash">
            <mark class="money" v-text="item.couponResponse.value" />
            <span class="ticket">{{item | getCouponMsg}}</span>
          </div>
          <div class="m-box">
            <span class="c-title">有效期</span>
            <time class="use-date" v-text="item.endTime" />
          </div>
          <div>
            <!-- 当状态为已失效,则不显示按钮 -->
            <template v-if="item.used !== 2">
              <!-- 当状态为已使用能点击该按钮 -->
              <inline-btn class="action-btn" @custom="item.used === 0 ? toUse(item) : false" :msg="item | getBtnMsg" />
            </template>
          </div>
        </div>
      </scroller>
    </div>

  </section>
</template>

<script>
import ScreeComp from '../components/ScreeComp'
import mixin from '@mixin/modules/personCenter'
export default {
  name: 'CouponList',
  filters: {
    // 根据状态显示不同的按钮文案
    getBtnMsg ({ used }) {
      const msg = {
        0: '立即使用',
        1: '已使用'
      }
      return msg[used]
    },
    // 判断是哪种类型的优惠券
    getCouponMsg ({ couponResponse: { type } }) {
      const msg = {
        1: '代金券',
        2: '折扣券'
      }
      return msg[type]
    }
  },
  data () {
    return {
      // 筛选菜单
      screen: [
        {
          name: this.$t('personCenter.willUse'),
          used: 'unused',
          failure: 'unfailure'
        },
        {
          name: this.$t('personCenter.used'),
          used: 'used',
          failure: 'unfailure'
        },
        {
          name: this.$t('personCenter.invalid'),
          used: 'unused',
          failure: 'failure'
        }
      ],
      // 存储优惠券列表
      couponList: [],
      params: {
        page: 1,
        pagesize: 10,
        // 1：代金券2：折扣券
        type: 1,
        // used: 已使用, unused: 未使用
        used: 'unused',
        // failure: 失效, unfailure: 未失效
        failure: 'unfailure'
      }
    }
  },
  methods: {
    // 使用优惠券
    toUse ({ id }) {
      console.log(id)
    },
    // 判断优惠券状态来添加class
    getClass ({ used }) {
      const classMsg = {
        0: 'will-use',
        1: 'used',
        2: 'invalid'
      }
      return classMsg[used]
    },
    // 获取当前选中的筛选菜单
    getQuery ({ used, failure }) {
      Object.assign(this.params, {
        used,
        failure
      })
    },
    async getData () {
      this.$toast.loading(this.$t('loading'))
      const { dataList } = await this.getCouponList(this.completeParams)
      this.couponList = dataList
      this.closeToast()
    }
  },
  computed: {
    // 查询参数
    completeParams () {
      return {
        userID: this.userInfo.id,
        ...this.params
      }
    }
  },
  components: {
    ScreeComp
  },
  watch: {
    params: {
      async handler () {
        await this.getData()
      },
      deep: true,
      immediate: true
    }
  },
  mixins: [mixin]
}
</script>

<style scoped lang="scss">
  @import "~@/scss/modules/personCenter";
  .c-box{
    position: absolute;
    top: $screen_h + $nav_h + $spacing;
    left: 0;
    bottom: 15px;
    right: 0;
  }
  .coupon-box{
    padding: 0 $side_pad;
  }
  .c-list{
    width: 100%;
    height: 145px;
    display: flex;
    align-items: center;
    margin-bottom: $spacing;
    background: url("~@/assets/images/personCenter/coupon_bg.png") no-repeat center;
    background-size: 100%;
    .money{
      font-size: 63px;
      color: inherit;
      font-weight: 700;
    }
    .c-title{
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .ticket{
      font-size: 24px;
      color: inherit;
    }
    .m-box{
      width: 340px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .action-btn{
      color: inherit;
    }
    .use-date{
      color: #999;
      font-size: 20px;
    }
    /* 未使用 */
    &.will-use{
      color: #333;
    }
    /* 已使用 */
    &.used{
      $c: #b7b7b7;
      color: $c;
      .action-btn{
        color: #fafafa;
        background-color: $c;
      }
    }
    /* 已失效 */
    &.invalid{
      color: #999;
      background-image: url("~@/assets/images/personCenter/conpoun_invaild.png");
    }
  }
  .cash{
    width: 185px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    &::after{
      color: inherit;
      font-size: 22px;
      content: '¥';
      position: absolute;
      top: 10px;
      left: 132px;
    }
  }
</style>
