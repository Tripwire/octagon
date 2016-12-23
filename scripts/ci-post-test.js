'use strict'

const cp = require('child_process')
const path = require('path')
const ghPages = require('gh-pages')

const CP_OPTS = { cwd: path.join(__dirname, '..') }

if (process.env.CI_BRANCH === 'master') {
  console.log('running semantic release...')
  cp.execSync('npm run semantic-release || true', CP_OPTS)
  console.log('building storybook...')
  cp.execSync('npm run docs', CP_OPTS)
  console.log('publishing storybook...')
  ghPages.publish(path.join(__dirname, '..', 'docs'), {
    repo: 'https://' + process.env.GH_TOKEN + '@github.com/Tripwire/octagon.git',
    silent: true
  }, () => console.log('docs-published!'))
} else {
  console.warn('not on master, skipping publish cycle')
}
