import {
  getProductList,
  gametypelist,
  getGameByType,
  getProductDetail
} from '@/api/item'

export default {
  state: {
  },
  mutations: {
  },
  actions: {
    // 大分类
    async getItemList (context, payLoad) {
      return getProductList(payLoad)
    },
    // 根据大分类获取类别列表
    async getDetail ({ commit }, payLoad) {
      return getProductDetail(payLoad)
    },
    // 三级分类 游戏类别列表
    async getGameByType (context, payLoad) {
      return getGameByType(payLoad)
    },
    // 不知道干嘛的
    async gameTypeList (context, payLoad) {
      return gametypelist(payLoad)
    }
  }
}
