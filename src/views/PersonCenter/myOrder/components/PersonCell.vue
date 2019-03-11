<!-- Cell组件, 已支付稍不同 -->
<template>
  <section class="cell-box" :class="{multi, payed}">
    <!-- 左侧字段 -->
    <span class="field">{{field}}</span>
    <!-- 右侧内容 -->
    <!-- 多列: 规格和增值服务 -->
    <template v-if="multi">
      <div class="multi-box">
        <div class="multi-item">
          <span>平日1人 ¥200.00</span>
          <span>*1</span>
        </div>
        <div class="multi-item">
          <span>xxxx饮料 ¥24.00</span>
          <span>×2</span>
        </div>
      </div>
    </template>

    <!-- 是否是已支付cell -->
    <template v-else-if="payed">
      <price-txt class="price" :price="content" />
    </template>

    <!-- 只有一列 -->
    <template v-else>
      <span>{{content}}</span>
    </template>
  </section>
</template>

<script>
export default {
  props: {
    // 是否是已支付字段,文本颜色和字体不一样
    payed: {
      required: false,
      type: Boolean,
      default: false
    },
    // 是否是多列,规格和增值服务
    multi: {
      required: false,
      type: Boolean,
      default: false
    },
    field: {
      required: false,
      type: String,
      default: '请输入字段'
    },
    content: {
      required: false,
      type: [String, Number],
      default: '请输入内容'
    }
  }
}
</script>

<style scoped lang="scss">
  .cell-box{
    font-size: 26px;
    height: 60px;
    padding: 0 $side_pad;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    &.multi{
      height: auto;
      align-items: flex-start;
      padding-bottom: 10px;
    }
    &.payed{
      color: #000;
      font-size: 32px;
      .field{
        font-size: inherit;
      }
      .price{
        font-size: inherit;
      }
    }
  }
  .multi-item{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .field{
    color: #a0a0a0;
  }
</style>
