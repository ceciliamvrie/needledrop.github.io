const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  devServer: { contentBase: path.join(__dirname, './client/dist'), historyApiFallback: true },
  plugins: [
    // new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i, pngquant: { quality: '70-85' } }),
    // new webpack.optimize.UglifyJsPlugin({ test: /\.jsx?$/, exclude: [/node_modules/] }),
    new HtmlWebpackPlugin({ title: 'NeedleDrop Reviews'})
  ]
})
