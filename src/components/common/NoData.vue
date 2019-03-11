<!-- 暂无数据组件,未预留图片入口,字体大小继承,高度75 -->
<template>
  <section class="no-data">
    {{msg}}
  </section>
</template>

<script>
export default {
  props: {
    msg: {
      required: false,
      type: String,
      default: '暂无数据'
    }
  }
}
</script>

<style lang="scss" scoped>
  .no-data{
    font-size: inherit;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

