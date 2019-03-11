<!-- 首页 -->
<template>
  <!-- 主体内容 -->
  <main>
    <!-- 幻灯片 -->
    <section>
      <van-swipe :loop="false">
        <van-swipe-item v-for="(item, index) in swiperList" :key="index">
          <a :href="item.url">
            <img v-lazy="item.image">
          </a>
        </van-swipe-item>
      </van-swipe>
    </section>

    <!-- 关于PuluPulu -->
    <section class="show-split">
      <title-com v-bind="pinpai"></title-com>
      <div class="text-box">
        <p>
          Pulupulu是一个倡导年轻人好玩生活方式的潮流娱乐文化品牌。
          作为新鲜潮流生活方式的传播者，Pulupulu致力于为年轻人快乐的互动交流提供解决方案。Pulupulu不断坚持创新，通过新理念、新科技、新场景，为年轻人带来真正好玩的产品和互动体验。
        </p>
      </div>
    </section>

    <!-- 火爆项目 -->
    <section>
      <title-com v-bind="itemCase"></title-com>
      <item-list />
    </section>

    <!-- 热门购票 -->
    <section class="show-split">
      <!-- 标题 -->
      <title-com v-bind="buy"></title-com>
      <!-- 游戏票列表 -->
      <div>
        <ticket-list
            v-for="(items, index) in ticket"
            :key="index"
            :item="items"
            url="AnyDetail"
            module="gameDetail" />
      </div>
    </section>

    <!-- 最新活动 -->
    <section>
      <!-- 标题 -->
      <title-com v-bind="newActivity"></title-com>
      <!-- banner图 -->
      <div>
        <router-link :to="{name: 'ActDetail'}"><img src="@img/home/newActiveBanner.jpeg"></router-link>
      </div>
    </section>
  </main>
</template>

<script>
import TitleCom from '@views/Home/components/TitleCom'
import TicketList from '@views/Ticket/components/TicketList'
import ItemList from '@views/Item/components/ItemList'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      aaa: require('@img/item/banner.jpg'),
      // 轮播图数据
      swiperList: [],
      searchValue: '',
      pinpai: {
        title: this.$t('home.aboutUs'),
        url: {name: 'About'},
        className: 'intro'
      },
      itemCase: {
        title: this.$t('home.hotItem'),
        url: {name: 'ItemIndex'},
        className: 'item-case'
      },
      buy: {
        title: this.$t('home.hotTicket'),
        url: {name: 'BuyTicket'},
        className: 'buy'
      },
      newActivity: {
        title: this.$t('home.lastestActive'),
        url: {name: 'CurAct'},
        className: 'activity'
      },
      gameTicketList: [
        {
          id: 1,
          url: 'AnyDetail',
          params: 'module'
        },
        {
          id: 2,
          url: 'AnyDetail',
          params: 'module'
        },
        {
          id: 3,
          url: 'AnyDetail',
          params: 'module'
        }
      ],
      params: {
        page: 1,
        pagesize: 10
      }
    }
  },
  components: {
    TitleCom,
    TicketList,
    ItemList
  },
  methods: {
    ...mapActions('home', [
      'getSlider'
    ]),
    // 登录回调
    login () {
      this.$router.push({ name: 'Login' })
    },
    async init () {
      const { dataList } = await this.getSlider(this.params)
      this.swiperList = dataList
      this.closeToast()
    }
  },
  computed: {
    ...mapState({
      ticket: state => state.ticket.ticketList
    })
  },
  created () {
    // this.init()
  }
}
</script>

<style scoped lang="scss">
  .text-box{
    padding: 0 $side_pad;
    p{
      color: #707172;
      border-top: 1px solid $split_line; /*no*/
      font-size: 24px;
      padding: 15px 10px 15px 35px;
      line-height: 1.4;
    }
  }
  .nav-box{
    padding: 0 $side_pad;
  }
  .slider-box{
    height: 460px;
    position: relative;
  }
  .search-box{
    width: 590px;
    border-radius: 50px;
    height: 50px;
    padding-left: 15px;
    position: absolute;
    left: 50%;
    top: 15px;
    transform: translate3d(-50%, 0, 0);
    background: rgba(255, 255, 255, 0.8);
    z-index: 9;
    display: flex;
    align-items: center;
    .fdj{
      width: 40px;
    }
    input{
      font-size: 23px;
      padding: 5px 15px;
      height: 100%;
      flex: 1;
      background: rgba(255, 255, 255, 0);
    }
  }
  .search-icon{
    width: 20px;
  }
</style>

<style lang="scss">
  .mint-spinner-triple-bounce{
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
  .mint-cell-value{
    font-size: 20px;
  }
  .mint-field-core{
    background: rgba(255, 255, 255, 0);
  }
</style>
