/**
 * @description build css, react components
 */
'use strict'

const cp = require('child_process')
const fs = require('fs-extra')
const path = require('path')
const pify = require('pify')
const os = require('os')
const suir = require('./suir-story-util')

const exec = pify(cp.exec, { multiArgs: true })
const spawn = require('cross-spawn-promise')
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
  get stylesDist () { return path.join(this.distDir, 'styles') },
  get styleguidistDist () { return path.join(this.projectRoot, 'styleguide') },
  get suirSrcRoot () { return path.join(this.projectRoot, 'src', 'components', 'suir') },
  get suirStoriesDest () { return path.join(this.suirSrcRoot, 'suir.stories.js') },
  get staticStorybookDist () { return path.join(this.projectRoot, 'storybook-static') },
  clean () {
    return Promise.all([
      remove(this.coverageDir),
      remove(this.distDir),
      remove(this.semanticDist),
      remove(this.staticStorybookDist),
      remove(this.styleguidistDist)
    ])
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
  suirStories () {
    return suir.init(this)
    .then(() => suir.getComponents(this.suirSrcRoot))
    .then(suir.appendURIs)
    .then(suir.appendIFrames)
    .then(suir.appendStories)
    .then(components => suir.concatImportsAndStories(components, this))
    .then(txt => suir.writeStories(txt, this.suirStoriesDest))
  },
  storybook () {
    return spawn('npm', ['run', 'build'], { cwd: this.projectRoot, stdio: 'inherit' })
    .then(() => spawn(this.getBin('build-storybook'), { cwd: this.projectRoot, stdio: 'inherit' }))
    .then(() => spawn('npm', ['run', 'styleguide:build'], { cwd: this.projectRoot, stdio: 'inherit' }))
    .then(() => copy(
      this.styleguidistDist,
      path.join(this.staticStorybookDist, path.basename(this.styleguidistDist))
    ))
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
