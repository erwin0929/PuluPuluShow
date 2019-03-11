// 项目mixin
import {
  mapActions,
  mapState
} from 'vuex'

export default {
  methods: {
    ...mapActions('item', [
      'getItemList',
      'gameTypeList',
      'getGameByType',
      'getDetail'
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
