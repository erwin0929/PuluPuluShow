import i18n from '@/lang'
export const NavRoute = [
  // *** 首页 ***
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home/Index'),
    meta: {
      title: i18n.t('nav.home'),
      isIndex: true,
      lang: 'home',
      index: 1
    }
  },
  // *** 活动页 ***
  {
    path: '/active',
    component: () => import('@views/Activity/Layout'),
    children: [
      {
        // 当前活动列表(默认页))
        path: 'curAct',
        name: 'CurAct',
        component: () => import('@/views/Activity/CurAct'),
        meta: {
          title: i18n.t('nav.active'),
          isIndex: true,
          lang: 'active',
          index: 5
        }
      },
      {
        // 活动详情
        path: 'actDetail',
        name: 'ActDetail',
        component: () => import('@/views/Activity/Detail'),
        meta: {
          title: '活动详情',
          isAnti: true
        }
      }
    ]
  },
  // *** 关于 ***
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About/Index'),
    meta: {
      title: i18n.t('nav.about'),
      isIndex: true,
      isAnti: true,
      lang: 'about',
      index: 2
    }
  },
  // *** 合作 ***
  {
    path: '/coop',
    component: () => import('@views/Cooperation/Layout'),
    children: [
      // 合作默认页
      {
        path: 'coopIndex',
        name: 'Cooperation',
        component: () => import('@/views/Cooperation/children/Index'),
        meta: {
          title: i18n.t('nav.cooperation'),
          isIndex: true,
          lang: 'cooperation',
          index: 6
        },
      },
      // 工作机会
      {
        path: 'staff/:id',
        name: 'Staff',
        props: true,
        component: () => import('@/views/Cooperation/children/Staff'),
        meta: { title: '工作机会' }
      }
    ]
  },
  // *** 购票 ***
  {
    path: '/ticket',
    component: () => import('@views/Ticket/Layout'),
    children: [
      // 购票主页(默认页)
      {
        path: 'buyTicket',
        name: 'BuyTicket',
        component: () => import('@/views/Ticket/children/BuyTicket'),
        meta: {
          title: i18n.t('nav.ticket'),
          isIndex: true,
          lang: 'ticket',
          index: 4
        }
      },
      // 付款成功
      {
        path: 'pay',
        name: 'Pay',
        component: () => import('@/views/Ticket/children/Pay'),
        meta: { title: '付款成功' }
      },
      // 选场次
      {
        path: 'chooseShows',
        name: 'ChooseShows',
        component: () => import('@/views/Ticket/children/ChooseShows'),
        meta: { title: '选择场次' }
      },
      // 选票和增值服务
      {
        path: 'buyInfo',
        name: 'BuyInfo',
        component: () => import('@/views/Ticket/children/BuyInfo'),
        meta: { title: '增值服务' }
      }
    ]
  },
  // *** 项目 ***
  // 默认页,选择游戏大类
  {
    path: '/item',
    component: () => import('@views/Item/Layout'),
    children: [
      {
        path: 'itemIndex',
        name: 'ItemIndex',
        component: () => import('@views/Item/children/Index'),
        meta: {
          title: i18n.t('nav.item'),
          isIndex: true,
          lang: 'item',
          index: 3
        }
      },
      // 二级分类,选择游戏分类
      {
        path: 'gameKind/:projectid(\\d+)',
        name: 'GameKind',
        props: true,
        component: () => import('@/views/Item/children/GameKind'),
        meta: {
          title: '游戏分类'
        }
      },
      // 三级分类,选择游戏(游戏列表)
      {
        path: 'gameList/:type(\\d+)',
        name: 'GameList',
        props: true,
        component: () => import('@/views/Item/children/GameList'),
        meta: {
          title: '游戏列表'
        }
      },
      // 订单详情
      {
        path: 'orderDetail',
        name: 'OrderDetail',
        component: () => import('@/views/Item/children/OrderDetail'),
        meta: { title: '订单详情' }
      },
      // 申请次卡年卡
      {
        path: 'applyCard',
        name: 'ApplyCard',
        component: () => import('@/views/Item/children/ApplyCard'),
        meta: { title: 'xxx游戏名称' }
      },
      // 照片列表
      {
        path: 'photoList',
        name: 'PhotoList',
        component: () => import('@/views/Item/children/PhotoList'),
        meta: { title: '照片列表' }
      }
    ]
  }
]

