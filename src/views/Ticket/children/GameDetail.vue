<!-- 游戏详情 -->
<template>
  <div>
    <!-- 幻灯片 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../../assets/images/pay/temp_banner01.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/pay/temp_banner02.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../../assets/images/pay/temp_banner02.jpg" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <!-- 门店名称 -->
    <shop-name></shop-name>

    <!-- 分隔符 -->
    <split-com></split-com>

    <!-- 文字简介 -->
    <div>
      <!-- 标题 -->
      <title-box title="文字简介"></title-box>
      <!-- 段落 -->
      <text-area></text-area>
    </div>

    <!-- 分隔符 -->
    <split-com></split-com>

    <!-- 游戏介绍,左侧字段,右侧内容 -->
    <!-- 这里推测用指令来做,如果条目大于1条则增加上下padding,若只有1条则不添加 -->
    <div :class="hasPad">
      <field-intro
        v-for="(item, index) in filedList"
        :key="index"
        :field="item.filed"
        :content="item.content"></field-intro>
    </div>

    <!-- 分隔符 -->
    <split-com></split-com>

    <!-- 详情 -->
    <div>
      <title-box title="详情"></title-box>
      <text-area :hide="true"></text-area>
    </div>

    <!-- 分隔符 -->
    <split-com></split-com>

    <!-- 照片 -->
    <div>
      <!-- 标题 -->
      <title-box title="照片" :border="false"></title-box>

      <!-- 照片列表 -->
      <list-img></list-img>
    </div>

  </div>
</template>

<script>
import Swiper from 'swiper'
import TitleBox from '@/views/Ticket/components/TitleBox'
import TextArea from '@/views/Ticket/components/TextArea'
export default {
  name: "GameDetail",
  data () {
    return {
      msg: '我是传入的消息',
      pad: '',
      filedList: [
        {
          filed: '类型',
          content: '密室逃脱'
        },
        {
          filed: '时长',
          content: '70分钟'
        },
        {
          filed: '推荐人数',
          content: '4-8人'
        }
      ]
    }
  },
  components: {
    TitleBox,
    TextArea,
  },
  computed: {
    hasPad () {
      if (this.filedList.length > 1) {
        return 'pad'
      }
    }
  },
  mounted () {
    new Swiper('.swiper-container',{
      pagination: {
        el: '.swiper-pagination'
      },
    })
  }
}
</script>

<style scoped lang="scss">
  .pad{
    padding: 15px 0;
  }
</style>
