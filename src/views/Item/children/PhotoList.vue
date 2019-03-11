<!-- 照片列表,使用滚动加载 -->
<template>
  <div class="list-box">
    <div class="item-img" v-for="index in 7" :key="index">
      <img src="@/assets/images/pay/02.jpg" alt="">
    </div>
  </div>
</template>

<style scoped lang="scss">
  .list-box{
    padding: $side_pad;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
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
