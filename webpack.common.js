const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const TIME = new Date().getTime();
const { VERSION_APP, NAME_APP } = process.env;

module.exports = {
  entry: {
    [NAME_APP]: {
      filename: `js/[name].${VERSION_APP}.${TIME}.[contenthash].js`,
      import: [
        path.resolve(__dirname, "./src/index.js"),
        path.resolve(__dirname, "./src/assets/styles/index.scss"),
      ],
    },
  },

  output: {
    chunkFilename: `js/[id].${VERSION_APP}.${TIME}.[contenthash].js`,
    chunkLoadTimeout: 30000,
    clean: true,
    filename: `js/[name].${VERSION_APP}.${TIME}.[contenthash].js`,
    path: path.resolve(__dirname, "public"),
    pathinfo: true,
    publicPath: "/",
    uniqueName: NAME_APP,
  },

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        generator: {
          filename: `assets/images/[name].${VERSION_APP}.${TIME}.[hash][ext][query]`,
        },
        test: /\.(png|jpg|gif|svg)(\?[\s\S]+)?$/,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      cache: true,
      favicon: path.resolve(__dirname, "./src/assets/images/logo.svg"),
      filename: "index.html",
      template: path.resolve(__dirname, "./src/index.ejs"),
      title: NAME_APP,
      version: VERSION_APP,
    }),
  ],

  resolve: { extensions: [".js", ".jsx", ".json"] },
};
