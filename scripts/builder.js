/**
 * @description build css, react components
 */
'use strict'

const cp = require('child_process')
const fs = require('fs-extra')
const path = require('path')
const pify = require('pify')
const os = require('os')
const execa = require('execa')
const bb = require('bluebird')
const folderHash = require('folder-hash')
const toilet = require('toiletdb')
const db = bb.promisifyAll(toilet(path.resolve(__dirname, 'cache.json')))

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
  get srcPath () { return path.join(this.projectRoot, 'src') },
  get postCssConfig () { return path.join(this.projectRoot, 'postcss.config.js') },
  get semanticCSSFilename () { return path.join(this.stylesDist, 'semantic.css') },
  get stylesDist () { return path.join(this.distDir, 'styles') },
  get styleguidistDist () { return path.join(this.projectRoot, 'styleguide') },
  get assetsDist () { return path.join(this.distDir, 'assets') },
  /**
   * Build full lib.
   * @returns {Promise}
   */
  async build () {
    await this.clean()
    await this.octagonComponentJs()
    await this.octagonComponentCss()
    await this.octagonCopyAssets()
    await this.semanticInit()
    console.log('dist build successfully')
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
  async octagonComponentJs (opts) {
    opts = opts || {}
    const args = [this.getBin('babel'), 'src', '-d', this.componentDist, '--source-maps']
    if (opts.watch) args.push('--watch')
    await mkdirp(this.componentDist)
    const [stdout] = await exec(args.join(' '), { cwd: this.projectRoot, stdio: 'inherit' })
    console.log(stdout)
  },
  async octagonComponentCss (opts) {
    opts = opts || {}
    const outputDir = path.join(this.componentDist, 'styles', 'components')
    const inputDir = path.join(this.projectRoot, 'src', 'styles', 'components', '*.css')
    const args = [this.getBin('postcss'), inputDir, '-d', outputDir, '-c', this.postCssConfig]
    await mkdirp(this.componentDist)
    const [stdout] = await exec(args.join(' '), { cwd: this.projectRoot, stdio: 'inherit' })
    console.log(stdout)
  },
  async octagonCopyAssets (opts) {
    const assetSource = path.join(this.projectRoot, 'src', 'assets')
    const fontsDest = path.resolve(this.distDir, 'styles', 'themes', 'tripwire', 'assets', 'fonts')
    const latoSrc = path.resolve(this.projectRoot, 'node_modules', 'lato-font', 'fonts')
    const latoDest = path.join(fontsDest, 'lato')
    const elegantSrc = path.resolve(this.projectRoot, 'node_modules', 'elegant-icons', 'fonts')
    const elegantDest = path.join(fontsDest, 'elegant-icons')
    await copy(assetSource, this.assetsDist)
    await copy(latoSrc, latoDest)
    await copy(elegantSrc, elegantDest)
  },
  async semanticBuild () {
    const [stdout] = await exec([this.getBin('gulp'), 'build'].join(' '), { cwd: this.semanticPath, stdio: 'inherit' })
    console.log(stdout)
  },
  async semanticInit () {
    // source maps not yet available!
    // ref: https://github.com/Semantic-Org/Semantic-UI/issues/2171
    await this.semanticBuild()
    return this.copySemanticAssets()
  },
  async styleguide () {
    await db.openAsync()
    const cache = await db.readAsync()
    const [ { hash: srcHash }, { hash: semanticHash } ] = await Promise.all([
      folderHash.hashElement(this.srcPath),
      folderHash.hashElement(this.semanticPath)
    ])
    if (cache && cache.srcHash === srcHash && cache.semanticHash === semanticHash) {
      return console.log('SKIPPING STYLEGUIDE BUILD')
    }
    await Promise.all([
      db.writeAsync('srcHash', srcHash),
      db.writeAsync('semanticHash', semanticHash)
    ])
    return execa('npm', ['run', 'styleguide:build'], { cwd: this.projectRoot, stdio: 'inherit' })
  }
}
