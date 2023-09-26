const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const webpack = require('webpack')

const DATE = new Date()
const TIME = DATE.getTime()

const cssRule = {
  resolve: { extensions: ['.scss', '.css'] },
  test: /\.(sa|sc|c)ss$/,
  use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
}

const commonCacheGroup = {
  chunks: 'initial',
  minChunks: 2,
  name: `chunk-common.${TIME}`,
  priority: -30,
  reuseExistingChunk: true
}

const vendorCacheGroup = {
  chunks: 'all',
  maxSize: 30000,
  name: `common.${TIME}`,
  test: /[\\/]node_modules[\\/]/
}

const output = {
  chunkFilename: `js/${process.env.VERSION_APP}.[name].[id].${TIME}.[contenthash].[chunkhash].min.js`,
  filename: `js/${process.env.VERSION_APP}.[name].${TIME}.[contenthash].min.js`,
  path: path.resolve(__dirname, 'public'),
  publicPath: '/'
}

const plugins = [
  new webpack.ids.HashedModuleIdsPlugin({}),
  new CompressionPlugin({
    algorithm: 'gzip',
    deleteOriginalAssets: true,
    exclude: ['service-worker', 'firebase-messaging-sw', 'precache-manifest'],
    filename: '[path][base].gz',
    minRatio: Number.MAX_SAFE_INTEGER,
    test: /\.js$|\.png$|\.svg$|\.css$|\.eot?.+$|\.ttf?.+$/,
    threshold: 0
  }),
  new MiniCssExtractPlugin({
    filename: `assets/css/${process.env.VERSION_APP}.[name].${TIME}.[contenthash].min.css`
  })
]

module.exports = merge(common, {
  devtool: false,
  mode: 'production',
  module: { rules: [cssRule] },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: { common: commonCacheGroup, vendor: vendorCacheGroup }
    }
  },
  output,
  plugins,
  stats: 'minimal'
})
