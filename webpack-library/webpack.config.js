const path = require("path");

module.exports = (env) => {
  console.log("Goal: ", env.goal); // 'local'
  console.log("Production: ", env.production); // true
  console.log("process.env: ", process.env); // process.env是ngnix设置的，那么和webpack的env有啥关系？

  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "webpack-numbers.js",
      library: {
        name: "webpackNumbers",
        type: "umd",
      },
    },
  };
};
