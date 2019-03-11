<!-- swiper组件 -->
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- 图片列表 -->
      <div class="swiper-slide" v-for="(item, index) in list" :key="index">
        <router-link :to="item.url">
          <img class="swiper-lazy" :src="item.image" alt="">
        </router-link>
      </div>
    </div>
    <!-- 分页器 -->
    <template v-if="pagination">
      <div class="swiper-pagination"></div>
    </template>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'Swiper',
  props: {
    // 图片数组
    // 必填
    list: {
      required: true,
      type: Array
    },
    // 是否显示分页器
    pagination: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  mounted () {
    new Swiper('.swiper-container', {
      lazy: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>
