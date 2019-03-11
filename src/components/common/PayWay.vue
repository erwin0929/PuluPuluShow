<!-- 支付方式组件 -->
<template>
  <section>
    <div v-for="index in 4" :key="index" class="pay-way">
      <!-- 图片和名字 -->
      <div class="l-box">
        <div class="pay-img">
          <img src="@img/item/yinlian.png" alt="">
        </div>
        <div>
          <mark class="way">银联支付</mark>
          <div class="sub-title">副标题</div>
        </div>
      </div>

      <!-- 选项框 -->
      <check-box />
    </div>
  </section>
</template>

<script>
  export default {
    name: "PayWay"
  }
</script>

<style scoped lang="scss">
  // 支付方式
  .pay-way{
    border-bottom: 1px solid #d3d3d3; /*no*/
    padding: 0 $side_pad;
    height: 120px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .l-box{
      display: flex;
      align-items: center;
    }
    .pay-img{
      width: 95px;
      margin-right: 30px;
    }
    &:last-child{
      border-bottom: none;
    }
  }
  .way{
    font-size: 23px;
    color: #666;
    display: block;
    margin-bottom: 10px;
  }
  .sub-title{
    color: #999;
    font-size: 19px;
  }
</style>
