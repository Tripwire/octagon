/**
 * @description build css, react components
 */
'use strict'

const fs = require('fs-extra')
const path = require('path')
const os = require('os')
const execa = require('execa')
const bb = require('bluebird')
const folderHash = require('folder-hash')
const toilet = require('toiletdb')
const db = bb.promisifyAll(toilet(path.resolve(__dirname, 'cache.json')))
const less = require('less')

const isWin = os.platform().match(/^win/)

module.exports = {
  get componentDist () { return path.join(this.distDir) },
  get coverageDir () { return path.join(this.projectRoot, 'coverage') },
  get distDir () { return path.join(this.projectRoot, 'lib') },
  get projectRoot () { return path.resolve(__dirname, '..') },
  get tempBuildDir () { return path.join(this.projectRoot, 'semanticTempBuildDir') },
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
    await fs.mkdirp(this.distDir)
    return Promise.all([
      this.buildOctagonNative(),
      this.semanticInit()
    ])
  },
  async buildOctagonNative () {
    return Promise.all([
      this.octagonComponentJs(),
      this.octagonComponentCss(),
      this.octagonCopyAssets()
    ])
  },
  clean () {
    return Promise.all([
      fs.remove(this.tempBuildDir),
      fs.remove(this.coverageDir),
      fs.remove(this.distDir),
      fs.remove(this.styleguidistDist)
    ])
  },
  getBin (bin) {
    return path.join(this.projectRoot, 'node_modules', '.bin', bin) + (isWin ? '.cmd' : '')
  },
  async octagonComponentJs (opts) {
    opts = opts || {}
    const cmd = this.getBin('babel')
    const args = ['src', '-d', this.componentDist, '--source-maps']
    if (opts.watch) args.push('--watch')
    await fs.mkdirp(this.componentDist)
    return execa(cmd, args, { cwd: this.projectRoot, stdio: 'inherit' })
  },
  async octagonComponentCss (opts) {
    opts = opts || {}
    const outputDir = path.join(this.componentDist, 'styles', 'components')
    const inputDir = path.join(this.projectRoot, 'src', 'styles', 'components', '*.css')
    const cmd = this.getBin('postcss')
    const args = [inputDir, '-d', outputDir, '-c', this.postCssConfig]
    await fs.mkdirp(this.componentDist)
    return execa(cmd, args, { cwd: this.projectRoot, stdio: 'inherit' })
  },
  async octagonCopyAssets (opts) {
    const assetSource = path.join(this.projectRoot, 'src', 'assets')
    const fontsDest = path.resolve(this.distDir, 'styles', 'themes', 'tripwire', 'assets', 'fonts')
    const latoSrc = path.resolve(this.projectRoot, 'node_modules', 'lato-font', 'fonts')
    const latoDest = path.join(fontsDest, 'lato')
    const elegantSrc = path.resolve(this.projectRoot, 'node_modules', 'elegant-icons', 'fonts')
    const elegantDest = path.join(fontsDest, 'elegant-icons')
    return Promise.all([
      fs.copy(assetSource, this.assetsDist),
      fs.copy(latoSrc, latoDest),
      fs.copy(elegantSrc, elegantDest)
    ])
  },
  async semanticBuild () {
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
    const themeBuildPath = path.join(this.tempBuildDir, 'themes')
    const twThemePath = path.join(this.srcPath, 'themes', 'tripwire')
    const twThemeDest = path.join(themeBuildPath, 'tripwire')

    await fs.mkdirp(themeBuildPath)
    await Promise.all([
      // tw theme
      fs.symlink(twThemePath, twThemeDest),
      fs.copy(themeConfigPath, themeConfigDest), // hot reloading won't work for config

      // semantic
      fs.copy(themeLessPath, themeLessDest),
      fs.copy(defaultThemePath, defaultThemeDest),
      fs.copy(definitionsPath, definitionsDest),
      fs.copy(semanticLessSrc, semanticLessPath)
    ])
    await this.semanticOverwriteStylePaths()

    const lessInputStream = (await fs.readFile(semanticLessPath)).toString()
    const outputDir = path.join(this.componentDist, 'styles')
    const outputPath = path.join(outputDir, 'semantic.css')
    const options = {filename: semanticLessPath}
    const output = await less.render(lessInputStream, options)
    await fs.mkdirp(outputDir)
    return fs.writeFile(outputPath, output.css)
  },
  async semanticCopyAssets () {
    const assetsSource = path.join(this.tempBuildDir, 'themes', 'default', 'assets')
    const defaultDir = path.join(this.distDir, 'styles', 'themes', 'default')
    const assetsDest = path.join(defaultDir, 'assets')
    await fs.mkdirp(assetsDest)
    return fs.copy(assetsSource, assetsDest)
  },
  async semanticInit () {
    // source maps not yet available!
    // ref: https://github.com/Semantic-Org/Semantic-UI/issues/2171
    await this.semanticBuild()
    return this.semanticCopyAssets()
  },
  async semanticOverwriteStylePaths () {
    await fs.mkdirp(path.join(this.tempBuildDir, 'site', 'globals'))
    const siteVarsDest = path.join(this.tempBuildDir, 'site', 'globals', 'site.variables')
    const siteVarsText = '@imagePath : "/themes/default/assets/images";\n@fontPath  : "/themes/default/assets/fonts";'
    return fs.writeFile(siteVarsDest, siteVarsText)
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
