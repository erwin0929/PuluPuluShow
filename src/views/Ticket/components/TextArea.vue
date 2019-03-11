<!-- 大段的文字介绍,包含展开功能,注意预留 -->
<template>
  <div class="para-box">
    <!-- 段落 -->
    <p class="para" :class="{hide: isHide}">{{paraGraph}}</p>

    <!-- 展开按钮 -->
    <div class="expand-box" v-if="isHide === true">
      <div class="flex" @click="isHide = false">
        <div class="expand">展开详情</div>
        <div class="arr-b">
          <img src="@/assets/images/pay/arrow-b.png" alt="">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    // 默认等于false,隐藏多余的文本,只显示3行
    hide: {
      required: false,
      type: Boolean,
      default: false
    },
    // 段落文本
    // 必填
    paraGraph: {
      required: true,
      type: String,
      default: '请输入文本'
    }
  },
  data () {
    return {
      isHide: this.hide
    }
  }
}
</script>

<style scoped lang="scss">
  .para-box{
    padding: 0 25px;
    .expand-box{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .expand{
      color: $site_color;
      font-size: 24px;
      margin-bottom: 15px;
    }
    .arr-b{
      width: 30px;
      margin-bottom: 20px;
    }
    .flex{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .para{
    color: #999;
    font-size: 24px;
    line-height: 1.45;
    margin: 20px 0;
    text-indent: 2em;
    &.hide{
      overflow : hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
  }
</style>
