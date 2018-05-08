require('perish')
const builder = require('./builder')
const task = process.argv[2]

void (async function watch () {
  switch (task) {
    case 'css':
      return builder.watchCss()
    case 'js':
      return builder.watchJs()
    case 'sui':
      return builder.watchSui()
    default:
      throw new Error(`no task named: ${task || '[no task provided]'}`)
  }
}())
