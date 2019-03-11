<!-- 购票主页 -->
<template>
  <div>
    <!-- 还有个日历 -->
    <Calendar @choseDay="clickDay"/>

    <!-- 筛选菜单 -->
    <div class="screen-box">
      <div class="screen">
        <div class="sec-list" v-for="(item, index) in list" :key="index">
          <span>{{item.name}}</span>
          <i class="arrow"></i>
        </div>
      </div>
    </div>

    <div class="notice">
      <span>4</span>
    </div>

    <!-- 购票列表 -->
    <div>
      <ticket-list
        v-for="(items, index) in ticket"
        :key="index"
        :item="items"
        url="ChooseShows" />
    </div>
  </div>
</template>

<script>
import commonMixin from '@mixin/common'
import TicketList from '../components/TicketList'
import Calendar from 'vue-calendar-component'
import {mapState} from 'vuex'
export default {
  name: 'BuyTicket',
  data () {
    return {
      list: [
        {
          name: '全国'
        },
        {
          name: '门店'
        },
        {
          name: '项目分类'
        },
        {
          name: '游戏分类'
        }
      ],
      ticketList: [
        {
          id: 1,
          url: 'ChooseShows',
          params: 'id'
        },
        {
          id: 2,
          url: 'ChooseShows',
          params: 'id'
        },
        {
          id: 3,
          url: 'ChooseShows',
          params: 'id'
        },
        {
          id: 4,
          url: 'ChooseShows',
          params: 'id'
        }
      ]
    }
  },
  methods: {
    clickDay (data) {
      console.log(data) //选中某天
    }
  },
  computed: {
    ...mapState({
      ticket: state => state.ticket.ticketList
    })
  },
  components: {
    TicketList,
    Calendar
  },
  mixins: [commonMixin]
}
</script>

<style scoped lang="scss">
  .screen-box{
    padding: 0 $side_pad;
    .screen{
      padding: 15px 0;
      display: flex;
      flex-direction: row;
    }
    .sec-list{
      font-size: 25px;
      border-right: 1px solid $split_line; /*no*/
      height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex: 1;
      &:last-child{
        border-right: none;
      }
    }
    .arrow{
      $size: 35px;
      width: $size;
      height: $size;
      margin-left: 15px;
      background: url("~@/assets/images/pay/arrow-botton.png") no-repeat center;
      background-size: 25px;
    }
  }
  .notice{
    border-top: 1px solid $split_line;/*no*/
    border-bottom: 1px solid $split_line;/*no*/
    color: #9a9b9c;
    font-size: 22px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: -1px; /*no*/
    &::before{
      content: '共有';
    }
    &::after{
      content: '个游戏符合条件';
    }
  }
</style>
