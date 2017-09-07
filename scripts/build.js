'use strict'

require('perish')
const builder = require('./builder')
const task = process.argv[2]

if (task) builder[task]()
else builder.build()
