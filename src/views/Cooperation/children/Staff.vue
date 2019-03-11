<!-- 人员招募页 -->
<template>
  <div class="staff-box">
    <!-- 顶部简介 -->
    <div class="boss-box">
      <div class="title">{{curWork.work}}</div>
      <div class="intro-box">
        <span>上海</span>
        <span>{{curWork.study}}</span>
      </div>
    </div>

    <!-- 分割线 -->
    <split-com></split-com>

    <!-- 岗位描述 -->
    <div class="describ">
      <h2 class="work-title">
        <i class="light"></i>
        职位介绍
      </h2>
      <div class="duty">岗位职责</div>
      <!-- 段落 -->
      <div v-html="curWork.msg"></div>

      <div class="duty">任职要求</div>
      <!-- 段落 -->
      <div v-html="curWork.rement"></div>
    </div>

    <div class="to-email">投递简历（邮箱）ypcao@pulupulu.com</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Staff",
  props: ['id'],
  data () {
    return {
      curWork: {}
    }
  },
  computed: {
    ...mapState({
      staffList: state => state.cooper.staffList
    })
  },
  created () {
    this.curWork = this.staffList[this.id - 1]
  }
}
</script>

<style scoped lang="scss">
  .staff-box{
    padding: 5px 0;
  }
  .describ,
  .boss-box{
    padding: 0 $side_pad;
  }
  .title{
    font-size: 30px;
    color: #000;
    line-height: 65px;
  }
  .work-title{
    color: #000;
    font-size: 27px;
    /*line-height: 65px;*/
    position: relative;
    padding-left: 25px;
    margin: 20px 0;
  }
  .duty{
    font-size: 22px;
    line-height: 45px;
  }
  .light{
    width: 5px; /*no*/
    position: absolute;
    background-color: $site_color;
    $po: 1px;
    left: 0;
    top: $po; /*no*/
    bottom: $po; /*no*/
  }
  .intro-box{
    display: flex;
    & > span{
      font-size: 25px;
      margin-right: 25px;
      height: 55px;
    }
  }
  .to-email{
    font-size: 23px;
    line-height: 75px;
    text-align: center;
  }
</style>
