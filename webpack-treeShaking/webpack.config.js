const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // mode: "development",
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    usedExports: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "摇树",
    }),
  ],
};
