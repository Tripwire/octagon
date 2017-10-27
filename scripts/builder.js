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
const less = require('less')
const link = require('fs-symlink')

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
  get tempBuildDir () { return path.join('semanticTempBuildDir') },
  get semanticUiLessPath () { return path.join(this.projectRoot, 'node_modules/semantic-ui-less') },
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
    console.log('Lib built successfully')
  },
  clean () {
    return Promise.all([
      remove(this.tempBuildDir),
      remove(this.coverageDir),
      remove(this.distDir),
      remove(this.styleguidistDist)
    ])
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
    console.log('Building Semantic Less')
    // pull these from semantic-ui-less node modules
    const definitionsPath = path.join(this.semanticUiLessPath, 'definitions')
    const definitionsDest = path.join(this.tempBuildDir, 'definitions')
    const defaultThemePath = path.join(this.semanticUiLessPath, 'themes', 'default')
    const defaultThemeDest = path.join(this.tempBuildDir, 'themes', 'default')
    const themeLessPath = path.join(this.semanticUiLessPath, 'theme.less')
    const themeLessDest = path.join(this.tempBuildDir, 'theme.less')
    const semanticLessSrc = path.join(this.semanticUiLessPath, 'semantic.less')
    const semanticLessPath = path.join(this.tempBuildDir, 'semantic.less')
    // tw config and theme files
    const themeConfigPath = path.join(this.srcPath, 'theme.config')
    const themeConfigDest = path.join(this.tempBuildDir, 'theme.config')
    const twThemePath = path.join(this.srcPath, 'themes', 'tripwire')
    const twThemeDest = path.join(this.tempBuildDir, 'themes', 'tripwire')

    // tw theme
    await link(twThemePath, twThemeDest)
    await copy(themeConfigPath, themeConfigDest) // hot reloading won't work for config
    // semantic
    await copy(themeLessPath, themeLessDest)
    await copy(defaultThemePath, defaultThemeDest)
    await copy(definitionsPath, definitionsDest)
    await copy(semanticLessSrc, semanticLessPath)
    await this.semanticOverwriteStylePaths()

    const lessInputStream = await fs.readFileSync(semanticLessPath).toString()
    const outputPath = path.join(this.componentDist, 'styles', 'semantic.css')
    const options = {filename: semanticLessPath}
    const output = await less.render(lessInputStream, options)
    return await fs.writeFile(outputPath, output.css)
  },
  async semanticCopyAssets () {
    console.log('Copying Semantic Assets')
    const assetsSource = path.join(this.tempBuildDir, 'themes', 'default', 'assets')
    const defaultDir = path.join(this.distDir, 'styles', 'themes', 'default')
    const assetsDest = path.join(defaultDir, 'assets')
    await mkdirp(assetsDest)
    await copy(assetsSource, assetsDest)
  },
  async semanticInit () {
    // source maps not yet available!
    // ref: https://github.com/Semantic-Org/Semantic-UI/issues/2171
    await this.semanticBuild()
    return this.semanticCopyAssets()
  },
  async semanticOverwriteStylePaths () {
    await mkdirp(path.join(this.tempBuildDir, 'site', 'globals'))
    const siteVarsDest = path.join(this.tempBuildDir, 'site', 'globals', 'site.variables')
    const siteVarsText = '@imagePath : "/themes/default/assets/images";\n@fontPath  : "/themes/default/assets/fonts";'
    fs.writeFile(siteVarsDest, siteVarsText)
  },
  async styleguide () {
    await db.openAsync()
    const cache = await db.readAsync()
    const [ { hash: srcHash }, { hash: semanticHash } ] = await Promise.all([
      folderHash.hashElement(this.srcPath),
      folderHash.hashElement(this.tempBuildDir)
    ])
    if (cache && cache.srcHash === srcHash && cache.semanticHash === semanticHash) {
      return console.log('SKIPPING STYLEGUIDE BUILD')
    }
    await execa('npm', ['run', 'styleguide:build'], { cwd: this.projectRoot, stdio: 'inherit' })
    await Promise.all([
      db.writeAsync('srcHash', srcHash),
      db.writeAsync('semanticHash', semanticHash)
    ])
  }
}
