<!-- 主入口文件 -->
<template>
  <div id="app">
    <!-- 公共头部 -->
    <header-com />

    <!-- 路由出口,所有组件在此处渲染 -->
    <slider-transition>
      <router-view :key="$route.fullPath" />
    </slider-transition>

    <!-- 返回顶部 -->
    <go-top v-show="showGoTop" />

    <!-- 公共底部 -->
    <footer-com v-if="footerStatus" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HeaderCom from '@/components/Header/HeaderCom'
import FooterCom from '@/components/Footer/FooterCom'
import GoTop from '@/components/common/GoTop'
export default {
  name: 'App',
  components: {
    HeaderCom,
    FooterCom,
    GoTop
  },
  data () {
    return {
      // 是否显示回到顶部按钮
      showGoTop: 0
    }
  },
  computed: {
    ...mapState({
      footerStatus: state => state.app.footerStatus
    })
  }
}
</script>

<style lang="scss">
  @import "~@/assets/scss/reset";
  @import "~@/assets/scss/calendar";
  @import "~@/assets/scss/common";
  @import "~@/assets/scss/vant";
  @import "~@/scss/modules/personCenter";
  body{
    font-family: Helvetica,Heiti SC,Arial;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 540px; /*no*/
    min-width: 320px; /*no*/
    min-height: 100%;
    background: #feffff;
    position: relative;
    &.anti-c{
      background: #171916;
      .footer-box{
        color: #cfcfcd;
        a,
        .friend-info,
        .copy-right{
          color: inherit;
        }
      }
      .go-top{
        /* 白色箭头 */
      }
    }
    &.person-center{
      background-color: $module_c;
    }
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
    position: relative;
  }
  html{
    height: 100%;
    // 加载框
    .mint-indicator-text{
      font-size: 25px;
    }
    // 提示框文字大小
    .mint-toast-text{
      font-size: 25px;
    }
    // 输入框文本大小
    .mint-field-core{
      font-size: 25px;
    }

    // 时间选择器样式补丁
    .picker-toolbar{
      height: 75px;
      display: flex;
      align-items: center;
    }
    .mint-datetime-action{
      font-size: 27px;
    }
    .picker-slot{
      font-size: 26px;
    }

    // 地区选择样式补丁
    .picker-item,
    .picker-slot-divider{
      font-size: 30px;
    }

		.mint-actionsheet-listitem,
		.mint-actionsheet-button{
			$h: 85px;
			font-size: 30px;
			height: $h;
			line-height: $h;
		}

    // switch 转换开关样式
    $switch_size: 40px;
    .mint-switch-input:checked + .mint-switch-core{
      border-color: $site_color;
      background: $site_color;
      // 圆球偏移量
      &::after{
        transform: translateX(#{$switch_size * 2.4 - $switch_size - 1});
      }
    }
    // 容器宽高
    .mint-switch-core{
      border-radius: 100px; /*no*/
      width: $switch_size * 2.4;
      height: $switch_size;
      // 一层背景,隐藏
      &::before{
        display: none;
      }
      // 圆球宽高
      &::after{
        border-radius: 50%;
        width: $switch_size;
        height: $switch_size;
        transform: translateX(0px);
      }
    }
    .mint-button-text{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    // 多选框样式
    .mint-checkbox-input:checked + .mint-checkbox-core{
      border-color: $site_color;
      background: $site_color;
      &::after{
        border-color: #000;
      }
    }
    .mint-checkbox-core{
      $size: 40px;
      width: $size;
      height: $size;
      border: 1px solid #ccc; /*no*/
      &::after{
        width: 10px;
        height: 20px;
        left: 13px;
        top: 6px;
      }
    }
    .mint-checkbox-label{
      display: none;
    }
  }
  .swiper-pagination-bullet{
    background: #bfbfbf;
    &.swiper-pagination-bullet-active{
      background: $site_color;
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity $loading_time;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  [class*="-split"]{
    @include split()
  }
</style>
