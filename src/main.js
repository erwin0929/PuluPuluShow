/*
 * @Author: Erwin
 * @Date: 2018-10-03 20:25:09
 * @Last Modified by: Erwin
 * @Last Modified time: 2018-10-19 16:48:30
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 导入vue
import Vue from 'vue'
// 路由组件
import VueRouter from 'vue-router'
// 动态修改html font-size属性
import 'lib-flexible/flexible'
// 入口文件
import App from './App'
// 路由配置
import routes from './router'
// vuex配置
import store from './store'
import './mixin'
// 自定义指令
import './directive'
// swiper样式
import 'swiper/dist/css/swiper.css'
// 全局配置
import Global from './global'
// 多语言配置
import i18n from './lang'
// 滚动插件
import VueScroller from 'vue-scroller'
import {
  Toast,
  Swipe,
  SwipeItem,
  Field,
  CellGroup,
  Lazyload,
  Picker,
  DatetimePicker,
  Popup,
  Area
} from 'vant'

Vue.config.productionTip = false
Vue
  .use(VueRouter)
  .use(VueScroller)
  .use(Swipe)
  .use(DatetimePicker)
  .use(SwipeItem)
  .use(Popup)
  .use(Area)
  .use(Picker)
  .use(Field)
  .use(CellGroup)
  .use(Lazyload, {
    loading: require('@img/loading/timg.gif'),
    error: require('@img/loading/error.jpg')
  })

Toast.setDefaultOptions({
  forbidClick: true,
  duration: 0
})

// 使用webpack附带的require来调用所有components目录下的vue文件,实现去中心化管理,免去引入和注册的步骤
const requireComponent = require.context(
  '@/components/',
  false,
  /\.vue$/
)

requireComponent.keys().map(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)
  const componentName = fileName.replace(/^\.\//, '').replace(/\.vue/, '')

  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})

// 原型链注入,供全局使用
Vue.prototype.$Global = Global

const router = new VueRouter({
  // 需要后端支持,暂且不使用
  // mode: 'history',
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

// 前置守卫,初始化页面效果的操作都在这里
router.beforeEach((to, from, next) => {
  const { meta, path, matched } = to
  // 加载动画开启
  var { auth = true } = meta
  var isLogin = Boolean(store.state.user.phone) // true用户已登录， false用户未登录
  // console.log('isLogin:'+isLogin+',,,auth:'+auth+',,,path:'+path)

  if (!auth && !isLogin && path !== '/login') {
    return next({ path: '/login' })
  }
  // 只有6大导航的首页才显示footer
  // 这里的操作简直不能看,太low了,先暂时这么写吧T.T
  let funName = meta.isIndex ? 'Show' : 'Hide'
  store.commit(`app/to${funName}Footer`)
  // 设置背景变为反色(2个页面)
  let action = meta.isAnti ? 'add' : 'remove'
  document.body.classList[action]('anti-c')
  // 设置个人中心的背景色
  action = matched[0].name === 'PersonCenter' ? 'add' : 'remove'
  document.body.classList[action]('person-center')
  next()
})

// 后置守卫
router.afterEach(({ meta }) => {
  // 修改标题
  document.title = `${process.env.VUE_APP_TITLE} | ${meta.title}`
  // setTimeout(() => Toast.clear(), 300)
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
