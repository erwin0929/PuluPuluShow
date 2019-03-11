// 个人中心mixin
import {
  mapActions
} from 'vuex'

export default {
  // 用户id
  props: ['userId'],
  methods: {
    ...mapActions('user', [
      // 登出
      'signOut',
      // 根据手机号获取用户信息接口
      'getUserInfo'
    ]),
    ...mapActions('personCenter', [
      // 获取积分
      'getScore',
      // 获取用户所有信息
      'getUserInfo',
      // 修改个人资料
      'modified',
      // 获取二维码
      'getQrCode',
      // 修改密码
      'updatePwd',
      // 获取优惠券
      'invoiceList',
      // 收货地址列表
      'getAddrList',
      'addAddr',
      'deleteAddr',
      // 优惠券
      'getCouponList',
      // 订单
      'getOrderList'
    ])
  }
}
