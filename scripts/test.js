'use strict'

require('perish')
const path = require('path')
const execa = require('execa')
const bb = require('bluebird')
const builder = require('./builder')

const PROJECT_ROOT_DIR = path.resolve(__dirname, '..')
const NPM_BIN_DIR = path.resolve(PROJECT_ROOT_DIR, 'node_modules', '.bin')
const STATIC_CONTENT_DIR = path.join(PROJECT_ROOT_DIR, 'styleguide')
const BACKSTOP_BIN = path.join(NPM_BIN_DIR, 'backstop')

const test = {
  async start () {
    await builder.styleguide()
    const server = execa('httpster', ['-d', STATIC_CONTENT_DIR], { cwd: NPM_BIN_DIR, stdio: 'inherit' })
    server.on('error', () => { throw new Error('httpster unable to serve') })
    await bb.delay(5000)
    try {
      await execa(BACKSTOP_BIN, ['test'], { cwd: PROJECT_ROOT_DIR, stdio: 'inherit' })
    } finally {
      server.kill()
    }
  }
}

test.start()
