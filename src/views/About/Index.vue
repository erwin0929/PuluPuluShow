<!-- 关于页 -->
<template>
  <div>
    <!-- swiper区 -->
    <div class="banner-box">
      <img src="@img/about/banner.png" alt="">
    </div>

    <div class="about-box">
      <h2 class="about-t-s">{{$t('home.aboutUs')}}</h2>
      <div class="about-list-s" v-for="(item, index) in aboutTxt" :key="index">
        <p class="intro">{{item.intro}}</p>
        <p class="detail">{{item.detail}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import commonMixin from '@mixin/common'
export default {
  name: 'About',
  computed: {
    ...mapState({
      aboutTxt: state => state.about.aboutTxt
    })
  },
  mixins: [commonMixin]
}
</script>

<style scoped lang="scss">
  .about-box{
    padding: 0 27px 0 46px;
  }
  .banner-box{
    padding: 60px 46px 35px;
    background: linear-gradient(#6e6e6e, #5f5f5f, #171916)
  }
  .about-t-s{
    font-size: 35px;
    color: $site_color;
    height: 90px;
    display: flex;
    align-items: center;
  }
  .about-list-s{
    padding: 0px 0 20px;
  }
  [class$="-s"]{
    border-bottom: 1px solid #5e605d; /*no*/
  }
  .intro{
    font-size: 26px;
    color: #fbfbfb;
    padding: 15px 0;
  }
  .detail{
    font-size: 22px;
    color: #d3d5d2;
    line-height: 35px;
  }
</style>
