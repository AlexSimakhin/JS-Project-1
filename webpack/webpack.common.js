const Path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ASSET_PATH = process.env.ASSET_PATH || '';

module.exports = {
  entry: {
    index: Path.resolve(__dirname, "../src/pages/index/scripts/index.js"),
    orders: Path.resolve(__dirname, "../src/pages/orders/scripts/index.js"),
  },
  output: {
    path: Path.join(__dirname, "../build"),
    filename: "js/[name].js",
    publicPath: ASSET_PATH
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      name: false,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: Path.resolve(__dirname, "../public"), to: "." }],
    }),
    new HtmlWebpackPlugin({
      chunks: ["index"],
      filename: "index.html",
      template: Path.resolve(__dirname, "../src/pages/index/index.html"),
    }),
    new HtmlWebpackPlugin({
      chunks: ["orders"],
      filename: "orders.html",
      template: Path.resolve(__dirname, "../src/pages/orders/index.html"),
    }),
  ],
  resolve: {
    alias: {
      "~": Path.resolve(__dirname, "../src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
          },
        },
      },
    ],
  },
};
