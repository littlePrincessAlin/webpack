const path = require("path");

// 插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
//   entry: "./src/index.js",
  entry: {
    // 动态导入
    requireindex: './src/requireindex.js'
    // index: './src/index.js',
    // shared: 'lodash', // 入口依赖提取公共依赖
    // index: {
    //   import: './src/index.js',
    //   dependOn: 'shared',
    // },
    // print: './src/print.js',
    // another: './src/another-module.js',
    // another: {
    //   import: './src/another-module.js',
    //   dependOn: 'shared',
    // }
  },
  output: {
    // filename: 'main.js',
    // filename: "bundle.js",

    // 根据入口起点定义的名称,动态地产生 bundle 名称
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  // optimization: {
  //   // runtimeChunk: 'single',
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
  plugins: [
    new HtmlWebpackPlugin({
      // title: '管理输出',
      title: 'Development',
    }),
  ],
/**
 * 管理输出时，移除了style-loader和css-loader，并移除以下代码module
 */
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"],
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i,
//         type: 'asset/resource', // image在webpack5是有内置的module的
//       },
//       {
//         test: /\.(woff|woff2|eot|ttf|otf)$/i,
//         type: 'asset/resource',
//       },
//     ],
//   },
};
