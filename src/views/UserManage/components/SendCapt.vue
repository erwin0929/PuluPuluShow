<!-- 发送验证码组件 -->
<template>
	<div class="send-code">
    <span @click="sendCapt">发送校验码</span>
  </div>
</template>

<script>
export default {
  props: {
  },
  methods: {
    sendCapt () {
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../scss/common";
  .send-code{
    color: #000;
    margin: 0 15px 0 50px;
    font-size: 25px;
  }
</style>
