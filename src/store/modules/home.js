import * as home from '@/api/home'

// 首页
export default {
  state: {
  },
  mutations: {
  },
  actions: {
    // 获取轮播图
    async getSlider (context, payLoad) {
      return home.getSlider(payLoad)
    }
  }
}
