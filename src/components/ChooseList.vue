<!-- 选择场次组件 -->
<template>
  <!-- 场次 -->
  <div class="shows-box">
    <!-- 列表标题 -->
    <div class="shows-txt">场次</div>

    <div>
      <router-link class="intro-box" :class="{'sell-out': item.sur == 0}" v-for="(item, index) in list" :key="index" :to="{name: 'BuyInfo'}">
        <!-- 时间 -->
        <div>
          <time class="choose-date" datetime="10:30~12:30">{{item.time}}</time>
          <div class="rmb">
            <span class="surplus">{{item.sur}}</span>
            <span class="rmb-t">{{item.price}}</span>
          </div>
        </div>
        <!-- 箭头 -->
        <arrow />
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "ChooseList",
  computed: {
    ...mapState({
      list: state => state.ticket.list
    })
  },
}
</script>

<style scoped lang="scss">
  .shows-box{
    padding: 0 $side_pad;
    $bor: #e5e5e5;
    $fz: 27px;
    .shows-txt{
      font-size: $fz;
      border-bottom: 1px solid $bor;
      $h: 75px;
      height: $h;
      line-height: $h;
    }
    .intro-box{
      border-bottom: 1px solid $bor;
      padding: 15px 0 15px 25px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      &.sell-out{
        color: #8f9091;
        *{
          color: inherit;
        }
      }
      &:last-child{
        border-bottom: none;
      }
    }
    .surplus{
      font-size: 25px;
      color: #db2b04;
      margin-right: 20px;
      &::before{
        content: '余票';
      }
      &::after{
        content: '张';
      }
    }
    .rmb{
      font-size: 24px;
      color: #999;
    }
    .rmb-t{
      &::before{
        content: '¥';
      }
    }
    .choose-date{
      font-size: $fz;
      height: 55px;
      display: block;
    }
  }
</style>
