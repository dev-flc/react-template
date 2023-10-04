const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devServer: {
    allowedHosts: 'all',
    historyApiFallback: true,
    host: '127.0.0.1',
    open: true,
    port: 8080,
    static: { directory: path.resolve(__dirname, 'public') }
  },

  devtool: 'source-map',
  mode: 'development',

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.[jt]sx?$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [require.resolve('react-refresh/babel')].filter(Boolean)
            }
          }
        ]
      }
    ]
  },

  plugins: [new ReactRefreshWebpackPlugin()],
  target: 'web',
  watchOptions: { ignored: /node_modules/ }
})
