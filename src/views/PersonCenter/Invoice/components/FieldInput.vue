<!-- 发票专用表单组件 -->
<template>
  <section class="input-box" :class="{required}">
    <!-- 必填星标 -->
    <span class="require"></span>
    <!-- 文案 -->
    <span class="field">{{msg}}</span>
    <!-- 输入框 -->
    <input class="input-navtive" :type="type" :placeholder="pholder" :value="value" @input="$emit('input', $event.target.value)">
  </section>
</template>

<script>
export default {
  name: "FieldInput",
  props: {
    // 输入框的值
    value: {
      required: false,
      type: null
    },
    // 是否必填,会显示必填星标
    // 可选值: true, false
    // 默认值: false
    required: {
      required: false,
      type: Boolean,
      default: false
    },
    // 字段文案
    // 任意String类型
    // 默认值: 无(必填)
    msg: {
      required: true,
      type: String
    },
    // 输入框placeholder,不多说了
    pholder: {
      required: false,
      type: String
    },
    // 输入框类型
    // 可选值: 原生属性type支持的所有值
    // 默认值： text
    type: {
      required: false,
      type: String,
      default: 'text'
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@/scss/modules/personCenter";
  .input-box{
    font-size: 24px;
    padding: 0 $side_pad;
    height: 84px;
    border-bottom: 1px solid $split_c;/*no*/
    display: flex;
    align-items: center;
    /* 必填显示星标 */
    &.required{
      .require{
        visibility: visible;
      }
    }
  }
  .field{
    color: #666;
    width: 162px;
  }
  .require{
    width: 25px;
    visibility: hidden;
    &::after{
      content: '*';
      color: #fd4a4a;
    }
  }
  .input-navtive{
    height: 100%;
    padding: 15px 0px;
    flex: 1;
  }
</style>
