const path = require("path");

module.exports = (env) => {
  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: '[name].bundle.[contenthash].js',
    },
  };
};
