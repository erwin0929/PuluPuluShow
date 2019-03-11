<!-- 个人中心默认页 -->
<template>
  <section>
    <!-- 顶部 -->
    <div class="user-box">
      <!-- 用户头像和姓名 -->
      <div class="head-box">
        <div class="h-img">
          <!-- 头像 -->
          <template>
            <img :src="userInfoData.avatar_Url" v-if="userInfoData.avatar_Url">
            <img src="@img/personCenter/head.png" v-else>
          </template>
        </div>
        <!-- 用户姓名 -->
        <span>{{userInfoData.name}}</span>

        <!-- 修改个人资料链接 -->
        <router-link class="update" :to="{ name: 'UpdateInfo' }">
          <img src="@img/personCenter/update.png" alt="">
        </router-link>
      </div>

      <!-- 底部2连 -->
      <div class="record-box">
        <router-link class="r-link" :to="{ name: 'QRCode' }">
          <img src="@img/personCenter/code.png">
          <span>
            {{$t('personCenter.qrCode')}}
          </span>
        </router-link>

        <router-link class="r-link" :to="{ name: 'MyScore' }">
          <img src="@img/personCenter/score.png">
          <div>
            <span>{{$t('personCenter.scoreDetail')}}</span>
            <span class="score" :data-before="$t('personCenter.scoreBefore')" :data-after="$t('personCenter.scoreAfter')" v-text="userInfoData.virtual_Currency" />
          </div>
        </router-link>
      </div>
    </div>

    <!-- 白色区域 -->
    <div>
      <!-- 订单管理 -->
      <router-link :to="{ name: 'MyOrder', params: { status: '???' } }">
        <cell-comp type="order" border rTxt="查看更多订单" />
      </router-link>
      <!-- 订单状态列表。待支付,已支付,已过期,已取消等... -->
      <div class="breakpoint">
        <ul class="order-status">
          <li class="link-li" v-for="(item, index) in orderStatus" :key="index" @click="goOrderByStatus(item)">
            <div class="s-icon">
              <img :src="item.imgSrc">
            </div>
            <span class="status" v-text="item.name" />
          </li>
        </ul>
      </div>
      <!-- 优惠券 -->
      <router-link :to="{ name: 'CouponList' }">
        <!-- 数组长度为真则使用该长度,否则使用字符串0 -->
        <cell-comp type="coupon" border :rTxt="userInfoData.couponListResponses.length ? userInfoData.couponListResponses.length : '0'" />
      </router-link>
      <!-- 收货地址 -->
      <router-link :to="{name: 'AddrManage'}">
        <cell-comp type="addr" border />
      </router-link>
      <!-- 发票管理 -->
      <div class="breakpoint">
        <router-link :to="{ name: 'InvoiceManage' }">
          <cell-comp type="invoice" />
        </router-link>
      </div>
      <!-- 修改密码 -->
      <router-link :to="{ name: 'UpdatePwd' }">
        <cell-comp type="pwd" />
      </router-link>
    </div>

    <!-- 按钮区,登出 -->
    <div class="btn-box">
      <btn-comp :msg="$t('personCenter.signOut')" @custom="next" cutting />
    </div>

  </section>
</template>

<script>
import CellComp from '../components/CellComp'
import commonMixin from '@mixin/common'
import mixin from '@mixin/modules/personCenter'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      // 订单4种状态
      orderStatus: [
        {
          name: this.$t('personCenter.waitPay'),
          imgSrc: require('@img/personCenter/refund.png'),
          status: 'unpaid'
        },
        {
          name: this.$t('personCenter.payed'),
          imgSrc: require('@img/personCenter/payed.png'),
          status: 'paid'
        },
        {
          name: this.$t('personCenter.over'),
          imgSrc: require('@img/personCenter/send.png'),
          status: 'overdue'
        },
        {
          name: this.$t('personCenter.cancel'),
          imgSrc: require('@img/personCenter/recieve.png'),
          status: 'cancel'
        }
      ],
      // 用户的个人信息
      userInfoData: {
        couponListResponses: []
      }
    }
  },
  methods: {
    ...mapActions('user', [
      // 登出
      'signOut'
    ]),
    // 登出回调
    next () {
      this.signOut({ vm: this })
    },
    // 点击4种状态时,首先改变store中的查询参数,随之跳转
    goOrderByStatus ({ status }) {
      this.setOrderParams(status)
      this.$router.push({ name: 'MyOrder' })
    },
    async getData () {
      this.userInfoData = await this.getUserInfo({ telephone: this.userInfo.telephone })
      this.closeToast()
    }
  },
  computed: {
    ...mapState('personCenter', {
      params: state => state.params
    })
  },
  components: {
    CellComp
  },
  mixins: [commonMixin, mixin]
}
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/common";
  @import "~@/scss/modules/personCenter";
  .user-box{
    color: #000;
    font-size: 27px;
    position: relative;
    background-color: $site_color;
    margin-bottom: $split_h;
    .score{
      &::before{
        content: '('attr(data-before);
      }
      &::after{
        content: attr(data-after)')';
      }
    }
  }
  .head-box{
    height: 205px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .btn-box{
    padding: 160px 0 50px;
  }
  .s-icon{
    width: 75px;
  }
  .update{
    width: 40px;
    position: absolute;
    top: 20px;
    right: 30px;
  }
  .order-status{
    font-size: 26px;
    height: 160px;
    background-color: #fff;
    display: flex;
    align-items: center;
  }
  .link-li{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .h-img{
    border-radius: 50%;/*no*/
    $size: 103px;
    width: $size;
    height: $size;
    overflow: hidden;
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .status{
    color: #000;
    margin-top: 20px;
  }
  .breakpoint{
    margin-bottom: $split_h;
  }
  .record-box{
    border-top: 1px solid #e9d130;/*no*/
    height: 75px;
    display: flex;
    align-items: center;
    .r-link{
      height: 100%;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      &:first-child{
        border-right: 1px solid #e9d130;/*no*/
      }
      img{
        width: 30px;
        margin-right: 10px;
      }
    }
  }
</style>
