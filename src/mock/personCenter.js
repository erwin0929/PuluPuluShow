import Mock from 'mockjs'

// 发票
Mock.mock(`${process.env.VUE_APP_API_HOST}user/invoicelist`, ({ body }) => {
  return Mock.mock({
    'dataList|10-20': [{
      'id|+1': 1,
      'type|0-1': 1,
      'receiver': '@cname'
    }]
  })
})

// 我的积分
// Mock.mock(`${process.env.VUE_APP_API_HOST}user/historyIntegral`, ({ body }) => {
//   return Mock.mock({
//     'dataList|10-20': [{
//       'userID': 75840,
//       'integral|10-5000': 1,
//       'time|1': [
//         '2018-11-07',
//         '2018-01-03',
//         '2018-12-17',
//         '2018-06-09',
//         '2018-04-05'
//       ]
//     }]
//   })
// })

// 收货地址
// Mock.mock(`${process.env.VUE_APP_API_HOST}user/deliveryaddresslist`, ({ body }) => {
//   return Mock.mock({
//     'dataList|10-20': [{
//       'id|+1': 1,
//       'userID': 75480,
//       'receiver': '@cname',
//       'telephone|1': [
//         '13989876541',
//         '13985656541',
//         '13989565210',
//         '18423425474'
//       ],
//       'area|1': [
//         '上海',
//         '北京',
//         '深圳'
//       ],
//       'address|1': [
//         '你住在哪里',
//         '黄金屋',
//         '桃花源',
//         '上海市静安区永和t路493弄悉尼大厦3楼625室'
//       ],
//       'code|1': [
//         '200031',
//         '223431',
//         '200310',
//         '210310'
//       ]
//     }]
//   })
// })

// 优惠券
// Mock.mock(`${process.env.VUE_APP_API_HOST}user/couponlist`, ({ body }) => {
//   const { type } = JSON.parse(body)
//   return Mock.mock({
//     'dataList|10-20': [{
//       'id|+1': 1,
//       'name|1': [
//         '优惠券1',
//         '优惠券2',
//         '优惠券3',
//         '优惠券4',
//         '优惠券5'
//       ],
//       'type|1-2': 1,
//       used: type,
//       'value|1' () {
//         if (this.type === 1) {
//           return 200
//         } else {
//           return '15%'
//         }
//       },
//       'endTime|1': [
//         '2018.09.01-2018.09.02',
//         '2018.04.23-2018.09.02',
//         '2018.01.11-2018.02.12',
//         '2018.12.09-2018.12.30'
//       ]
//     }]
//   })
// })
