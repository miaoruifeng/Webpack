const path = require('path'); //引入名字叫path的node的核心模块

module.exports = {
    mode: 'production', // production or development
    // entry: './src/index.js', //打包入口文件 
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'main.js', //打包文件存放目录
        // 调用path模块的resolve方法，__dirname变量实际指的就是webpack.config.js所在的当前目录的路径
        // 然后与dist结合 生成的路径就是bundle的绝对路径
        // 如果是dist目录 则path不写也可以 默认会打包到dist目录下
        path: path.resolve(__dirname, 'dist') //必须是绝对路径
    }
}