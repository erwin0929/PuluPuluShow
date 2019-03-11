<!-- 结算组件 -->
<template>
	<section class="settlement-box">
    <div class="sattle">
      <span>总计</span>
      <span>¥3654.23</span>
    </div>
    <button class="add-cart">加入购物车</button>
    <button class="Buy">
      <router-link :to="{name: 'OrderDetail'}">立即购买</router-link>
    </button>
  </section>
</template>

<script>
</script>

<style scoped lang="scss">
  // 结算
  .settlement-box{
    $h: $bottom_action;
    width: 100%;
    height: $h;
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    flex-direction: row;
    align-items: center;
    & > div{
      flex: 1;
    }
    .sattle{
      color: #000;
      font-size: 25px;
      text-align: center;
    }
    $fz: 28px;
    .add-cart{
      font-size: $fz;
      height: $h;
      color: $site_color;
      background: #000;
      flex: 1;
    }
    .Buy{
      font-size: $fz;
      height: $h;
      color: #000;
      background: $site_color;
      flex: 1;
    }
  }
</style>
