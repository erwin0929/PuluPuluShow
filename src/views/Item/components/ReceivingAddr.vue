<!-- 收货地址组件 -->
<template>
	<div class="addr-box">
    <!-- 收货人 -->
    <div class="recev filed-box">
      <span>收货人 : {{revev}}</span>
      <span>{{mobile}}</span>
    </div>
    
    <!-- 地址 -->
    <div class="addr filed-box">
      <span>收货地址 : </span>
      <div>{{addr}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    revev: {
      required: true
    },
    addr: {
      required: true
    },
    mobile: {
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .addr-box{
    color: #676767;
    background: #fff;
    padding: 10px $side_pad;
    .recev{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .addr{
      display: flex;
    }
    .filed-box{
      font-size: 25px;
      padding: 10px 0;
    }
  }
</style>
