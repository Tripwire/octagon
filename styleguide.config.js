'use strict'

const path = require('path')
const glob = require('glob')
const fs = require('fs')
const builder = require('./scripts/builder')

const suirExamples = glob.sync(`${__dirname}/src/components/suir/**/*.examples.md`)

var semanticCSSStat = fs.lstatSync(builder.semanticCSSFilename)
if (!semanticCSSStat.isFile) throw new Error('semantic css file invalid')

module.exports = {
  title: 'Octagon Style Guide',
  sections: [
    {
      name: 'Octagon Native',
      sections: require('./.octagon-native-sections.json') // generated prestyleguide for performance
    },
    {
      name: 'Semantic-Ui-React',
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
    return `import ${name} from ../src/components/${name}`
  },
  skipComponentsWithoutExample: false,
  webpackConfig: require('./styleguide.webpack.config.js')
}
