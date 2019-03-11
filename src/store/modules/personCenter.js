import * as personCenter from '@/api/personCenter'
import '@/mock/personCenter'
import service from '@/api/api'
import { dateFormat, beforeHalfYear } from '@/util'

// 个人中心store
export default {
  state: {
    // 页面背景色
    bgColor: '#f5f5f5',
    // 积分页设置开始时间(默认为半年前,包装对象)
    startTime: beforeHalfYear(),
    // 终止时间
    endTime: new Date(),
    // 订单查询参数
    params: {
      KeyWords: '随便传123',
      // 4种状态unpaid, paid, overdue, cancel
      status: 'all',
      page: 1,
      pagesize: 2
    }
  },
  getters: {
    // 格式化后的开始日期(字符串)
    formatStartTime: state => dateFormat(state.startTime),
    // 格式化后结束日期
    formatEndTime: state => dateFormat(state.endTime)
  },
  mutations: {
    // 设置开始或终止时间
    setDate (state, { type, value }) {
      state[`${type}Time`] = value
    },
    // 设置订单筛选选中的值
    setOrderParams (state, payload) {
      state.params.status = payload
    }
  },
  actions: {
    // 个人中心用户信息(根据手机号获取)
    async getUserInfo ({ commit }, params) {
      return service({
        url: 'user/telephone',
        params
      })
    },
    // 根据userId获取二维码
    async getQrCode (context, params) {
      return service({
        url: 'user/qrcode',
        params
      })
    },
    // 获取积分
    async getScore (context, payLoad) {
      return personCenter.getScoreByUserId(payLoad)
    },
    // 修改密码(登录后,个人中心修改密码使用)
    async updatePwd (context, data) {
      return service({
        url: 'user/changepassword',
        data
      })
    },
    // 修改个人资料
    async modified (context, data) {
      return service({
        url: 'user/modified',
        data
      })
    },
    // 获取发票列表
    async invoiceList (context, data) {
      return service({
        url: 'user/invoicelist',
        data
      })
    },
    // 获取收货地址列表
    async getAddrList (context, data) {
      return service({
        url: 'user/deliveryaddresslist',
        data
      })
    },
    // 添加
    async addAddr (context, data) {
      return service({
        url: 'user/createdeliveryaddress',
        data
      })
    },
    // 删除
    async deleteAddr (context, data) {
      return service({
        url: 'user/deletedeliveryaddress',
        data
      })
    },
    // 优惠券
    async getCouponList (context, payLoad) {
      return personCenter.couponList(payLoad)
    },
    // 订单管理
    async getOrderList (context, data) {
      return service({
        url: 'order/history',
        data
      })
    }
  }
}
