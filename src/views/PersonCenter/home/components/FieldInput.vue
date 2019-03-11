<!-- 修改个人资料的输入框组件 -->
<template>
  <div class="i-box" :class="{'read-only': readOnly}">
    <!-- 文案 -->
    <span class="field">{{field}}</span>

    <!-- 表单可编辑时),渲染输入框和清除按钮 -->
    <template v-if="!readOnly">
      <!-- 输入框 -->
      <input class="input-native" :type="type" :value="value" @input="$emit('input', $event.target.value)">
      <!-- 清除按钮 -->
      <div class="clear-box" @click="">
        <img src="@/assets/images/personCenter/clear.png" alt="">
      </div>
    </template>

    <!-- 表单只读时,只渲染值 -->
    <template v-else>
      <span class="content">{{content}}</span>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    // 字段文案
    field: {
      required: true,
      type: String
    },
    // 具体内容
    content: {
      required: true,
      type: [String, Number]
    },
    // 是否只读,根据该值使得样式和布局发生变化
    // 可选值: true,false
    // 默认值: false
    readOnly: {
      required: false,
      type: Boolean,
      default: false
    },
    // 输入框类型
    type: {
      required: false,
      type: String,
      default: 'text'
    },
    value: {
      required: false,
      type: String,
      default: '请输入值'
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@/scss/modules/personCenter";
  $bgc: #fff;
  .clear-box{
    width: 38px;
  }
  .i-box{
    color: #333;
    border-bottom: 1px solid $split_c; /*no*/
    padding: 0 $side_pad;
    height: 86px;
    background-color: $bgc;
    display: flex;
    align-items: center;
    /* 只读状态 */
    &.read-only{
      color: #999;
      justify-content: space-between;
    }
    &:last-child{
      border-bottom: none;
    }
  }
  .field{
    width: 100px;
  }
  .content{

  }
  .input-native{
    height: 100%;
    padding: 20px 30px 20px 10px;
    flex: 1;
  }
</style>
