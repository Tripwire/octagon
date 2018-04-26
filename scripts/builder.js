/**
 * @description build css, react components
 */
'use strict'

const bb = require('bluebird')
const fs = require('fs-extra')
const path = require('path')
const os = require('os')
const execa = require('execa')
const less = require('less')
const chokidar = require('chokidar')
const debounce = require('lodash/debounce')

const isWin = os.platform().match(/^win/)

module.exports = {
  get componentDist () {
    return path.join(this.distDir)
  },
  get componentSrcPath () {
    return path.join(this.srcPath, 'components')
  },
  get coverageDir () {
    return path.join(this.projectRoot, 'coverage')
  },
  get distDir () {
    return path.join(this.projectRoot, 'lib')
  },
  get projectRoot () {
    return path.resolve(__dirname, '..')
  },
  get tempSemanticBuildDir () {
    if (!this._tmpBuildDir) {
      var target = path.resolve(os.tmpdir(), 'octagon-build')
      fs.mkdirpSync(target)
      this._tmpBuildDir = target
    }
    return this._tmpBuildDir
  },
  get semanticUiLessPath () {
    return path.join(this.projectRoot, 'node_modules/semantic-ui-less')
  },
  get srcPath () {
    return path.join(this.projectRoot, 'src')
  },
  get twSuiThemeSrcPath () {
    return path.join(this.srcPath, 'semantic-ui-theme')
  },
  get postCssConfig () {
    return path.join(this.projectRoot, 'postcss.config.js')
  },
  get semanticCSSFilename () {
    return path.join(this.stylesDist, 'semantic.css')
  },
  get stylesDist () {
    return path.join(this.distDir, 'styles')
  },
  get styleguidistDist () {
    return path.join(this.projectRoot, 'styleguide')
  },
  get assetsDist () {
    return path.join(this.distDir, 'assets')
  },
  /**
   * Build full lib.
   * @returns {Promise}
   */
  async build () {
    await this.clean()
    await fs.mkdirp(this.distDir)
    return Promise.all([this.buildOctagonNative(), this.buildSemantic()])
  },
  async buildOctagonNative () {
    return Promise.all([
      this.octagonComponentJs(),
      this.octagonComponentCss(),
      this.octagonCopyAssets()
    ])
  },
  async buildSemantic () {
    // source maps not yet available!
    // ref: https://github.com/Semantic-Org/Semantic-UI/issues/2171
    await fs.remove(this.tempSemanticBuildDir)
    await fs.mkdirp(this.tempSemanticBuildDir)
    await this.semanticBuild()
    return this.semanticCopyAssets()
  },
  clean () {
    return Promise.all([
      fs.remove(this.tempSemanticBuildDir),
      fs.remove(this.coverageDir),
      fs.remove(this.distDir),
      fs.remove(this.styleguidistDist)
    ])
  },
  getBin (bin) {
    return (
      path.join(this.projectRoot, 'node_modules', '.bin', bin) +
      (isWin ? '.cmd' : '')
    )
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
    const inputDir = path.join(
      this.projectRoot,
      'src',
      'styles',
      'components',
      '*.css'
    )
    const cmd = this.getBin('postcss')
    const args = [inputDir, '-d', outputDir, '-c', this.postCssConfig]
    await fs.mkdirp(this.componentDist)
    return execa(cmd, args, { cwd: this.projectRoot, stdio: 'inherit' })
  },
  async octagonCopyAssets (opts) {
    const assetSource = path.join(this.projectRoot, 'src', 'assets')
    const fontsDest = path.resolve(
      this.distDir,
      'styles',
      'themes',
      'tripwire',
      'assets',
      'fonts'
    )
    const latoSrc = path.resolve(
      this.projectRoot,
      'node_modules',
      'lato-font',
      'fonts'
    )
    const latoDest = path.join(fontsDest, 'lato')
    const elegantSrc = path.resolve(
      this.projectRoot,
      'node_modules',
      'elegant-icons',
      'fonts'
    )
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
    const definitionsDest = path.join(this.tempSemanticBuildDir, 'definitions')
    const defaultThemePath = path.join(
      this.semanticUiLessPath,
      'themes',
      'default'
    )
    const defaultThemeDest = path.join(
      this.tempSemanticBuildDir,
      'themes',
      'default'
    )
    const themeLessPath = path.join(this.semanticUiLessPath, 'theme.less')
    const themeLessDest = path.join(this.tempSemanticBuildDir, 'theme.less')
    const semanticLessSrc = path.join(this.semanticUiLessPath, 'semantic.less')
    const semanticLessPath = path.join(
      this.tempSemanticBuildDir,
      'semantic.less'
    )
    // tw config and theme files
    const themeConfigPath = path.join(this.twSuiThemeSrcPath, 'theme.config')
    const themeConfigDest = path.join(this.tempSemanticBuildDir, 'theme.config')
    const themeBuildPath = path.join(this.tempSemanticBuildDir, 'themes')
    const twThemePath = path.join(this.twSuiThemeSrcPath, 'themes', 'tripwire')
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
    const options = { filename: semanticLessPath }
    const output = await less.render(lessInputStream, options)
    await fs.mkdirp(outputDir)
    return fs.writeFile(outputPath, output.css)
  },
  async semanticCopyAssets () {
    const assetsSource = path.join(
      this.tempSemanticBuildDir,
      'themes',
      'default',
      'assets'
    )
    const defaultDir = path.join(this.distDir, 'styles', 'themes', 'default')
    const assetsDest = path.join(defaultDir, 'assets')
    await fs.mkdirp(assetsDest)
    return fs.copy(assetsSource, assetsDest)
  },
  async semanticOverwriteStylePaths () {
    await fs.mkdirp(path.join(this.tempSemanticBuildDir, 'site', 'globals'))
    const siteVarsDest = path.join(
      this.tempSemanticBuildDir,
      'site',
      'globals',
      'site.variables'
    )
    const siteVarsText =
      '@imagePath : "themes/default/assets/images";\n@fontPath  : "themes/default/assets/fonts";'
    return fs.writeFile(siteVarsDest, siteVarsText)
  },
  async styleguideServer () {
    await Promise.all([this.styleguideWriteNativeSections(), this.build()])
    var compileChain = Promise.resolve() // poor mains queueing
    const recompileCss = debounce(path => {
      console.log(`${path} changed`)
      compileChain = compileChain.then(() => this.buildSemantic())
    }, 1000)
    const watcher = chokidar.watch(this.twSuiThemeSrcPath)
    watcher.on('ready', () => {
      return watcher
        .on('add', recompileCss)
        .on('change', recompileCss)
        .on('unlink', recompileCss)
    })
    try {
      await execa('npx', ['styleguidist', 'server'], {
        cwd: this.projectRoot,
        stdio: 'inherit'
      })
    } finally {
      watcher.close()
    }
  },
  /**
   * Writes a sections array to disk async such that styleguidist may pretty print
   * groupings
   * @link https://react-styleguidist.js.org/docs/components.html#sections
   * @returns {Promise}
   */
  async styleguideWriteNativeSections () {
    const HIGHER_ORDER_GROUPS = ['charts']
    const nativeComponentPath = path.resolve(this.componentSrcPath)
    const nativeComponentFilenames = (await fs.readdir(
      nativeComponentPath
    )).map(basename => path.join(nativeComponentPath, basename))
    const nativeComponentDirectories = await bb.filter(
      nativeComponentFilenames,
      async filename => {
        const stat = await fs.stat(filename)
        const isDir = stat.isDirectory()
        return isDir
      }
    )
    const standardNativeComponentDirectories = nativeComponentDirectories.filter(
      dir =>
        !HIGHER_ORDER_GROUPS.some(group => dir.match(new RegExp(`${group}$`)))
    )
    const higherOrderSections = HIGHER_ORDER_GROUPS.map(name => ({
      name,
      components: `${path.resolve(nativeComponentPath, name)}/**/*.jsx`
    }))

    const standardSections = standardNativeComponentDirectories.map(
      directory => ({
        name: path.basename(directory),
        components: `${directory}/**/*.jsx`
      })
    )

    const sections = higherOrderSections.concat(standardSections)
    await fs.writeFile(
      path.resolve(this.projectRoot, '.octagon-native-sections.json'),
      JSON.stringify(sections, null, 2)
    )
  }
}
