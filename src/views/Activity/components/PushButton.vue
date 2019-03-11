<!-- 按钮组件 -->
<template>
  <div>
    <mt-button type="danger" size="large" @click.native="handle">
      <!-- 图片插槽 -->
      <slot name="icon"></slot>
      <!-- 按钮文本 -->
      <span class="txt">
        {{btnTxt}}
      </span>
    </mt-button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    // 按钮文本
    btnTxt: {
      type: String,
      default: '确认'
    }
  },
  methods: {
    // 点击触发父级事件
    handle () {
      this.$emit('pHandle', this.btnTxt)
    }
  }
}
</script>

<style scoped lang="scss">
  .mint-button{
    border-radius: 0;
    background: $site_color;
    color: #000;
    $h: 90px;
    height: $h;
    line-height: $h;
    font-size: 29px;
  }
  .img-icon{
    width: 60px;
    margin-right: 20px;
  }
  .txt{
    margin-left: 20px;
  }
</style>
