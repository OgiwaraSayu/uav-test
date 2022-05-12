// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false
// })

module.exports = {
  publicPath: '/',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/socket': {
        // 配置跨域信息,
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/socket': ''
        }
      }
    }
  }
}