const OtherRoute = [
  // *** 账号管理 ***
  {
    path: '/userManage',
    component: () => import('@userManage/Layout'),
    redirect: { name: 'Login' },
    children: [
      {
        // 登录页
        path: 'login',
        name: 'Login',
        component: () => import('@userManage/Login'),
        meta: { title: '登录' }
      },
      {
        // 注册页
        path: 'register',
        name: 'Register',
        component: () => import('@userManage/Register'),
        meta: { title: '注册' }
      },
      {
        // 找回密码页
        path: 'findPwd',
        name: 'Findpwd',
        component: () => import('@userManage/FindPwd'),
        meta: { title: '找回密码' }
      }
    ]
  },
  // *** 个人中心 ***
  {
    path: '/personCenter',
    redirect: { name: 'PersonCenterIndex' },
    name: 'PersonCenter',
    meta: {},
    component: () => import('@views/PersonCenter/Layout'),
    children: [
      // 默认页
      {
        path: 'index',
        name: 'PersonCenterIndex',
        component: () => import('@/views/PersonCenter/home/Index'),
        meta: {
          title: i18n.t('personCenter.title')
        }
      },
      // 二维码页
      {
        path: 'qrCode',
        name: 'QRCode',
        component: () => import('@/views/PersonCenter/home/QRCode'),
        meta: {
          title: '我的二维码'
        }
      },
      // 修改个人资料
      {
        path: 'updateInfo',
        name: 'UpdateInfo',
        component: () => import('@/views/PersonCenter/home/UpdateInfo'),
        meta: {
          title: '个人资料'
        }
      },
      // 我的积分
      {
        path: 'myScore',
        name: 'MyScore',
        component: () => import('@/views/PersonCenter/myScore/Index'),
        meta: {
          title: '我的积分'
        }
      },
      // 设置时间
      {
        path: 'setTime',
        name: 'SetTime',
        component: () => import('@/views/PersonCenter/myScore/SetTime'),
        meta: {
          title: '设置时间'
        }
      },
      // 修改密码
      {
        path: 'updatePwd',
        name: 'UpdatePwd',
        component: () => import('@/views/PersonCenter/accountManage/UpdatePwd'),
        meta: {
          title: '修改密码'
        }
      },
      // 收货地址管理
      {
        path: 'addrManage',
        name: 'AddrManage',
        component: () => import('@/views/PersonCenter/address/AddrManage'),
        meta: {
          title: '收货地址管理'
        }
      },
      // 新增收货地址
      {
        path: 'addNewAddr',
        name: 'AddNewAddr',
        component: () => import('@/views/PersonCenter/address/AddNewAddr'),
        meta: {
          title: '新增收货地址'
        }
      },
      // 发票管理
      {
        path: 'invoiceManage',
        name: 'InvoiceManage',
        component: () => import('@/views/PersonCenter/Invoice/Manage'),
        meta: {
          title: '发票管理'
        }
      },
      // 添加发票
      {
        path: 'addInvoice',
        name: 'AddInvoice',
        component: () => import('@/views/PersonCenter/Invoice/AddInvoice'),
        meta: {
          title: '添加发票'
        }
      },
      // 优惠券列表
      {
        path: 'couponList',
        name: 'CouponList',
        props: true,
        component: () => import('@/views/PersonCenter/coupon/List'),
        meta: {
          title: '优惠券列表'
        }
      },
      // 我的订单(订单列表)
      {
        path: 'myOrder',
        name: 'MyOrder',
        component: () => import('@/views/PersonCenter/myOrder/MyOrder'),
        meta: {
          title: '个人中心'
        }
      },
      // 订单详情
      {
        path: 'goodsDetail',
        name: 'GoodsDetail',
        component: () => import('@/views/PersonCenter/myOrder/GoodsDetail'),
        meta: {
          title: '商品详情'
        }
      },
      // 订单详情(多商品)
      {
        path: 'multipleGoodsOrder',
        name: 'MultipleGoodsOrder',
        component: () => import('@/views/PersonCenter/myOrder/MultipleGoodsOrder'),
        meta: {
          title: '多商品详情'
        }
      },
      // 待收货,待发货
      {
        path: 'goodsAwait/:module',
        name: 'GoodsAwait',
        props: true,
        component: () => import('@/views/PersonCenter/myOrder/GoodsAwait'),
        meta: {
          title: '订单管理'
        }
      },
      // 提交退款申请
      {
        path: 'refundApply',
        name: 'RefundApply',
        component: () => import('@/views/PersonCenter/myOrder/RefundApply'),
        meta: {
          title: '退款须知'
        }
      },
      // 申请反馈页,成功或失败
      {
        path: 'applyFeedback',
        name: 'ApplyFeedback',
        component: () => import('@/views/PersonCenter/myOrder/ApplyFeedback'),
        meta: {
          title: '申请成功或失败'
        }
      }
    ]
  },
  // 详情页,该页面需承担2个模块,故采取动态参数的方式来判断是哪个页面
  {
    path: '/detail/:module',
    name: 'AnyDetail',
    component: () => import('@/views/Detail/Index'),
    meta: { title: '详情页' },
    props: true
  },
  // *** 购物车 ***
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/Cart/Index'),
    meta: { title: i18n.t('cart.title') }
  },
  // 搜索页
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/Search/Index'),
    meta: { title: i18n.t('search.title') }
  },
  // 未知路径都重定向至首页
  {
    path: '*',
    redirect: '/home'
  }
]

const TestRoute = [
  {
    path: '/Test',
    name: 'Test',
    component: () => import('@views/Test/Index'),
    meta: {
      title: '测试页'
    }
  }
]

export default [...NavRoute, ...OtherRoute, ...TestRoute]
