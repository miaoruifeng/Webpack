const webpack = require('webpack');
const merge = require('webpack-merge'); // 利用第三方模块进行合并
const commonConfig = require('./webpack.common.js');

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8090,
    hot: true,
    // hotOnly: true // 即便hmr不生效 浏览器也不自动刷新  可配可不配
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: { // development环境下配置  production环境下不需用配置
    usedExports: true
  }
}

module.exports = merge(commonConfig, devConfig);