## 安装环境
```bash
npm init -y
# 国内源下载工具
npm install cnpm -g
# -D 参数 表示开发环境 -dev
cnpm install webpack@4 -D
cnpm install webpack-cli@3 -D
```

## `webpack.config.js`文件
```javascript
module.exports = {
  // development production
  mode: 'development'
}
```

## 实时编译
```bash
cnpm install webpack-dev-server@3 -D
```
> `package.json` -> `scripts`中添加 `"dev": "webpack-dev-server --open --port 3000 --hot --host 127.0.0.1"`
```bash
cnpm install html-webpack-plugin@4 -D
```
> `webpack.config.js`
```javascript
const htmlPlugin = new HtmlWebpackPlugin({
  // 源文件
  template: path.join(__dirname, './src/index.html'),
  // 生成目标文件
  filename: 'index.html'
})
module.exports = {
  plugins: [
    htmlPlugin
  ]
}
```

## 虚拟DOM
```bash
cnpm install react react-dom -D
```


## JSX语法
```bash
cnpm install babel-core babel-loader@7 babel-plugin-transform-runtime -D
cnpm install babel-preset-env babel-preset-stage-0 -D
cnpm install babel-preset-react@6 -D
```
> `.babelrc`文件
```json
{
  "presets": ["env", "stage-0", "react"],
  "plugins": ["transform-runtime"]
}
```
> `webpack.config.js`文件
```javascript
module.exports = {
  module: {
    rules: [
      {test: /\.js$|\.jsx$/, use: 'babel-loader', exclude: /node_modules/}
    ]
  }
}
```

## 配置导入模块时省略后缀
> `webpack.config.js`
```javascript
module.exports = {
  resolve: {
    // 默认补全后缀
    extensions: ['.js', '.jsx', '.json']
  }
}
```

## 路径起别名
> `webpack.config.js`
```javascript
module.exports = {
  resolve: {
    // 起别名
    alias: {
      '@': path.join(__dirname, './src')
    }
  }
}
```

## loader加载css样式文件
```bash
npm install style-loader@1 css-loader@5 -D
```
> `webpack.config.js`
```javascript
module.exports = {
  module: {
    // 配置第三方loader
    rules: [
      {
        /**
         * path 文件路径
         * name 文件名
         * local 选择器名
         * hash 哈希值，最大32位
         */
        test: /\.css$/, use: ['style-loader', {loader: 'css-loader', options: {modules: {localIdentName: '[path][name]-[local]-[hash:5]'}}}]}
    ]
  }
}
```
