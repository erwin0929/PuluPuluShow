<!-- 一条订单组件,注意:这是一条,请使用循环 -->
<template>
  <!-- 添加2种不同的class: multi-good, single-good 来决定一条记录的高度 -->
  <section class="order-item" :class="[`${item.type}-good`]">
    <!-- 订单编号和支付状态 -->
    <div class="number">
      <span>订单编号: {{item.order_No}}</span>
      <span class="status">{{item.status}}</span>
    </div>

    <!-- 详细参数  -->
    <router-link :to="{name: 'GoodsDetail', params: {status: item.status, type: item.type}}">
      <div class="detail-box">
        <!-- 其他参数 -->
        <div class="d-sub-box">
          <!-- 左侧图片 -->
          <div class="left-box">
            <img src="@img/personCenter/order-item01.jpg" alt="">
            <!-- 多商品则显示图片列表 -->
            <template v-if="item.type === 'multi'">
              <div>
                <img src="@img/personCenter/order-item02.jpg" alt="">
              </div>
            </template>

            <!-- 单商品则显示参数, xxxx游戏,日期,增值服务 -->
            <template v-else>
              <div class="parameter-box">
                <h2 class="item-name-txt">xxx游戏</h2>
                <span>徐家汇xxxx馆</span>
                <time>9月1日 12:00~14:00</time>
                <div class="increment">
                  <span class="incre-txt">平日1人*4</span>
                  <span class="incre-txt">可口可乐饮料*1</span>
                  <span class="incre-txt">xxx饮料*5</span>
                  <span class="incre-txt">xxx周边*1</span>
                  <span class="incre-txt">xxxx饮料*1</span>
                </div>
              </div>
            </template>
          </div>

          <!-- 右侧倒计时,价格,件数。此处留有一个外层div是为了保留其位置 -->
          <div class="right-box">
            <!-- 倒计时 -->
            <div class="count-down-box">
              <template v-if="item.status === '待支付'">
                <count-down />
              </template>
            </div>

            <!-- 件数 -->
            <div class="total-box">
              <template v-if="1">
                <span class="total">
                  <span class="total-txt">共{{item.total}}件</span>
                </span>
              </template>
            </div>

            <!-- 价格 -->
            <div class="price-box">
              <template v-if="item.status !== '已支付'">
                <price-txt :price="6344" />
              </template>
            </div>
          </div>
        </div>
      </div>
    </router-link>

    <!-- 底部按钮区 -->
    <template v-if="item.status === '已支付'">
      <div class="btn-box">
        <!-- 左侧按钮 -->
        <div class="sub-box">
          <router-link class="btn-item" :to="{name: 'QRCode'}">查看二维码</router-link>
          <router-link class="btn-item" :to="{name: 'RefundApply'}">退款</router-link>
        </div>

        <!-- 右侧价格 -->
        <price-txt :price="200" />
      </div>
    </template>
  </section>
</template>

<script>
import CountDown from '../../myOrder/components/CountDown'
export default {
  name: 'OrderList',
  props: ['item'],
  components: {
    CountDown
  }
}
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/common";
  @import "~@/scss/modules/personCenter";
  /* 订单编号和底部按钮区的高度 */
  $top_bot_h: 70px;
  .order-item{
    font-size: 26px;
    margin-bottom: $spacing;
    background-color: #fff;
    &.single-good{
      .right-box{
        height: 225px;
      }
    }
    &.multi-good{
      .right-box{
        height: 180px;
      }
    }
  }
  .number{
    color: #a2a3a4;
    border-bottom: 1px solid $split_c; /*no*/
    font-size: inherit;
    padding: 0 $side_pad;
    height: $top_bot_h;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .status{
    color: #000;
  }
  .right-box{
    width: 180px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  }
  .detail-box{
    padding: 20px $side_pad;
  }
  .btn-box{
    border-top: 1px solid $split_c; /*no*/
    height: $top_bot_h;
    padding: 0 $side_pad;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .parameter-box{
    font-size: 24px;
    color: #999;
    line-height: 41px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .item-name-txt{
    color: #333;
    font-size: 26px;
  }
  .incre-txt{
    margin-right: 20px;
  }
  $r_sub_box: 31px;
  .count-down-box,
  .price-box,
  .total-box{
    height: $r_sub_box;
    display: flex;
    align-items: center;
  }
  .count-down{
    height: auto;
  }
  .total{
    display: flex;
    align-items: center;
    @include arrow_r($size: 15px);
  }
  .total-txt{
    margin-right: 11px;
  }
  .left-box{
    display: flex;
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
    img{
      width: 140px;
      &:first-child{
        margin-right: 20px;
      }
    }
  }
  .d-sub-box{
    display: flex;
    justify-content: space-between;
  }
  .btn-item{
    margin-right: 30px;
    font-weight: 700;
  }
</style>
