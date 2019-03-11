<!-- 活动详情 -->
<template>
  <div>
    <div>
      <img v-lazy="detailImg">
    </div>

    <!-- 详细介绍 -->
    <div class="d-box">
      <h2 class="title-s">The Walking Dead(行尸走肉)表演艺术展</h2>
      <div>
        <div class="field-s">展演信息</div>
        <div class="info-box">
          <span>名称 :</span>
          <span>The Walking Dead(行尸走肉)表演艺术展</span>
          <span>地点 :</span>
          <span>北京市朝阳区西大望路21号合生汇5F中庭</span>
          <span>时间 :</span>
          <time>2018年8月4日-10月4日 每日10:00-21:30</time>
        </div>
      </div>

      <div>
        <div class="field-s">展演介绍</div>
        <p class="intro-box">
          根据风靡全球持续大热的经典美剧The Walking Dead（行尸走肉）改编，通过逼真实景还原、专业演员演绎、立体特效支持等全方位新型展演技术相结合，再现剧中经典场景与桥段。通过沉浸式移动快闪剧场的形式，首站登陆中国北京朝阳区合生汇5F，倾力呈现刺激感官极致真实的沉浸式丧尸末日求生之旅。现场1,000㎡实景场地、50余位专业演员投入演绎，为你还原打造一个身临其境的丧尸末日奇景，更有300㎡火爆正版The Walking Dead（行尸走肉）主题周边商品区域，一站式限时闪现，让你在感受沉浸式展演的魅力之余也能买到手软，过足丧尸瘾。
        </p>
      </div>
    </div>
    <btn-comp msg="分享" radian="square" @custom="toShare">
      <img src="@img/activity/share.png">
    </btn-comp>
  </div>
</template>

<script>
import{mapState} from 'vuex'
export default {
  name: "ActDetail",
  data () {
    return {
      duration: this.$Global.Toast.duration,
      T: {},
      isShared: false,
      detailImg: require('@/assets/images/activity/02.jpeg')
    }
  },
  methods: {
  },
  computed:{

  },
  created(){
    // console.log(this.dataList)
    // this.model=this.dataList.find(a=>a.id==id)
    // console.log(this.model)
    this.closeToast();
  }
}
</script>

<style scoped lang="scss">
  .d-box{
    padding: 20px $side_pad 90px;
  }
  .title-s{
    font-weight: 700;
    font-size: 35px;
    color: #fff;
    line-height: 65px;
  }
  [class$="-s"]{
    border-bottom: 1px solid #333; /*no*/
  }
  @mixin txt{
    font-size: 22px;
    color: #c7c7c7;
    padding: 10px 25px 0 15px;
  }
  .field-s{
    font-size: 26px;
    color: $site_color;
    height: 70px;
    padding-top: 10px;
    display: flex;
    align-items: center;
    &::before{
      content: '';
      $size: 20px;
      width: $size;
      height: $size;
      border-radius: 50%;
      background: $site_color;
      margin-right: 15px;
    }
  }
  .info-box{
    display: flex;
    flex-direction: column;
    @include txt;
  }
  .intro-box{
    @include txt;
    line-height: 35px;
  }
</style>
