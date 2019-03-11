
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // 应用的基本URL
  baseUrl: process.env.VUE_APP_BASEURL,
  // 是否开启eslint保存即检测功能
  lintOnSave: false,
  // build目录
  outputDir: '../wwwroot/m/',
  // 是否生产版本生成sourceMap
  productionSourceMap: false,
  devServer: {
    // 默认域名
    host: '0.0.0.0',
    // 是否编译完后自动打开浏览器
    open: true,
    // 跨域代理配置
    proxy: {
      '/v1': {
        target: 'http://pulupulu.idea-source.net',
        changeOrigin: true
      }
    }
  },
  css: {
    // 是否生成css sourceMap
    sourceMap: true,
    // cssLoader选项
    loaderOptions: {
      sass: {
        // 全局引入scss
        data: `@import "@scss/config.scss";`
      }
    }
  },
  chainWebpack: config => {
    // 为常用目录设置alias
    config.resolve.alias
      .set('@img', resolve('src/assets/images'))
      .set('@scss', resolve('src/assets/scss'))
      .set('@mixin', resolve('src/mixin'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@userManage', resolve('src/views/UserManage'))
  }
}
