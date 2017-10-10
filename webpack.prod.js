const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.js')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  plugins: [
    // new webpack.optimize.UglifyJSPlugin(),
    new HtmlWebpackPlugin({ title: 'NeedleDrop Reviews'})
  ]
})
