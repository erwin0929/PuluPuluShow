<!-- 选择场次 -->
<template>
  <div>
    <!-- 地址 -->
    <div class="adress-box">
      <i class="icon-ad"></i>
      <span>上海徐家汇XXXXX馆</span>
    </div>

    <!-- 幻灯片 -->
    <swiper-comp :list="swiperList" />

    <!-- 游戏名称简介 -->
    <div class="view-detail">
      <div class="l-box">
        <span>DC档案: 古宅惊魂</span>
        <span class="intro">一个暴雨将至的夜晚，你们作为民间的义士被召集到当地望族——谈天霆谈老爷的宅邸，调查谈家七岁少爷谈一鸣</span>
      </div>
      <inline-btn :msg="$t('components.detailInfo')" @custom="$router.push( {name: 'AnyDetail', params: {module: 'toView'}} )" />
    </div>

    <!-- 日历 -->
    <Calendar @choseDay="clickDay"/>

    <choose-list />
  </div>
</template>

<script>
import TicketList from '@/views/Ticket/components/TicketList'
import SwiperComp from '@/components/common/SwiperComp'
import Calendar from 'vue-calendar-component'
export default {
  name: "ChooseShows",
  data () {
    return {
      swiperList: [
        {
          imgSrc: require('@/assets/images/pay/temp_banner.jpg')
        },
        {
          imgSrc: require('@/assets/images/pay/temp_banner.jpg')
        },
        {
          imgSrc: require('@/assets/images/pay/temp_banner.jpg')
        }
      ]
    }
  },
  methods: {
    clickDay (data) {
      console.log(data)
    }
  },
  components: {
    TicketList,
    SwiperComp,
    Calendar
  }
}
</script>

<style scoped lang="scss">
  .adress-box{
    font-size: 22px;
    padding: 0 $side_pad;
    background: #f3f3f3;
    height: 65px;
    display: flex;
    align-items: center;
    .icon-ad{
      $size: 40px;
      width: $size;
      height: $size;
      background: url("../../../assets/images/pay/adress.png") no-repeat center;
      background-size: $size;
      margin-right: 10px;
    }
  }
  .intro{
    font-size: 23px;
    overflow: hidden;
    white-space: nowrap;
    margin-top: 10px;
    text-overflow: ellipsis;
    color: #999;
  }
  .view-detail{
    border-bottom: 1px solid $split_line; /*no*/
    padding: 0 $side_pad;
    height: 105px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .l-box{
    color: #313131;
    font-size: 25px;
    width: 520px;
    display: flex;
    flex-direction: column;
  }
</style>

