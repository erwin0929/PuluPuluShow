<!-- 日期时间选择组件 -->
<template>
  <div>
    123
  </div>
</template>

<script>
export default {
  name: "DateTimePicker",
  created () {
    console.log(this.$refs)
  }
}
</script>

<style lang="scss">
  // 时间选择器样式补丁
  .picker-toolbar{
    height: 75px;
    display: flex;
    align-items: center;
  }
  .mint-datetime-action{
    font-size: 27px;
  }
</style>
