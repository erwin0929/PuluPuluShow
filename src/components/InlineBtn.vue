<!-- small尺寸按钮, 供详细信息,立即使用 -->
<template>
  <button class="btn" :type="type" @click="$emit('custom')">{{msg}}</button>
</template>

<script>
export default {
  props: {
    msg: {
      required: true,
      type: String
    },
    // 是否是幽灵按钮
    // 可选值: 默认: default, 幽灵按钮(镂空): plain
    // 默认值: default
    type: {
      required: false,
      type: String,
      default: 'default'
    }
  }
}
</script>

<style scoped lang="scss">
  .btn{
    font-size: 25px;
    width: auto;
    height: 55px;
    display: inline-block;
    border-radius: 50px; /*no*/
    background: $site_color;
    color: #000;
    padding: 8px 30px;
    &[type="plain"]{
      $c: #060501;
      border: 1px solid $c; /*no*/
      color: $c;
      background-color: #fff;
    }
  }
</style>
