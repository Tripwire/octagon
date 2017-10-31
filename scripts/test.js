'use strict'

require('perish')
const path = require('path')
const execa = require('execa')
const bb = require('bluebird')
const builder = require('./builder')

const PROJECT_ROOT_DIR = path.resolve(__dirname, '..')
const NPM_BIN_DIR = path.resolve(PROJECT_ROOT_DIR, 'node_modules', '.bin')
const STATIC_CONTENT_DIR = path.join(PROJECT_ROOT_DIR, 'styleguide')

const test = {
  async start () {
    await execa(
      'npm',
      ['run', 'styleguide:build'],
      { pwd: builder.projectRoot, stdio: 'inherit' }
    )
    const server = execa('httpster', ['-d', STATIC_CONTENT_DIR], { cwd: NPM_BIN_DIR, stdio: 'inherit' })
    server.on('error', () => { throw new Error('httpster unable to serve') })
    await bb.delay(5000)
    try {
      await execa(
        'docker',
        [
          'run',
          '--rm',
          '-p',
          '3333:3333',
          '-it',
          '-v',
          `${PROJECT_ROOT_DIR}:/src`,
          'backstopjs/backstopjs',
          'test'
        ], {
          cwd: PROJECT_ROOT_DIR,
          stdio: 'inherit'
        })
    } finally {
      server.kill()
    }
  }
}

test.start()
