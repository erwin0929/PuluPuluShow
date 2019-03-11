// 个人中心mixin

import { createNamespacedHelpers } from 'vuex'
import store from '@/store'

const module = 'personCenter'
const {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} = createNamespacedHelpers(module)
const { _actions } = store

// 自动化将action导入到实例中
// 获取当前模块的所有action字符,由于其包含了命名空间,所以截取/之后的字符,最终导入到methods中
// 以此避免新增一个actions都要手动导入
let actions = Object.keys(_actions).filter(item => item.includes(module))
actions = actions.map(item => {
  let arr = item.split('/')
  return arr[arr.length - 1]
})

export default {
  computed: {
    ...mapState({
      startTime: state => state.startTime,
      endTime: state => state.endTime
    }),
    ...mapGetters([
      'formatStartTime',
      'formatEndTime'
    ])
  },
  methods: {
    ...mapMutations([
      'setOrderParams',
      'setDate'
    ]),
    ...mapActions(actions)
  }
}
