// 购物车
import service from '@/api/api'

export default {
  state: {
  },
  mutations: {},
  actions: {
    // 获取购物车列表
    async getCartList (context, params) {
      return service({
        url: 'shopingcart/getlist',
        method: 'get',
        params
      })
    }
  }
}