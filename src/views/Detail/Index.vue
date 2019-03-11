<!-- 游戏详情, -->
<template>
	<section>
    <!-- 幻灯片 -->
    <swiper-comp :list="swiperList" />

    <!-- 门店名称 -->
    <div class="s-split">
      <shop-name name="DC档案:古宅惊魂" />
    </div>

    <!-- 文字简介 -->
    <div class="s-split">
      <!-- 标题 -->
      <title-box title="文字简介"></title-box>
      <!-- 段落 -->
      <text-area :paraGraph="introParaGraph" />
    </div>

    <!-- 游戏介绍,左侧字段,右侧内容 -->
    <div class="s-split">
      <div :class="hasPad">
        <field-intro
          v-for="(item, index) in filedList"
          :key="index"
          :field="item.filed"
          :content="item.content"></field-intro>
      </div>
    </div>

    <!-- 详情 -->
    <div class="s-split">
      <title-box title="活动详情"></title-box>
      <text-area :hide="true" :paraGraph="detailParaGraph"></text-area>
    </div>

    <!-- 照片 -->
    <div>
      <!-- 标题 -->
      <title-box title="照片" :border="false"></title-box>

      <!-- 照片列表 -->
      <list-img></list-img>
    </div>

    <!-- 按钮区 -->
    <template v-if="module !== 'toView'">
      <div class="btn-box">
        <router-link class="apply" :to="{name: 'ApplyCard'}">申请次卡、年卡</router-link>
        <router-link class="Buy" :to="{name: 'BuyTicket'}" >前往购票</router-link>
      </div>
    </template>

  </section>
</template>

<script>
import TitleBox from '@/views/Ticket/components/TitleBox'
import SwiperComp from '@/components/common/SwiperComp'
import TextArea from '@/views/Ticket/components/TextArea'
import mixin from '@/mixin'
export default {
  props: ['module'],
  data () {
    return {
      pad: '',
      introParaGraph: '一个暴雨将至的夜晚，你们作为民间的义士被召集到当地望族——谈天霆谈老爷的宅邸，调查谈家七岁少爷谈一鸣失踪一案。古朴阴森的宅院，枯槁凋零的老树，烛光暗烁的灵堂，伫立门外的身影……接二连三的怪事相继发生，古宅中到底隐藏着什么秘密？谈家失踪的儿子到底在哪里？',
      detailParaGraph: `【开放式场景设计】采用围合式院落设计，全实木置景，大量中式灯笼、镂空花窗、青砖、祠堂等经典中式建筑元素，完美还原了一个弥漫着诡异气氛的神秘古宅。

【极致沉浸式体验】炫幻的光影效果配合诡秘的音效，声声入耳，直击心底，真人表演与情境的完美融合，精心呈现了一部独具中国特色的沉浸式传奇惊悚盛宴。

【超乎想象的剧情】精心雕琢的谜题和机关，处处设置的悬念，层层反转的剧情，恐惧时刻伴随着你，带来喘不过气来的紧张之感。

一个暴雨将至的夜晚，你们作为民间的义士被召集到当地望族——谈天霆谈老爷的宅邸，调查谈家七岁少爷谈一鸣失踪一案。古朴阴森的宅院，枯槁凋零的老树，烛光暗烁的灵堂，伫立门外的身影……接二连三的怪事相继发生，古宅中到底隐藏着什么秘密？谈家失踪的儿子到底在哪里？

在这特殊的清明夜里，恐惧感与好奇心激烈斗争，在无边的黑暗里逐渐接近真相，一切的诡谲谜团都在等待你去破解……`,
      data: [],
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
      ],
      swiperList: [
        {
          imgSrc: require('@/assets/images/pay/temp_banner02.jpg')
        },
        {
          imgSrc: require('@/assets/images/pay/temp_banner02.jpg')
        },
        {
          imgSrc: require('@/assets/images/pay/temp_banner02.jpg')
        }
      ]
    }
  },
  created () {
  },
  computed: {
  },
  mixins: [mixin],
  components: {
    TitleBox,
    SwiperComp,
    TextArea
  }
}
</script>

<style scoped lang="scss">
  .pad{
    padding: 15px 0;
  }
  .contact-us{
    border-top: 1px solid #d3d3d3;/*no*/
    font-size: 24px;
    height: 75px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 $side_pad;
    .icon-box{
      $size: 45px;
      width: $size;
      height: $size;
      border-radius: 50%;
      margin-right: 25px;
      background: $site_color;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .tel-txt{
      color: #666;
    }
    .l-us{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon-tel{
      $size: 25px;
      width: $size;
      height: $size;
    }
  }
  .btn-box{
    $fz: 28px;
    height: 80px;
    display: flex;
    align-items: center;
    .apply{
      font-size: $fz;
      height: 100%;
      color: $site_color;
      background: #000;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .Buy{
      font-size: $fz;
      height: 100%;
      color: #000;
      background: $site_color;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
