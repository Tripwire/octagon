'use strict'

const path = require('path')
const cssnext = require('postcss-cssnext')
const autoprefixer = require('autoprefixer')
const impy = require('postcss-import')
const neat = require('postcss-neat')
const rucksack = require('rucksack-css')
const glob = require('glob')
const fs = require('fs')
const builder = require('./scripts/builder')

const componentStyles = glob
  .sync(`${__dirname}/src/**/*.css`)
  .filter(filename => !filename.match(/components.suir/))
  .filter(filename => !filename.match(/variables.css/))
  .concat([builder.semanticCSSFilename])

const suirExamples = glob.sync(`${__dirname}/src/components/suir/**/*.examples.md`)

var semanticCSSStat = fs.lstatSync(builder.semanticCSSFilename)
if (!semanticCSSStat.isFile) throw new Error('semantic css file invalid')

const PATHS = {
  app: './src/index.js',
  dist: path.join(__dirname, 'dist'),
  html: './src/index.html'
}

module.exports = {
  title: 'Octagon Style Guide',
  sections: [
    { name: 'Octagon Native', components: './src/**/*.jsx' },
    {
      name: 'SUIR Native',
      sections: suirExamples.map(ex => ({
        name: path.basename(ex).replace(/\.examples\.md/g, ''),
        content: ex
      }))
    }
  ],
  getExampleFilename (componentpath) {
    return componentpath.replace(/\.jsx?$/, '.examples.md')
  },
  getComponentPathLine (componentPath) {
    const name = path.basename(componentPath, '.jsx')
    return 'import ' + name + ' from ../src/components/' + name + ''
  },
  skipComponentsWithoutExample: true,
  webpackConfig: {
    entry: componentStyles,
    output: {
      path: PATHS.dist,
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      preLoaders: [
        {
          test: /\.(js|jsx)$/,
          loaders: ['babel-loader'],
          exclude: /node_modules/
        }
      ],
      loaders: [
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'file-loader?name=[name].[ext]'
        },
        {
          test: /\.css?$/,
          loaders: ['style-loader', 'css-loader?importLoaders=1', 'postcss-loader']

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
}
