const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  externals: 'lodash', // 打包时遇到lodash库 则忽略掉 不要打包到库里面去
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'library.js',
    library: 'library',
    libraryTarget: 'umd' // umd / this / window / global
  }
}