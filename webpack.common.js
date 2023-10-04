const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackBar = require('webpackbar')
const Dotenv = require('dotenv-webpack')

const TIME = new Date().getTime()
const { VERSION_APP, NAME_APP } = process.env
const SRC_DIR = path.resolve(__dirname, './src')

function rulesJS() {
  return {
    exclude: [path.resolve(__dirname, 'node_modules')],
    include: [path.resolve(__dirname, 'src')],
    test: /\.[jt]sx?$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  }
}

function rulesCSS() {
  return {
    test: /\.(sass|css|scss)$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  }
}

function rulesASSETS() {
  return [
    {
      generator: {
        filename: `assets/images/[name].${VERSION_APP}.${TIME}.[hash][ext][query]`
      },
      test: /\.(png|jpg|gif|svg)(\?[\s\S]+)?$/,
      type: 'asset/resource'
    },
    {
      generator: {
        filename: `assets/fonts/[name].${VERSION_APP}.${TIME}.[hash][ext][query]`
      },
      test: /\.(ttf|eot|otf|woff2|woff)(\?[\s\S]+)?$/,
      type: 'asset/resource'
    }
  ]
}

const output = {
  chunkFilename: `js/[id].${VERSION_APP}.${TIME}.[contenthash].js`,
  chunkLoadTimeout: 30000,
  clean: true,
  filename: `js/[name].${VERSION_APP}.${TIME}.[contenthash].js`,
  path: path.resolve(__dirname, 'public'),
  pathinfo: true,
  publicPath: '/',
  uniqueName: NAME_APP
}

function createAlias(name, relativePath) {
  return {
    [name]: path.resolve(SRC_DIR, relativePath)
  }
}

const alias = {
  ...createAlias('Actions', './store/actions'),
  ...createAlias('Components', './components'),
  ...createAlias('Config', './store/config'),
  ...createAlias('Constants', './constants'),
  ...createAlias('Containers', './containers'),
  ...createAlias('Fonts', './assets/fonts'),
  ...createAlias('Hook', './hook'),
  ...createAlias('Images', './assets/images'),
  ...createAlias('Reducers', './store/reducers'),
  ...createAlias('Routers', './routers'),
  ...createAlias('Selectors', './store/selectors'),
  ...createAlias('Store', './store'),
  ...createAlias('Styles', './assets/styles'),
  ...createAlias('Utils', './utils'),
  ...createAlias('View', './view')
}

module.exports = {
  entry: {
    [NAME_APP]: {
      import: [
        path.resolve(__dirname, './src/index.js'),
        path.resolve(__dirname, './src/assets/styles/index.scss')
      ]
    }
  },

  module: { rules: [rulesJS(), rulesCSS(), ...rulesASSETS()] },

  output,

  plugins: [
    new Dotenv({ systemvars: true }),
    new CleanWebpackPlugin(),
    new WebpackBar({
      color: '#2ECC71',
      name: `${NAME_APP} 🔥`,
      profile: true
    }),
    new HtmlWebpackPlugin({
      cache: false,
      favicon: path.resolve(__dirname, './src/assets/images/logo.svg'),
      filename: 'index.html',
      template: path.resolve(__dirname, './src/index.ejs'),
      title: NAME_APP,
      version: VERSION_APP
    })
  ],

  resolve: {
    alias,
    extensions: ['.js', '.json']
  }
}
