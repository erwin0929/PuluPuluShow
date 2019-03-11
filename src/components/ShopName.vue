<!-- 门店名称 -->
<template>
  <div class="shop-name">
    <div class="name">{{name}}</div>
    <div class="icon-box">
      <img src="@/assets/images/pay/share.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopName",
  props: {
    name: {
      default: '请输入名称'
    }
  }
}
</script>

<style scoped lang="scss">
  .shop-name{
    height: 80px;
    display: flex;
    padding: 0 $side_pad;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .name{
      font-size: 27px;
      color: #333;
      font-weight: 700;
    }
    .icon-box{
      $size: 50px;
      width: $size;
      height: $size;
      background: $site_color;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 30px;
      }
    }
  }
</style>
