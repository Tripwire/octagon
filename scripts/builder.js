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
const isWin = os.platform().match(/^win/)

module.exports = {
  get semanticPath () { return path.join(this.projectRoot, 'semantic') },
  get projectRoot () { return path.resolve(__dirname, '..') },
  get distDir () { return path.join(this.projectRoot, 'lib') },

  react (opts) {
    opts = opts || {}
    const args = [this.getBin('babel'), 'src', '-d', this.distDir, '--ignore', '*.stories.js', '--source-maps']
    if (opts.watch) args.push('--watch')
    return exec(
      args.join(' '),
      { cwd: this.projectRoot, stdio: 'inherit' }
    )
    .then(([stdout]) => console.log(stdout))
  },
  clean () {
    return Promise.all([
      pify(fs.remove)(this.distDir),
      pify(fs.remove)(path.join(this.semanticPath, 'dist'))
    ])
  },
  css () {
    return exec([this.getBin('gulp'), 'build-css'].join(' '), { cwd: this.semanticPath, stdio: 'inherit' })
    .then(([stdout]) => console.log(stdout))
  },
  cssDist () {
    // source maps not yet available!
    // ref: https://github.com/Semantic-Org/Semantic-UI/issues/2171
    const cssDist = [
      path.join(this.semanticPath, 'dist', 'semantic.css'),
      path.join(this.semanticPath, 'dist', 'semantic.min.css')
      // **.map
    ]
    const cssAssets = [
      path.join(this.semanticPath, 'src', 'themes', 'default')
    ]
    return this.css()
    .then(() => {
      const copying = cssDist.map(src => {
        const dest = path.join(this.distDir, 'styles', path.basename(src))
        return copy(src, dest)
      })
      return Promise.all(copying)
    })
    .then(() => {
      const copying = cssAssets.map(src => {
        const dest = path.join(this.distDir, 'styles', 'themes', 'default')
        return copy(src, dest)
      })
      return Promise.all(copying)
    })
  },
  getBin (bin) {
    return path.join(this.projectRoot, 'node_modules', '.bin', bin) + (isWin ? '.cmd' : '')
  }
}

