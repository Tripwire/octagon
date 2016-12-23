'use strict'

const cp = require('child_process')

if (process.env.CI_BRANCH === 'master') {
  cp.execSync([
    'npm run semantic-release || true',
    'npm run docs',
    'npm run docs-publish'
  ].join(' && '))
} else {
  console.warn('not on master, skipping publish cycle')
}
