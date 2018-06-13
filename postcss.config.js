module.exports = {
  plugins: [
    require('postcss-import'),
    require('rucksack-css'), // css function superset (e.g. less like syntax)
    require('postcss-cssnext') // permit future css rules
  ]
}
