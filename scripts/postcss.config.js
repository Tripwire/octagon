module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-cssnext'), // permit future css rules
    require('postcss-neat'), // @TODO investigate purging? may be unused
    require('rucksack-css'), // css function superset (e.g. less like syntax)
    require('autoprefixer')({ browsers: ['last 2 version'] })
  ]
}
