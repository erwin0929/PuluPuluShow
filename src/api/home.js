import service from './api'

// 轮播图
export const getSlider = data => {
  return service({
    url: 'slide/getlist',
    data: {
      StoreID: 6,
      ...data
    }
  })
}