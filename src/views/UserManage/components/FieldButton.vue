<!-- 下一步按钮 -->
<template>
	<div>
    <mt-button class="button" type="default" size="large" @click="submit">{{btnText}}</mt-button>
  </div>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      default: '完成'
    }
  },
  methods: {
    submit () {
      this.$emit('pNext')
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../scss/common";
  .button{
    color: #000;
    border: none;
    outline: none;
    background: $site_color;
    box-shadow: none;
    margin-top: 80px;
    @extend .input-style
  }
</style>
