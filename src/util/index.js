// 公共函数

// 字符串首字母转小写
export function first2Lower(str) {
  let strArr = str.split('')
  strArr[0] = strArr[0].toLowerCase()
  return strArr.join('')
}

// 由于部分图片资源非后台控制,所以采用动态引入,
// 将引入的资源存放到数组里,再去循环读取
export function requireImgList (filename, length = 3) {
  return Array.from({ length }, (item, index) => {
    return {
      imgSrc: require(`@/assets/images/${filename}1.jpg`)
    }
  })
}

// 日期格式化
export const dateFormat = (date, split = '-') => {
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  let d = date.getDate()
  if (m < 10) {
    m = `0${m}`
  }
  if (d < 10) {
    d = `0${d}`
  }
  return `${y + split + m + split + d}`
}

// 获取半年前的日期对象
export const beforeHalfYear = () => new Date(+new Date() - 365 / 2 * 24 * 3600 * 1000)
