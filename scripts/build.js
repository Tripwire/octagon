'use strict'

require('perish')
const builder = require('./builder')
const task = process.argv[2]

;(() => {
  if (task) return builder[task]()
  builder.clean()
  .then(() => builder.react())
  .then(() => builder.semantic())
  .then(() => builder.suirStories())
  .then(() => console.log('dist build successfully'))
})()
