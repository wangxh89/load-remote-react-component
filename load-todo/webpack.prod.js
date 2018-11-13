const webpack           = require('webpack')
const merge             = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const common            = require('./webpack.common.js')
const path              = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode   : 'production',
  devtool: 'source-map',
  module : {
    rules: [
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader,                 
            {
            loader : 'css-loader',// translates CSS into CommonJS
            options: {
                modules: true,
                localIdentName: '[name]__[local]-[hash:base64:5]'
              }
            }, {
                loader: 'postcss-loader'
            },  {
                loader: "less-loader", // compiles Less to CSS
                options: { javascriptEnabled: true }
              }
        ]
      },
      {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,                 
                {
                loader : 'css-loader',// translates CSS into CommonJS
                options: {
                    modules: true,
                    localIdentName: '[name]__[local]-[hash:base64:5]'
                  }
                }
            ]
      } 
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),

    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('production')
    // }),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),  
  ],
  output : {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'rws-360'),
    publicPath: 'http://192.168.2.110:8080/rws-360/'
  }
})