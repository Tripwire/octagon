'use strict'

require('perish')
const build = require('./builder')

build.clean()
.then(() => build.octagon_componentJs())
.then(() => build.octagon_componentCss())
.then(() => build.octagon_copyAssets())
.then(() => build.semantic_init())
.then(() => console.log('dist build successfully'))
