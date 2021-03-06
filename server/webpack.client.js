const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

config = {
  //Root file
  entry: "./src/client/client.js",

  //output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};

module.exports = merge(baseConfig, config);
