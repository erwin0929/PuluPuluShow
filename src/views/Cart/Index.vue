<!-- 购物车页 -->
<template>
  <section class="cart-page">
    <div class="scroll">
      <!-- 购物列表 -->
      <div class="car-l-box" v-if="dataList.length">
        <!-- 此处有2种状态,添加sell-out则为售罄状态,字体颜色发生变化,不添加则默认 -->
        <div class="cart-list" v-for="(item, index) in dataList" :key="index">
          <!-- 多选按钮 -->
          <check-box />

          <!-- 图片 -->
          <div class="img-box">
            <img :src="item.imgSrc" alt="">
          </div>

          <!-- 简介 -->
          <div class="intro-box">
            <div>
              <div class="game-name">{{item.title}}</div>
              <p class="intro">{{item.intro}}</p>
            </div>
            <div class="bottom-box">
              <price-txt :price="200"></price-txt>
              <time class="date">2018.08.23 14:30~15:00</time>
            </div>
          </div>
        </div>
      </div>
      <no-data v-else />

      <!-- 结算 -->
      <div class="settl">
        <div class="choose-box">
          <div>全选</div>
          <!--<div>反选</div>-->
        </div>

        <div class="total-box">
          <div>
            <span>合计 : </span>
            <price-txt :price="353.34"></price-txt>
          </div>
          <button class="sett-btn">结算(2)</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import commonMixin from '@mixin/common'
import mixin from '@mixin/modules/cart'
export default {
  name: 'Cart',
  data () {
    return {
      // 购物车列表数组
      dataList: []
    }
  },
  methods: {
    async getData () {
      const { dataList } = await this.getCartList({
        memberId: this.userInfo.id
      })
      Object.assign(this, { dataList })
      this.closeToast()
    }
  },
  mixins: [commonMixin, mixin]
}
</script>

<style scoped lang="scss">
  $settlHeight: 80px;
  .cart-page{
    width: 100%;
    position:absolute;
    top: $nav_h;
    bottom: $settlHeight;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: 1;
  }
  .scroll{
    height: 100%;
  }
  .settl{
    width: 100%;
    font-size: 24px;
    padding-left: $side_pad;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: $settlHeight;
  }
  .car-l-box{
    padding: 0 $side_pad;
  }
  $list: cart-list;
  .#{$list}{
    border-bottom: 1px solid #f2f2f2;/*no*/
    height: 170px;
    padding: 25px 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    &:last-child{
      border-bottom: none;
    }
    &.sell-out{
      color: #cfcfcf;
      .game-name{
        color: inherit;
      }
      .intro{
        color: inherit;
      }
      .date{
        color: inherit;
      }
    }
    .game-name{
      color: #000;
      font-size: 30px;
    }
    .intro,
    .date{
      font-size: 24px;
      color: #999;
    }
  }
  .bottom-box{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .choose-box{
    width: 60px;
    height: 100%;
    line-height: $settlHeight;
    font-size: 24px;
  }
  .img-box{
    width: 130px;
    margin: 0 15px 0 15px;
  }
  .intro-box{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1;
  }
  .sett-btn{
    font-size: 26px;
    width: 200px;
    color: #000;
    height: 100%;
    margin-left: 30px;
    text-align: center;
    background: $site_color;
  }
  .total-box{
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>
