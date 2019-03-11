import service from './api'

const Module = 'user/'

// *** 积分
// 根据userId获取我的积分
export const getScoreByUserId = data => {
  return service({
    url: 'user/historyIntegral',
    data
  })
}

// *** 我的优惠券
export const couponList = data => {
  return service({
    url: `${Module}couponlist`,
    data
  })
}

// *** 发票管理
// 获取发票列表
export const getInvoiceList = data => {
  return service({
    url: `${Module}invoicelist`,
    data
  })
}
