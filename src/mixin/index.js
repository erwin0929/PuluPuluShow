// 定义了mixin混入
import Vue from 'vue'
import { mapState } from 'vuex'

export default {
  computed: {
    hasPad () {
      if (this.filedList.length > 1) {
        return 'pad'
      }
    }
  }
}

// 全局mixin
Vue.mixin({
  methods: {
    // 关闭轻提示
    closeToast () {
      this.$toast.clear()
    }
  },
  computed: {
    ...mapState({
      // 登录成功后保存的信息(仅userId,telephone等不会变更的数据)
      userInfo: state => state.user.user
    })
  }
})
