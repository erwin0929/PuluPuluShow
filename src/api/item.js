import service from './api'

const module = 'game/'

// 大分类:获取项目列表
export const getProductList = data => {
  return service({
    url: `${module}projectlist`,
    data
  })
}

// 根据大分类获取类别列表
export const getProductDetail = params => {
  return service({
    url: `${module}projectdetails`,
    params
  })
}

// 三级分类: 游戏类别列表
export const getGameByType = data => {
  return service({
    url: `${module}gamebytype`,
    data
  })
}

// 这个不知道干嘛的
export const gametypelist = data => {
  return service({
    url: `${module}gametypelist`,
    data
  })
}
