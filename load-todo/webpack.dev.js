const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]___[hash:base64:5]"
            }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "less-loader", // compiles Less to CSS
            options: { javascriptEnabled: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]"
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    host: "localhost",
    port: "9676"
    // 请求带 api 的自动转发到 8987 端口
    // proxy: {
    //     '/api/*': {
    //         target: 'http://localhost:8987'
    //     }
    // }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
