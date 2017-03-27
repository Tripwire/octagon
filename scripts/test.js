'use strict'

require('perish')

const path = require('path')
const cp = require('child_process')
const projectRoot = path.resolve(__dirname, '..')
const npmBin = path.resolve(projectRoot, 'node_modules', '.bin')

let processHandles = []
function kill () {
  processHandles.forEach(handle => {
    try {
      handle.kill()
    } catch (err) {
      // pass
    }
  })
}

const staticContentDir = path.join(projectRoot, 'styleguide')
const server = cp.spawn('httpster', ['-d', staticContentDir], { cwd: npmBin, stdio: 'inherit' })
processHandles.push(server.childProcess)

const backstopBin = path.join(npmBin, 'backstop')
const backstop = cp.spawn(backstopBin, ['test'], { cwd: projectRoot, stdio: 'inherit' })
processHandles.push(backstop.childProcess)
backstop.on('exit', code => process.exit(code))

process.on('exit', kill)
