const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
  // 源文件
  template: path.join(__dirname, './src/index.html'),
  // 生成目标文件
  filename: 'index.html'
})

module.exports = {
  // development production
  mode: 'development',
  plugins: [
    htmlPlugin
  ],
  module: {
    // 配置第三方loader
    rules: [
      {test: /\.js$|\.jsx$/, use: 'babel-loader', exclude: /node_modules/},
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.(ttf|woff|woff2|eot|svg)$/, 'use': 'url-loader'},
      {test: /\.scss$/, use: ['style-loader', {loader: 'css-loader', options: {modules: {localIdentName: '[path][name]-[local]-[hash:5]'}}}]}
    ]
  },
  resolve: {
    // 默认补全后缀
    extensions: ['.js', '.jsx', '.json'],
    // 起别名
    alias: {
      '@': path.join(__dirname, './src')
    }
  }
}
