/**
 * @description build css, kickoff semantic styles watcher, and kickoff storybook!
 * note, does not watch react src dir using the dev-component-api task--the storybook
 * server **already watches these components** and recompiles them indepedently
 */

'use strict'

const cp = require('child_process')
const builder = require('./builder')

function watchWatchCssTheme () {
  const watchStylesProcess = cp.spawn(
    builder.getBin('gulp'),
    ['watch'],
    { cwd: builder.semanticPath, stdio: 'inherit' }
  )
  // gulp generates assets periodically. hackishly just keep copying that
  // gulp dist into our build target
  setInterval(() => builder.copySemanticAssets(), 10000)

  const styleguideProcess = cp.spawn(
    'npm', ['run', 'styleguide'],
    { cwd: builder.projectRoot, stdio: 'inherit' }
  )

  // kill both child processes on parent exit
  ;[watchStylesProcess, styleguideProcess].forEach(p => {
    p.on('exit', code => {
      try {
        p.kill()
      } catch (err) {
        /* pass */
      }
    })
  })
}

builder.build()
.then(watchWatchCssTheme)
