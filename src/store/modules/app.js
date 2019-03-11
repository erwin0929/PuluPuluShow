export default {
  state: {
    // 语言环境,可选值: zh(中文), en(英文)
    language: 'zh',
    // 根据变量来控制footer的显示与否
    footerStatus: true
  },
  mutations: {
    setLanguage (state, payLoad) {
      // state.language =
    },
    toShowFooter (state) {
      state.footerStatus = true
    },
    toHideFooter (state) {
      state.footerStatus = false
    }
  },
  actions: {
  }
}
