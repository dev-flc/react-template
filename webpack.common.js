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
      {
        generator: {
          filename: `assets/fonts/[name].${VERSION_APP}.${TIME}.[hash][ext][query]`,
        },
        test: /\.(ttf|eot|otf)(\?[\s\S]+)?$/,
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

  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      /* assets */
      Fonts: path.resolve(__dirname, "./src/assets/fonts"),
      Images: path.resolve(__dirname, "./src/assets/images"),
      Styles: path.resolve(__dirname, "./src/assets/styles"),
      /* Componets */
      Components: path.resolve(__dirname, "./src/components"),
      /* Containers */
      Containers: path.resolve(__dirname, "./src/containers"),
      /* Hook */
      Hook: path.resolve(__dirname, "./src/hook"),
      /* Routers */
      Routers: path.resolve(__dirname, "./src/routers"),
      /* Store */
      Store: path.resolve(__dirname, "./src/store"),
      Actions: path.resolve(__dirname, "./src/store/actions"),
      Selectors: path.resolve(__dirname, "./src/store/selectors"),
      Reducers: path.resolve(__dirname, "./src/store/reducers"),
      Config: path.resolve(__dirname, "./src/store/config"),
      /* Utils */
      Utils: path.resolve(__dirname, "./src/utils"),
      /* View */
      View: path.resolve(__dirname, "./src/view"),
      /* constants */
      Constants: path.resolve(__dirname, "./src/constants"),
    },
  },
};
