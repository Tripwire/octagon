const path = require('path')
const cssnext = require('postcss-cssnext')
const autoprefixer = require('autoprefixer')
const impy = require('postcss-import')
const neat = require('postcss-neat')
const rucksack = require('rucksack-css')
const PATHS = {
  app: './src/stories/index.js',
  dist: path.join(__dirname, 'dist')
}
module.exports = {
  entry: {
    javascript: PATHS.app
  },
  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: PATHS.dist
  },
  eslint: {
    emitWarning: true
  },
  watchOptions: {
    poll: true
  },
  module: {
    loaders: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.css?$/,
        loaders: [ 'style-loader', 'css-loader?importLoaders=1', 'postcss-loader' ]

      },
      {
        test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: function () {
    return {
      defaults: [impy, cssnext, neat, rucksack],
      cleaner: [autoprefixer({ browsers: ['last 2 version'] })]
    }
  }
}
