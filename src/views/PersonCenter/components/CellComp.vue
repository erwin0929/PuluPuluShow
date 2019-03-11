<!-- 个人中心Cell组件 -->
<template>
  <section class="cell-box" :class="{border}">
    <div class="left">
      <!-- icon -->
      <div class="icon-box">
        <img :src="getIcon" alt="">
      </div>
      <!-- 标题 -->
      <span class="title">{{title[type]}}</span>
    </div>

    <!-- 链接 -->
    <div class="right">
      <!-- 获取右侧文字 -->
      <template v-if="rTxt">
        <span class="is-link">{{rTxt}}</span>
      </template>
      <!-- 箭头 -->
      <span class="arrow"></span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CellComp',
  props: {
    // 是否含有底边框
    border: {
      required: false,
      type: Boolean,
      default: false
    },
    // 哪种类型的Cell,无需传递title,根据type自动判断
    // 可选值定义在data.title中
    type: {
      required: true,
      type: String
    },
    // 右侧文字
    rTxt: {
      required: false,
      type: [Number, String]
    }
  },
  data () {
    return {
      title: {
        order: this.$t('personCenter.orderManage'),
        coupon: this.$t('personCenter.coupon'),
        addr: this.$t('personCenter.address'),
        invoice: this.$t('personCenter.invoiceManage'),
        pwd: this.$t('personCenter.updatePwd')
      }
    }
  },
  computed: {
    getIcon () {
      return require(`@img/personCenter/${this.type}.png`)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/common";
  @import "~@/scss/modules/personCenter";
  .cell-box{
    padding: 0 $side_pad;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    &.border{
      border-bottom: 1px solid $split_c; /*no*/
    }
    .title{
      color: #000;
      font-size: 28px;
    }
    .icon-box{
      $size: 42px;
      width: $size;
      height: $size;
      border-radius: 50%;/*no*/
      margin-right: 8px;
      background-color: $site_color;
    }
    .is-link{
      font-size: 26px;
      color: #999;
    }
    .left{
      display: flex;
      align-items: center;
    }
    .right{
      display: flex;
      align-items: center;
    }
    .arrow{
      display: flex;
      margin-left: 20px;
      @include arrow_r()
    }
  }
</style>
