// 购物车
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('cart', [
      // 列表
      'getCartList'
    ])
  }
}
