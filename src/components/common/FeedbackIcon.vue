<!-- 反馈的icon组件 -->
<template>
  <section class="icon-box">
    <!-- 成功图片 -->
    <img class="notice" :src="getIconSrc" alt="">
  </section>
</template>

<script>
export default {
  name: "SuccessIcon",
  computed: {
    getIconSrc () {
      return require(`@/assets/images/pay/${this.status}.png`)
    }
  },
  props: {
    // 反馈的状态
    // 可选值: success, error
    // 默认值: 无(必填)
    status: {
      required: true,
      type: String,
      validator (value) {
        // 这个值必须匹配下列字符串中的一个
        let whiteList = ['success', 'error']
        return whiteList.includes(value)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .icon-box{
    $size: 190px;
    border-radius: 50%;
    width: $size;
    height: $size;
    background: $site_color;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .notice{
    width: 110px;
  }
</style>
