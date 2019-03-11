import service from './api'

// 获取活动信息
export const getActivity = data => {
  return service({
    url: 'news/newslist',
    data
  })
}
