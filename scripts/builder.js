/**
 * @description build css, react components
 */
'use strict'

const cp = require('child_process')
const fs = require('fs-extra')
const path = require('path')
const pify = require('pify')
const os = require('os')

const exec = pify(cp.exec, { multiArgs: true })
const copy = pify(fs.copy)
const mkdirp = pify(fs.mkdirp)
const remove = pify(fs.remove)
const isWin = os.platform().match(/^win/)

module.exports = {
  get componentDist () { return path.join(this.distDir) },
  get distDir () { return path.join(this.projectRoot, 'lib') },
  get projectRoot () { return path.resolve(__dirname, '..') },
  get semanticDist () { return path.join(this.semanticPath, 'dist') },
  get semanticPath () { return path.join(this.projectRoot, 'semantic') },
  get stylesDist () { return path.join(this.distDir, 'styles') },
  clean () {
    return Promise.all([remove(this.distDir), remove(this.semanticDist)])
  },
  getBin (bin) {
    return path.join(this.projectRoot, 'node_modules', '.bin', bin) + (isWin ? '.cmd' : '')
  },
  semantic () {
    // source maps not yet available!
    // ref: https://github.com/Semantic-Org/Semantic-UI/issues/2171
    return this._semanticBuild()
    .then(() => copy(this.semanticDist, this.stylesDist))
  },
  _semanticBuild () {
    return exec([this.getBin('gulp'), 'build'].join(' '), { cwd: this.semanticPath, stdio: 'inherit' })
    .then(([stdout]) => console.log(stdout))
  },
  react (opts) {
    opts = opts || {}
    const args = [this.getBin('babel'), 'src', '-d', this.componentDist, '--ignore', '*.stories.js', '--source-maps']
    if (opts.watch) args.push('--watch')
    return Promise.resolve()
    .then(() => mkdirp(this.componentDist))
    .then(() => exec(args.join(' '), { cwd: this.projectRoot, stdio: 'inherit' }))
    .then(([stdout]) => console.log(stdout))
  }
}
