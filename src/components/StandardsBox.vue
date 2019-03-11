<!-- 选择规格和票的数量组件 -->
<template>
  <section>
    <!-- 选择规格 -->
    <div class="standards-box">
      <div class="standards">
        <span class="f-filed">请选择规格</span>
        <div class="r-content">
          <div>
            <span>平日</span>
            <mark>1</mark>
            <span>人</span>
          </div>
          <div class="arrow-box">
            <img src="../assets/images/ticket/arr_b.svg" alt="">
          </div>
        </div>
      </div>
    </div>
    
    <!-- 选择票的数量 -->
    <div>
      <div class="surplus">
        <span>该票目前剩余</span>
        <span class="count">&nbsp;{{getCount}}&nbsp;</span>
        <span>张</span>
      </div>
      <div class="calc-box">
        <span class="clc" @click="reduceNum">-</span>
        <span class="choose-count">{{num}}</span>
        <span class="clc" @click="addNum">+</span>
      </div>
      <field-intro field="小计" content="￥200"></field-intro>
    </div>
    
  </section>
</template>

<script>
import FieldIntro from '@/components/FieldIntro'
export default {
  data () {
    return {
      // 选择的数量
      num: 2,
      // 剩余数量
      count: 5
    }
  },
  methods: {
    reduceNum () {
      if(this.num === 1) {
      }
      this.num--
    },
    addNum () {
    }
  },
  computed: {
    getCount () {
      return this.count - this.num
    }
  },
  components: {
    FieldIntro
  }
}
</script>

<style scoped lang="scss">
  // 规格
  .standards-box{
    $bor: #e5e5e5;
    border-top: 1px solid $bor;
    border-bottom: 1px solid $bor;
    padding: 0 $side_pad;
    .standards{
      font-size: 24px;
      height: 75px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  // 计算票数
  .calc-box{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .clc{
      font-size: 50px;
      color: #666;
    }
    .choose-count{
      color: #000;
      font-size: 35px;
      border-radius: 9px; /*no*/
      width: 150px;
      height: 60px;
      margin: 0 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: $site_color;
    }
  }

  // 选择票数量
  .surplus{
    font-size: 24px;
    padding: 25px $side_pad 40px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    .count{
      font-size: 35px;
      line-height: 30px;
    }
    & > span{
      height: 30px;
    }
  }

  // 左侧字段的字体样式
  .f-filed{
    font-size: 24px;
    color: rgb(161, 161, 161);
  }
  // 右侧内容样式
  .r-content{
    color: #707070;
    font-size: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  // 箭头样式
  .arrow-box{
    width: 25px;
    margin-left: 15px;
  }
</style>
