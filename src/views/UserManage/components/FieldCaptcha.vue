<!-- 含验证码的input -->
<template>
	<div class="input-box">
    <mt-field class="input" placeholder="短信验证码">
      <span class="send-code" @click="sendCapt">发送校验码</span>
    </mt-field>
    <div class="split"></div>
  </div>
</template>

<script>
export default {
  props: {
  },
  methods: {
    sendCapt () {
      this.$emit('send')
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../scss/common";
  .input-box{
    margin-bottom: 20px;
    position: relative;
  }
  .input {
    padding-left: 15px;
    @extend .input-style
  }
  .send-code{
    color: #000;
    margin: 0 15px 0 10px;
  }
  .split{
    $po: 8px;
    width: 1px; /*no*/
    position: absolute;
    top: $po; /*no*/
    bottom: $po; /*no*/
    left: 390px;
    background: #bfbfbf;
  }
</style>
