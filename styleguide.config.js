const path = require('path')
const cssnext = require('postcss-cssnext')
const autoprefixer = require('autoprefixer')
const impy = require('postcss-import')
const neat = require('postcss-neat')
const rucksack = require('rucksack-css')

const PATHS = {
  app: './src/index.js',
  dist: path.join(__dirname, 'dist'),
  html: './src/index.html',
};
const dir = path.join(__dirname, 'src');
module.exports = {
 title: 'Octagon Style Guide',
 components: './src/components/**/*.jsx',
 getExampleFilename(componentpath) {
    return componentpath.replace(/\.jsx?$/, '.examples.md');
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.jsx');
    const dir = path.dirname(componentPath);
    return 'import ' + name + ' from ../src/components/' + name + ';' ;
    
  },
  skipComponentsWithoutExample: true,
    webpackConfig: {    
        entry: [
            path.join(__dirname, './semantic/dist/semantic.css'),
            path.join(__dirname, './src/styles/components/pagination-control.css'),
            path.join(__dirname, './src/styles/app.css'),
        ],    
  output: {
    path: PATHS.dist,
    publicPath: "/",
    filename: "bundle.js"
  },         
    module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ["babel-loader"],
        exclude: /node_modules/
      }
    ],        
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
    extensions: ['', '.js', '.jsx'],
  },    
    postcss: function () {
        return {
        defaults: [impy, cssnext, neat, rucksack],
        cleaner: [autoprefixer({ browsers: ['last 2 version'] })]
        }
    }
}
};