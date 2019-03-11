<!-- 图片集 -->
<template>
  <div class="list-box">
    <div class="item-img" v-for="index in 4" :key="index">
      <img src="@/assets/images/pay/02.jpg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "ListImg"
  }
</script>

<style scoped lang="scss">
  .list-box{
    padding: 0 $side_pad 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    .item-img{
      width: 350px;
      margin-bottom: 4px;
      margin-right: 4px;
      &:last-child,
      &:nth-last-child(2){
        margin-bottom: 0;
      }
    }
  }
</style>
