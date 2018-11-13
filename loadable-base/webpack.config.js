const path = require('path');

module.exports = {
    mode: 'development',
    // JavaScript 执行入口文件
    entry: './main.js',
    // output: {
    //     // 把所有依赖的模块合并输出到一个 bundle.js 文件
    //     filename: 'bundle.js',
    //     // 输出文件都放到 dist 目录下
    //     path: path.resolve(__dirname, './dist')
    // },
    output: {
        filename: "bundle.js",
        libraryTarget: "umd",
        library: "AwesomeComponent",
      },

    module: {
      rules: [{
          // 用正则去匹配要用该 loader 转换的 CSS 文件
          test: /\.css$/,
          use: ['style-loader', 'css-loader?minimize']
        }, {
          test: /\.js$/,
          use: ['babel-loader'],
        }
      ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
        modules: [
          'node_modules'
        ]        
    },
    // 输出 source-map 方便直接调试 ES6 源码
    devtool: 'source-map'
};