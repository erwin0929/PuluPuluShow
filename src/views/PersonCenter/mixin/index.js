// 个人中心mixin
import {
  mapActions,
  mapState
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
  },
  computed: {
    ...mapState({
      // 登录成功后保存的信息(仅userId,telephone等不会变更的数据)
      userInfo: state => state.user.user
    })
  },
  created () {
    // 此阶段有该方法则执行,该方法用于调用接口获取数据
    if (this.getData) {
      this.getData()
    } else {
      this.closeToast()
    }
  }
}
