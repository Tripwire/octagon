'use strict'

require('perish')
const pify = require('pify')
const spawn = require('cross-spawn-promise')
const path = require('path')
const ghPages = require('gh-pages')
const pkg = 'github.com/Tripwire/octagon.git'
const repo = `https://${process.env.GH_TOKEN}@${pkg}`
const staticDocs = path.join(__dirname, '..', 'storybook-static')
const projectRoot = path.join(__dirname, '..')

if (!process.env.CI_BRANCH === 'master') {
  console.warn('not on master, skipping publish cycle')
  process.exit(0)
}

const SPAWN_OPTS = { cwd: projectRoot }

const docs = () => spawn('npm', ['run', 'build-storybook'], Object.assign(SPAWN_OPTS, { stdio: 'inherit' }))
const semantic = () => {
  return spawn('npm', ['run', 'semantic-release'], SPAWN_OPTS)
  .catch(err => {
    // @TODO debrittle-ify, as feasible.
    if (!err.stderr || !err.stderr.toString().match(/ENOCHANGE/)) {
      console.error(err.stderr.toString())
      throw err
    }
  })
}
const publish = () => {
  return pify(ghPages.publish)(staticDocs, { repo, silent: true })
}

Promise.resolve()
.then(() => console.log('executing semantic-release'))
.then(semantic)
.then(() => console.log('building storybook'))
.then(docs)
.then(() => console.log('publishing storybook'))
.then(publish)
.then(() => console.log('fin.'))
