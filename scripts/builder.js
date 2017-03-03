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
  get postCssConfig () { return path.join(this.projectRoot, 'scripts', 'postcss.config.js') },
  get stylesDist () { return path.join(this.distDir, 'styles') },
  get assetsDist () { return path.join(this.distDir, 'assets') },
  clean () {
    return Promise.all([remove(this.distDir), remove(this.semanticDist)])
  },
  getBin (bin) {
    return path.join(this.projectRoot, 'node_modules', '.bin', bin) + (isWin ? '.cmd' : '')
  },
  semantic_init () {
    // source maps not yet available!
    // ref: https://github.com/Semantic-Org/Semantic-UI/issues/2171
    return this.semantic_build()
    .then(() => copy(this.semanticDist, this.stylesDist))
  },
  semantic_build () {
    return exec([this.getBin('gulp'), 'build'].join(' '), { cwd: this.semanticPath, stdio: 'inherit' })
    .then(([stdout]) => console.log(stdout))
  },
  octagon_componentJs (opts) {
    opts = opts || {}
    const args = [this.getBin('babel'), 'src', '-d', this.componentDist, '--ignore', '*.stories.js', '--source-maps']
    if (opts.watch) args.push('--watch')
    return Promise.resolve()
    .then(() => mkdirp(this.componentDist))
    .then(() => exec(args.join(' '), { cwd: this.projectRoot, stdio: 'inherit' }))
    .then(([stdout]) => console.log(stdout))
  },
  octagon_componentCss (opts) {
    opts = opts || {}
    const outputDir = path.join(this.componentDist, 'styles', 'components')
    const inputDir = path.join(this.projectRoot, 'src', 'styles', 'components', '*.css')
    const args = [this.getBin('postcss'), inputDir, '-d', outputDir, '-c', this.postCssConfig]
    return Promise.resolve()
    .then(() => mkdirp(this.componentDist))
    .then(() => exec(args.join(' '), { cwd: this.projectRoot, stdio: 'inherit' }))
    .then(([stdout]) => console.log(stdout))
  },
  octagon_copyAssets (opts) {
    const assetSource = path.join(this.projectRoot, 'src', 'assets')
    return Promise.resolve('success')
      .then(() => copy(assetSource, this.assetsDist))
  }
}
