/**
 * @description watches the react components and builds them to the dist dir on change
 */
'use strict'
const builder = require('./builder')
builder.react({ watch: true })
