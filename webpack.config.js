const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin              = require('copy-webpack-plugin');

let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}
const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html",
  }),
  new HtmlWebpackPlugin({
    template: "./src/login.html",
    filename: "./login.html",
  }),
  new HtmlWebpackPlugin({
    template: "./src/home-cliente.html",
    filename: "./home-cliente.html",
  }),
  new MiniCssExtractPlugin({
    filename: '[name].css',
    ignoreOrder: false
}),
new CopyPlugin([
    { from: 'src/assets', to: 'assets/' },
]),
];
module.exports = {
  mode: mode,
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
  },
  optimization: {
    minimizer: [ new OptimizeCssAssetsPlugin() ]
},
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,

            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,

        type: "asset",

      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {

          loader: "babel-loader",
          options: {

            cacheDirectory: true,
          },
        },
      },
    ],
  },
  target: target,
  plugins:plugins,
  devtool: "source-map",

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devServer: {
    contentBase: "./dist",
    hot: true,
  }, 
};
