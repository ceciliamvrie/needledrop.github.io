const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ImageminPlugin = require('imagemin-webpack-plugin').default

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
  devServer: { contentBase: path.join(__dirname, './client/dist'), historyApiFallback: true },
  plugins: [
    // new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i, pngquant: { quality: '70-85' } }),
    // new webpack.optimize.UglifyJsPlugin({ test: /\.jsx?$/, exclude: [/node_modules/] }),
    new HtmlWebpackPlugin({ title: 'NeedleDrop Reviews'})
  ]
};
