const path              = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack           = require('webpack')

module.exports = {
  entry  : {
    //polyfills: './src/polyfill.js',
    index      : './src/index.js'
  },
  resolve: {
    alias: {
      utils     : path.resolve(__dirname, 'src/utils'),
      components: path.resolve(__dirname, 'src/components')
    }
  },
  module : {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules)/,
        use    : {
          loader: 'babel-loader'
        }
      }, {
        test: /\.(png|jpg|gif)$/,
        use : [
          {
            loader : 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title   : 'Production',
      template: './index.html'
    }),
  ],
  output : {
    filename: '[name].bundle.js',
    path    : path.resolve(__dirname, 'dist')
    // filename: '[name].js',
    // path: path.resolve(__dirname, 'dist', 'rws-360'),
    // publicPath: 'http://192.168.2.110:8080/rws-360/'    
  }
}