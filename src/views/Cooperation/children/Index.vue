<!-- 合作 -->
<template>
  <div class="cooper-page">
    <div class="item item-split">
      <!-- 背景图 -->
      <div class="item-img">
        <img src="@img/cooperation/1.jpg" alt="">
      </div>

      <!-- 标题 -->
      <div class="title-box">
        <!-- icon -->
        <div class="icon">
          <i class="icon-i"></i>
        </div>
        <!-- 标题 -->
        <h2 class="title">战略规划</h2>
      </div>

      <!-- 段落 -->
      <p>
        公司计划在未来五年内，通过直营扩张、招商加盟、资源合作和优胜劣汰的形式，在全国范围内，实现四大产品的全面推进。其中，城市潮玩向北京、上海、广州、深圳、南京、杭州、重庆、成都、武汉就打一线、新一线城市引资直营，以城市分公司的形式，关路运营所在城市1-5个不等的不同主题城市潮玩门店和遍布在城市中心的热门活动。同时，城市潮玩门店面向九大城市以为的全部新一线、二线、三线城市，开放招募加盟商。
        未来五年内，濮瑞文化将依托现有实体娱乐研发、运营经验、加速进行产业升级和资源调整，加大IP资源整合力度，以集约化运营和个性化产品，实现业务领域的纵深拓展和品牌竞争力的跨越式提升。
      </p>
    </div>

    <div class="item item-split">
      <!-- 标题 -->
      <div class="title-box">
        <!-- icon -->
        <div class="icon">
          <i class="icon-i"></i>
        </div>
        <!-- 标题 -->
        <h2 class="title">商业合作</h2>
      </div>

      <!-- 段落 -->
      <p>
        <span>投资加盟：</span>
        <span>T：021-60125770</span>
        <span>E：joinpulupulu@pulupulu.com</span>
        <span>Web：www.51manro.com</span>
      </p>
    </div>

    <div class="item">
      <!-- 标题 -->
      <div class="title-box">
        <!-- icon -->
        <div class="icon">
          <i class="icon-i"></i>
        </div>
        <!-- 标题 -->
        <h2 class="title">媒体品牌合作</h2>
      </div>

      <!-- 段落 -->
      <p>
        <span>星巴克、酷圣石等年轻人钟爱品牌、大型综艺节目《极限挑战》《女婿上门了》等都是我们跨界合作对象，而喜欢我们的人也不乏于《爱丽丝漫游仙境》导演蒂姆·波顿、国内知名明星团体。</span>
        <span>合作电话：021-60125773</span>
      </p>
    </div>

    <div class="item">
      <!-- 背景图 -->
      <div class="item-img">
        <img src="@img/cooperation/4.jpg" alt="">
      </div>

      <!-- 标题 -->
      <div class="title-box">
        <!-- icon -->
        <div class="icon">
          <i class="icon-i"></i>
        </div>
        <!-- 标题 -->
        <h2 class="title">工作机会</h2>
      </div>

      <!-- 段落 -->
      <div class="staff-box">

        <router-link
          class="s-list"
          v-for="(item, index) in staffList"
          :key="index"
          :to="{name: 'Staff', params: {id: item.id}}">
          <div>
          <!-- :to="`/staff/${item.id}`"> -->
            <div class="cur-txt">
              <span>上海</span>
              <span>{{item.work}}</span>
            </div>
          </div>
          <div class="arrow">
            <img src="@img/ticket/arr_r.svg" alt="">
          </div>
        </router-link>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Cooperation",
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      staffList: state => state.cooper.staffList
    })
  }
}
</script>

<style scoped lang="scss">
  .cooper-page{
    padding-bottom: 5px;
  }
  .item{
    .title{
      color: #000;
      font-weight: 700;
      font-size: 29px;
    }
    p{
      padding: 0px $side_pad 50px;
      color: #666;
      font-size: 23px;
      line-height: 1.4;
      display: flex;
      flex-direction: column;
    }
    .title-box{
      padding: 0 $side_pad;
      height: 80px;
      display: flex;
      flex-direction: row;
      align-items: center;
      .icon{
        border-radius: 50%;
        background: $site_color;
        $size: 55px;
        margin-right: 20px;
        width: $size;
        height: $size;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    @for $i from 1 through 4{
      $size: 40px;
      &:nth-child(#{$i}){
        .icon-i{
          width: $size;
          height: $size;
          background: url("../../../assets/images/cooperation/icon-list.png") no-repeat center #{($i - 1) * -$size};
          background-size: $size;
        }
      }
    }
  }
  // 人员招募
  .staff-box{
    padding: 0 $side_pad;
    .s-list{
      color: #646566;
      border-bottom: 1px solid #ddd; /*no*/
      font-size: 22px;
      height: 80px;
      padding-left: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:last-child{
        border-bottom: none;
      }
    }
    .cur-txt{
      display: flex;
      align-items: center;
      justify-content: space-between;
      span{
        border-right: 2px solid #cbcccd; /*no*/
        $pad: 15px;
        margin-right: $pad;
        padding-right: $pad;
        &:last-child{
          border-right: none;
        }
      }
    }
    .arrow{
      width: 20px;
    }
    .work{
      font-size: 24px;
      margin-bottom: 15px;
    }
  }
</style>
