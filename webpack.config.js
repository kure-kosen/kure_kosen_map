const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const environment = process.env.NODE_ENV || 'development'

module.exports = {
  mode: environment,

  entry: './src/map/main.js',

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: './',
    filename: 'map-[hash].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['env', { modules: false }]]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ use: 'css-loader' })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2000000,
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.((geo)?json)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'map.html',
      template: './src/map/map.html'
    }),
    new ExtractTextPlugin('map-[hash].css'),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    })
  ],

  resolve: {
    extensions: ['*', '.js']
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'src/map'),
    publicPath: '/',
    watchContentBase: true,
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },

  performance: {
    hints: false
  },

  devtool: '#inline-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.optimization = { minimize: true }
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ])
}
