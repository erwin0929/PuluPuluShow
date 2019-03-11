<!-- 首页头部,组件 -->
<template>
  <section class="header-page">
    <!-- 顶部左右2侧 -->
    <header class="header-box">
      <div class="header">
        <!-- 登录按钮 -->
        <div class="sign-in" @click="userCallBack">
          <i class="sign"></i>
          <span class="log-txt" v-if="!userInfo">
            {{$t('userManage.loginBtn')}}
          </span>
        </div>

        <!-- 搜索页和购物车 -->
        <div class="car">
          <router-link :to="{name: 'Search'}">
            <img src="@img/header/search.png" alt="">
          </router-link>
          <router-link :to="{name: 'Cart'}">
            <img src="@img/home/icon_cart.png" alt="">
          </router-link>
        </div>
      </div>
    </header>

    <!-- 导航链接 -->
    <section>
      <nav class="nav-box" v-fix-nav="{fixedNav, cancelFixed}" :class="{scrolling}">
        <template v-for="item in getRoutes">
          <router-link class="link" :to="{name: item.name}" :key="item.name">
            <!-- 标题 -->
            <span class="txt" :class="{'is-new': item.hightLight}">{{item.meta.title}}</span>
          </router-link>
        </template>
      </nav>
      <!-- 为了撑起导航的高度, 真是抱歉你只能做个默默无闻的配角 -->
      <div :class="{'up-nav': scrolling}"></div>
    </section>
  </section>
</template>

<script>
import { NavRoute } from '@/router'
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  data () {
    return {
      // 往下滚动时,固定导航栏
      scrolling: false
    }
  },
  methods: {
    // 左上角的按钮,根据登录与否链接去向也不同
    userCallBack () {
      let link = this.userInfo ? 'PersonCenter' : 'Login'
      this.$router.push({ name: link })
    },
    // 固定导航
    fixedNav () {
      this.scrolling = true
    },
    // 取消固定
    cancelFixed () {
      this.scrolling = false
    }
  },
  computed: {
    ...mapState({
      // 保存了用户登录信息
      userInfo: state => state.user.user
    }),
    getRoutes () {
      let routes = NavRoute.map(item => {
        // 若没有meta,则取出子路由
        if (!item.meta) {
          item = item.children[0]
        }
        // 为项目链接添加高亮
        item.name.includes('Item') ? item.hightLight = true : false
        return item
      })
      // 根据index排序
      return routes.sort(({meta: {index: index1}}, {meta: {index: index2}}) => index1 - index2)
    }
  }
}
</script>

<style scoped lang="scss">
  $fz: 27px;
  .header-page{
    background: $site_color;
  }
  .header-box{
    padding: 0 $side_pad;
    .header{
      border-bottom: 1px solid #cab524; /*no*/
      height: $header_h;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .logo{
    width: 160px;
  }
  $side_width: 150px;
  .sign-in{
    width: $side_width;
    display: flex;
    align-items: center;
    .sign{
      width: 40px;
      height: 35px;
      background: url("~@img/home/icon_people.png") no-repeat center;
      background-size: contain;
      margin-right: 15px;
    }
    .log-txt{
      font-size: $fz;
    }
  }
  .car{
    width: $side_width;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    img{
      width: 45px;
      margin-left: 35px;
    }
  }
  .nav-box {
    $icon_list: about, item, buy-ticket, activity, cooper;
    width: 100%;
    height: $navHeight;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: -1px; /*no*/
    z-index: 9;
    &.scrolling {
      height: $navFixHeight;
      background: $site_color;
      margin-top: 0;
      position: fixed;
      left: 0;
      top: 0;
      .icon-i{
        display: none;
      }
    }
    $size: 45px;
    $i: 0;
    @each $item in $icon_list{
      .#{$item}{
        border-radius: 50%;
        width: $size;
        height: $size;
        margin: 5px 0 4px;
        background: #000 url("~@img/home/icon_group.png") no-repeat left #{$i * (-$size)};
        background-size: $size ;
      }
      $i: $i + 1;
    }

    .tabbar {
      background: $site_color;
    }
    .mint-tabbar {
      position: static;
    }
    // 导航的高度
    .link {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      text-align: center;
      .txt{
        font-size: $fz;
        position: relative;
        &.is-new{
          &::after{
            font-size: 15px;
            color: $site_color;
            border-radius: 3px; /*no*/
            content: 'NEW';
            padding: 0 5px;
            position: absolute;
            left: 35px;
            top: -20px;
            background: #e9524f;
          }
        }
      }
    }
    .router-link-active {
      color: $site_color;
      background: #000;
    }
  }
  // 撑起导航的元素。
  .up-nav{
    height: $navFixHeight;
  }
</style>
