<!-- 筛选菜单组件 -->
<template>
  <ul class="screen-box">
    <li
      class="s-list"
      :class="{ active: active === index }"
      @click="switchTab(item, index)"
      v-for="(item, index) in list"
      :key="index">{{item.name}}</li>
  </ul>
</template>

<script>
export default {
  name: 'ScreeComp',
  props: {
    // 筛选数组
    list: {
      required: true,
      type: Array
    },
    // 使用v-model必传的值
    value: {
      required: false,
      type: null
    },
    // 高亮当前哪一项
    receiveActive: {
      required: false,
      type: null,
      default: 0
    }
  },
  data () {
    return {
      active: this.receiveActive
    }
  },
  methods: {
    switchTab (item, index) {
      this.active = index
      this.$emit('input', item)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/common";
  @import "~@/scss/modules/personCenter";
  .screen-box{
    font-size: 28px;
    height: $screen_h;
    margin-bottom: $spacing;
    display: flex;
    align-items: center;
    background-color: #fff;
  }
  .s-list{
    color: #999;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    &.active{
      color: #000;
      background-color: $site_color;
    }
  }
</style>
