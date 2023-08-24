const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const webpack = require('webpack')

const date = new Date()

const time = date.getTime()

module.exports = merge(common, {
  devtool: false,

  mode: 'production',

  module: {
    rules: [
      {
        resolve: { extensions: ['.scss', '.css'] },
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },

  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        common: {
          chunks: 'initial',
          minChunks: 2,
          name: `chunk-common.${time}`,
          priority: -30,
          reuseExistingChunk: true
        },
        vendor: {
          chunks: 'all',
          maxSize: 30000,
          name: `common.${time}`,
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  },

  output: {
    chunkFilename: `js/${process.env.VERSION_APP}.[name].[id].${time}.[contenthash].[chunkhash].min.js`,
    filename: `js/${process.env.VERSION_APP}.[name].${time}.[contenthash].min.js`,
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },

  plugins: [
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
      filename: `assets/css/${process.env.VERSION_APP}.[name].${time}.[contenthash].min.css`
    })
  ],

  stats: 'minimal'
})
