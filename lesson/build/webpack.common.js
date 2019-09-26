const path = require('path'); //引入名字叫path的node的核心模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // 两种书写方式
  // entry: './src/index.js', //打包入口文件 
  entry: {
    main: './src/index.js', // 打包多个文件
    // sub: './src/index.js',
  },
  module: {
    rules: [{
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          limit: 20480
        }
      }
    }, {
      test: /\.(eot|woff|ttf|svg)$/,
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'font/'
        }
      }
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  optimization: { // 同步代码分割需要配置该参数
    usedExports: true, // tree shaking
    splitChunks: {
      chunks: 'all', //默认async - webpack默认只对异步代码分割打包  all / initial / async  结合cacheGroups一起用
    }
  },
  output: {
    // publicPath: 'http://cdn.com.cn', // 打包的静态资源存放目录
    filename: '[name].js', 
    chunkFilename: '[name].chunk.js', // 被main.js异步加载的间接的文件
    // 调用path模块的resolve方法，__dirname变量实际指的就是webpack.config.js所在的当前目录的路径
    // 然后与dist结合 生成的路径就是bundle的绝对路径
    // 如果是dist目录 则path不写也可以 默认会打包到dist目录下
    path: path.resolve(__dirname, '../dist') //必须是绝对路径
  }
}