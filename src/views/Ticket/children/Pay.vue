<!-- 付款成功 -->
<template>
  <div class="pay-page">
    <!-- 付款金额 -->
    <div class="pay-box">
      <feedback-icon class="feed-back" status="success" />

      <div class="suc-txt">支付成功</div>

      <!-- 付款金额, 注意为价格做filter,保留2位小数 -->
      <div class="money">
        <span>¥</span>
        <span>2365.00</span>
      </div>
    </div>

    <!-- 按钮区 -->
    <div>
      <button class="btn-box">
        <router-link :to="{}">查看二维码</router-link>
      </button>
      <button class="btn-box">
        <router-link :to="{}">查看订单详情</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import FeedbackIcon from '@/components/common/FeedbackIcon'
export default {
  name: "Pay",
  components: {
    FeedbackIcon
  }
}
</script>

<style scoped lang="scss">
  .pay-page{
    height: 100%;
    background: #f5f5f5;
    .pay-box{
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .suc-txt{
      font-size: 36px;
      color: #333;
      font-weight: 700;
    }
    .feed-back{
      margin-top: 50px;
    }
    .btn-box {
      color: #000;
      font-size: 28px;
      width: 510px;
      border-radius: 8px; /*no*/
      $mar: 30px;
      margin: $mar auto;
      background: $site_color;
      &:first-child{
        margin-top: $mar * 2;
      }
      a{
        $h: 70px;
        height: $h;
        line-height: $h;
      }
    }
    .money{
      color: #333;
      font-size: 50px;
      margin: 33px 0 72px;
    }
  }
</style>
