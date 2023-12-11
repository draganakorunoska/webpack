// CommonJS module syntax
// Same as --> import { path } from "path";
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// export { config }
module.exports = {
  entry: {
    app: "./src/index.js",
    styles: "./src/index.scss",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
  ],
  devServer: {
    port: 9000,
    compress: true,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    contentBase: path.join(__dirname, "public"),
  },
};
