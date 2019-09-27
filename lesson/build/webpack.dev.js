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
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            // modules: true
          }
        },
        'postcss-loader',
        'sass-loader'
      ]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].js', 
    chunkFilename: '[name].js', // 被main.js异步加载的间接的文件
  }
}

module.exports = merge(commonConfig, devConfig);