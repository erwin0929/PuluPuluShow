<!-- 选票和增值服务 -->
<template>
  <section>
    <div class="scroll-box" ref="scrollBox">
      <div>
        <!-- 顶部介绍 -->
        <div :class="hasPad">
          <field-intro
            v-for="(item, index) in filedList"
            :key="index"
            :field="item.filed"
            :content="item.content"
            r_color="#606060" />
        </div>

        <!-- 选择规格和票数量 -->
        <standards-box class="a-split"></standards-box>

        <!-- 产品列表,增值服务 -->
        <div class="a-split">
          <title-box title="增值服务"></title-box>
          <!-- 列表 -->
          <div class="shop-list-box">
            <ul>
              <li class="shop" v-for="index in 4" :key="index">
                <div class="shop-list-l">
                  <!-- 图片 -->
                  <div class="img-box">
                    <img src="@img/pay/coke.jpg" alt="">
                  </div>
                  <!-- 简介 -->
                  <div class="intro-box">
                    <span>可口可乐600ml(瓶)</span>
                    <span>¥200</span>
                  </div>
                </div>

                <!-- 计算数量 -->
                <div class="count-box">
                  <!-- 商品为0,等待添加 -->
                  <div class="none" v-show="noAdd === true">
                    <button class="calc-btn">+</button>
                  </div>
                  <!-- 商品已被添加了1件 -->
                  <div class="added" v-show="noAdd === false">
                    <button class="calc-btn">-</button>
                    <mark>1</mark>
                    <button class="calc-btn">+</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- 小计 -->
          <field-intro field="小计" content="￥3645.43"></field-intro>
        </div>

        <!-- 优惠券和发票 -->
        <coupon-box @custom="abc" />
      </div>
    </div>


    <!--  底部结算-->
    <settlement-box />

  </section>
</template>

<script>
import FieldIntro from '@/components/FieldIntro'
import CouponBox from '@/components/CouponBox'
import SettlementBox from '@/components/SettlementBox'
import StandardsBox from '@/components/StandardsBox'
import TitleBox from '@/views/Ticket/components/TitleBox'
import BScroll from 'better-scroll'
export default {
  name: "BuyInfo",
  data () {
    return {
      filedList: [
        {
          filed: '场馆',
          content: '日期'
        },
        {
          filed: '日期',
          content: '9月1日 周五 12:30~14:39'
        },
        {
          filed: '游戏',
          content: 'xxx游戏'
        }
      ],
      // 是否添加了
      noAdd: false,
      // switch按钮
      switchValue: false,
      // 选择的数量
      num: 15,
      // 剩余数量
      count: 16,
      scrollBox: ''
    }
  },
  methods: {
    init () {
      this.$nextTick(() => {
        if (!this.scrollBox) {
          this.scrollBox = new BScroll(this.$refs.scrollBox, {
            click: true,
            bounceTime: 100
          })
        } else {
          this.scrollBox.refresh()
        }
      })
    },
    abc () {
      this.scrollBox.scrollTo(0, -this.scrollBox.scrollerHeight)
      this.$nextTick(() => this.scrollBox.refresh())
    },
    reduceNum () {
      if(this.num === 1) {
        Toast({
          message: '最少只能选择1张哦~',
          duration: this.$Global.Toast.duration
        })
        return false
      }
      this.num--
    },
    addNum () {
      if (this.num === this.count) {
        Toast({
          message: '没有多的票啦~',
          duration: this.$Global.Toast.duration
        })
        return false
      }
      this.num ++
    }
  },
  created () {
    this.init()
  },
  computed: {
    hasPad () {
      if (this.filedList.length > 1) {
        return 'pad'
      }
    },
    getCount () {
      return this.count - this.num
    }
  },
  components: {
    FieldIntro,
    TitleBox,
    SettlementBox,
    CouponBox,
    StandardsBox
  }
}
</script>

<style scoped lang="scss">
  .pad{
    padding: 15px 0;
  }
  .scroll-box{
    width: 100%;
    position: absolute;
    overflow: hidden;
    top: $nav_h;
    left: 0;
    right: 0;
    bottom: $bottom_action;
    z-index: 9;
  }

  // 商品列表
  .shop-list-box{
    .img-box{
      border: 1px solid #ececec; /*no*/
      $size: 80px;
      width: 160px;
      height: 100%;
    }
    .shop-list-l{
      /*height: 110px;*/
      display: flex;
      flex-direction: row;
    }
    .shop{
      border-bottom: 1px solid #d3d3d3;
      height: 201px;
      padding: 20px 10px 20px 25px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .intro-box{
      color: #666;
      font-size: 24px;
      margin-left: 20px;
      padding-bottom: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }
    .count-box{
      width: 130px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    $btn: calc-btn;
    .none{
      display: flex;
      justify-content: center;
      .#{$btn}{
        $size: 50px;
        width: $size;
        height: $size;
        font-size: 40px;
      }
    }
    .added{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .#{$btn}{
        $size: 40px;
        width: $size;
        height: $size;
        font-size: 35px;
      }
    }
    .#{$btn}{
      $size: 40px;
      font-size: 30px;
      width: $size;
      height: $size;
      line-height: $size;
      text-align: center;
      color: #000;
      border-radius: 50%;
      background: $site_color;
    }
  }
</style>
