<!-- 标题栏组件 -->
<template>
  <!-- 添加no则不显示底边框,并且右侧有更多按钮 -->
  <div class="title-box" :class="{no: border === false}">
    <!-- 标题 -->
    <span>{{title}}</span>

    <!-- 右侧更多按钮 -->
    <template v-if="border === false">
      <router-link class="more-box" :to="{name: 'PhotoList'}" tag="div">
        <div class="all-pic">
          <span>全部图片</span>
          <span>(16)</span>
        </div>
        <arrow></arrow>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      default: '请输入标题'
    },
    border: {
      default: true
    }
  },
  created () {
  }
}
</script>

<style scoped lang="scss">
  .title-box{
    border-bottom: 1px solid #d3d3d3; /*no*/
    padding: 0 $side_pad;
    font-size: 26px;
    color: #333;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    $h:75px;
    height: $h;
    line-height: $h;
    &.no{
      border: none;
    }
  }
  .more-box{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .all-pic{
    margin-right: 0px;
  }
</style>
