<!-- 简约输入框组件,供修改密码和添加收货地址使用 -->
<template>
  <section class="inp-box" :class="{area: textarea}">
    <span class="left">{{field}}</span>
    <!-- 添加样式arrow则显示箭头 -->
    <div class="i-box" :class="{arrow: more}" @click="$emit('custom')">
      <template v-if="textarea">
        <textarea class="input" :value="value" :placeholder="pholder" @input="$emit('input', $event.target.value)"></textarea>
      </template>
      <template v-else>
        <input class="input" :type="type" :readonly="readonly" :placeholder="pholder" :value="value" @input="$emit('input', $event.target.value)">
      </template>
    </div>
  </section>
</template>

<script>
export default {
  name: "SimpleInput",
  props: {
    // 输入框的值
    value: {
      required: true,
      type: null
    },
    // 字段
    field: {
      required: true,
      type: String
    },
    // placeholder
    pholder: {
      required: false,
      type: String,
      default: ''
    },
    type: {
      required: false,
      type: String,
      default: 'text'
    },
    // 是否有事件触发(是否添加箭头)
    more: {
      required: false,
      type: Boolean,
      default: false
    },
    // 是否禁止用户手动输入修改
    readonly: {
      required: false,
      type: Boolean,
      default: false
    },
    // 是否是textarea,大段文字
    textarea: {
      required: false,
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/common";
  @import "~@/scss/modules/personCenter";
  .inp-box{
    border-bottom: 1px solid $split_c;/*no*/
    padding: 0 $side_pad;
    height: 90px;
    display: flex;
    align-items: center;
    &.area{
      height: 175px;
    }
    .left{
      font-size: 25px;
      width: 195px;
    }
    .i-box{
      height: 100%;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: space-between;
      &.arrow{
        @include arrow_r();
      }
    }
    .input{
      font-size: 23px;
      width: 465px;
      height: 100%;
      padding: 25px 0;
      background: transparent;

    }
  }
</style>
