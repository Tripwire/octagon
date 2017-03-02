'use strict'

require('perish')
const builder = require('./builder')

builder.clean()
.then(() => builder.react())
.then(() => builder.semantic())
.then(() => builder.suirStories())
.then(() => console.log('dist build successfully'))
