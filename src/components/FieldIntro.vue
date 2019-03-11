<!-- 用于游戏详情和项目详情的 左右结构来显示简介 -->
<!-- 这是一条item,通过父组件循环来得出更多的item -->
<template>
  <div class="field-box" :more="more" @click="$emit('custom')">
    <!-- 左侧字段 -->
    <span :style="{color: l_color}">{{field}}</span>
    <!-- 右侧内容区 -->
    <div class="content-box">
      <span class="content" :style="{color: r_color}">{{content}}</span>
      <!-- 箭头 -->
      <template v-if="more">
        <img class="arrow" src="@img/pay/arrow-left.png" alt="">
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "FieldIntro",
  data () {
    return {
      defaultColor: '#a1a1a1'
    }
  },
  props: {
    // 左侧字段字体颜色
    l_color: {
      required: false,
      default: '#a1a1a1'
    },
    // 右侧内容字体颜色
    r_color: {
      required: false,
      default: '#a0a0a0'
    },
    //
    field: {
      required: true,
      default: '请输入字段'
    },
    content: {
      required: true,
      default: '请输入内容'
    },
    // 是否有箭头
    more: {
      required: false,
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
  .field-box{
    font-size: 24px;
    background: #fff;
    padding: 0 15px 0 $side_pad;
    height: 65px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    &[more]{
      .content{
        color: #676767;
      }
    }
  }
  .content-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .arrow{
    width: 14px;
    margin-left: 15px;
    display: block;
  }
</style>
