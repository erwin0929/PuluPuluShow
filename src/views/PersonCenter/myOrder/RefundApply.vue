<!-- 退款申请 -->
<template>
  <section>
    <div class="refund-box">
      <h2 class="to-known">退款须知</h2>
      <ul class="graph">
        <li class="g-list" v-for="(item, index) in gList" :key="index">
          <span class="counter"></span>
          <span>{{item.intro}}</span>
        </li>
      </ul>
    </div>
    <btn-comp msg="提交退款申请" close-bottom radian="square" />
  </section>
</template>

<script>
export default {
  name: "RefundApply",
  data () {
    return {
      gList: [
        {
          intro: '玩家在距离游戏开始72小时以上申请退款时，可退全额票价。'
        },
        {
          intro: '玩家在距离游戏开始48-72小时内申请退款时，可退50%的票价。'
        },
        {
          intro: '玩家在距离游戏开始48小时内申请退款时，不予退款。'
        },
        {
          intro: '退款时所用积分与优惠券不予退还。'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .refund-box{
    padding: 0 30px 50px;
  }
  .to-known{
    font-size: 33px;
    text-align: center;
    color: #333;
    padding: 95px 0 35px;
  }
  .g-list{
    margin: 20px 0;
    display: flex;
    align-items: center;
    counter-increment: section;
    .counter::before{
      font-size: 28px;
      border-radius: 50%; /*no*/
      $size: 55px;
      content: counter(section);
      width: $size;
      height: $size;
      margin-right: 20px;
      background: $site_color;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .graph{
    color: #666;
    font-size: 26px;
    line-height: 45px;
    counter-reset: section;
  }
</style>
