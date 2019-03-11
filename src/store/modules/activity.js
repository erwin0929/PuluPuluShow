import { getActivity } from '@/api'
export default {
  state: {
    dataList: [],
    params: {
      page: 1,
      pagesize: 10,
      type: 'news'
    },
    currentPage: 1,
    totalCount: 0,
    totalPage: 0,
    model: {}
  },
  mutations: {
    getActivity (state, payload) {
      // state.dataList = payload.dataList
      // state.currentPage = payload.currentPage
      // state.totalCount = payload.totalCount
      // state.totalPage = payload.totalPage
      Object.assign(state, payload)
    },
    getDetail (state, payload) {
      state.model = state.dataList.find(item => item.id == payload.id)
    }
  },
  actions: {
    async getData ({ commit }, obj) {
      let res = await getActivity(obj)
      commit('getActivity', res)
    },
    async getDetail ({ commit }, obj) {
      commit('getDetail', obj)
    }
  }
}
