'use strict'

require('perish')
const isDev = !!(process.env.NODE_ENV || '').match(/dev/)
const pify = require('util').promisify
const execa = require('execa')
const path = require('path')
const ghPages = require('gh-pages')
const pkg = 'github.com/Tripwire/octagon.git'
const repo = `https://${process.env.GH_TOKEN}@${pkg}`
const staticDocs = path.join(__dirname, '..', 'styleguide')
const projectRoot = path.join(__dirname, '..')

if (process.env.CIRCLE_BRANCH !== 'master') {
  console.warn('not on master, skipping publish cycle')
  process.exit(0)
}

const SPAWN_OPTS = {
  cwd: projectRoot
}

void async function postTest () { // eslint-disable-line
  console.log('executing semantic-release')
  try {
    const args = ['run', 'semantic-release', isDev ? '-d' : ''].filter(Boolean)
    var proc = await execa('npm', args, SPAWN_OPTS)
    if (proc.stdout) console.log(proc.stdout)
  } catch (err) {
    // @TODO debrittle-ify, as feasible.
    if (!err.stderr) throw err
    // let ENOCHANGES occur
    if (err.stderr && !err.stderr.toString().match(/ENOCHANGE/)) {
      console.error(err.stderr.toString())
      throw err
    }
  }
  console.log('publishing styleguide')
  await pify(ghPages.publish)(staticDocs, { repo, silent: true })
}()
