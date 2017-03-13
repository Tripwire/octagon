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
  get coverageDir () { return path.join(this.projectRoot, 'coverage') },
  get distDir () { return path.join(this.projectRoot, 'lib') },
  get projectRoot () { return path.resolve(__dirname, '..') },
  get semanticDist () { return path.join(this.semanticPath, 'dist') },
  get semanticPath () { return path.join(this.projectRoot, 'semantic') },
  get postCssConfig () { return path.join(this.projectRoot, 'scripts', 'postcss.config.js') },
  get semanticCSSFilename () { return path.join(this.stylesDist, 'semantic.css') },
  get stylesDist () { return path.join(this.distDir, 'styles') },
  get styleguidistDist () { return path.join(this.projectRoot, 'styleguide') },
  get assetsDist () { return path.join(this.distDir, 'assets') },
  /**
   * Build full lib.
   * @returns {Promise}
   */
  build () {
    return Promise.resolve()
    .then(() => this.clean())
    .then(() => this.octagonComponentJs())
    .then(() => this.octagonComponentCss())
    .then(() => this.octagonCopyAssets())
    .then(() => this.semanticInit())
    .then(() => console.log('dist build successfully'))
  },
  clean () {
    return Promise.all([
      remove(this.coverageDir),
      remove(this.distDir),
      remove(this.semanticDist),
      remove(this.styleguidistDist)
    ])
  },
  copySemanticAssets () {
    return copy(this.semanticDist, this.stylesDist)
  },
  getBin (bin) {
    return path.join(this.projectRoot, 'node_modules', '.bin', bin) + (isWin ? '.cmd' : '')
  },
  octagonComponentJs (opts) {
    opts = opts || {}
    const args = [this.getBin('babel'), 'src', '-d', this.componentDist, '--source-maps']
    if (opts.watch) args.push('--watch')
    return Promise.resolve()
    .then(() => mkdirp(this.componentDist))
    .then(() => exec(args.join(' '), { cwd: this.projectRoot, stdio: 'inherit' }))
    .then(([stdout]) => console.log(stdout))
  },
  octagonComponentCss (opts) {
    opts = opts || {}
    const outputDir = path.join(this.componentDist, 'styles', 'components')
    const inputDir = path.join(this.projectRoot, 'src', 'styles', 'components', '*.css')
    const args = [this.getBin('postcss'), inputDir, '-d', outputDir, '-c', this.postCssConfig]
    return Promise.resolve()
    .then(() => mkdirp(this.componentDist))
    .then(() => exec(args.join(' '), { cwd: this.projectRoot, stdio: 'inherit' }))
    .then(([stdout]) => console.log(stdout))
  },
  octagonCopyAssets (opts) {
    const assetSource = path.join(this.projectRoot, 'src', 'assets')
    const fontsDest = path.resolve(this.distDir, 'styles', 'themes', 'tripwire', 'assets', 'fonts')
    const latoSrc = path.resolve(this.projectRoot, 'node_modules', 'lato-font', 'fonts')
    const latoDest = path.join(fontsDest, 'lato')
    const elegantSrc = path.resolve(this.projectRoot, 'node_modules', 'elegant-icons', 'fonts')
    const elegantDest = path.join(fontsDest, 'elegant-icons')
    return Promise.resolve('success')
    .then(() => copy(assetSource, this.assetsDist))
    .then(() => copy(latoSrc, latoDest))
    .then(() => copy(elegantSrc, elegantDest))
  },
  semanticBuild () {
    return exec([this.getBin('gulp'), 'build'].join(' '), { cwd: this.semanticPath, stdio: 'inherit' })
    .then(([stdout]) => console.log(stdout))
  },
  semanticInit () {
    // source maps not yet available!
    // ref: https://github.com/Semantic-Org/Semantic-UI/issues/2171
    return this.semanticBuild()
    .then(() => this.copySemanticAssets())
  }
}
