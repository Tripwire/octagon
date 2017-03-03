module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-cssnext'),
    require('postcss-neat'),
    require('rucksack-css'),
    require('autoprefixer')({ browsers: ['last 2 version'] })
  ]
}
