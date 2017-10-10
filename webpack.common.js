const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './client/src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './client/dist')
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: [/node_modules/], use: [{ loader: 'babel-loader', options: { presets: ['es2015'] } }] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
};
