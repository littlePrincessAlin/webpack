const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = (env) => {
  return {
    mode: "development",
    entry: {
      app: "./src/index.js"
    },
    devtool: "inline-source-map",
    // output: {
    //   path: path.resolve(__dirname, "dist"),
    //   filename: "[name].bundle.[contenthash].js",
    // },
    devServer: {
      static: "./dist",
      hot: true,
      // client: false,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Hot Module Replacement",
      }),
      // Plugin for hot module replacement
      // new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
  };
};
