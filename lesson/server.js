const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
// 在node中直接使用webpack
const complier = webpack(config); // 编译器 webpack把config传进去 编译一次 就重新打包一次

const app = express();
app.use(webpackDevMiddleware(complier, {
    // publicPath: config.output.publicPath
}))

app.listen(3000, () => {
    console.log('server is running!');
})