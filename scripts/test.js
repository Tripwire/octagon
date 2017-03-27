'use strict'

require('perish')

const path = require('path')
const cp = require('child_process')
const projectRoot = path.resolve(__dirname, '..')
const npmBin = path.resolve(projectRoot, 'node_modules', '.bin')

let processHandles = []
function kill () {
  processHandles.forEach(handle => { try { handle.kill() } catch (err) {} })
}

const staticContentDir = path.join(projectRoot, 'styleguide')
const server = cp.spawn('httpster', ['-d', staticContentDir], { cwd: npmBin, stdio: 'inherit' })
processHandles.push(server)
server.on('exit', code => {
  if (code) throw new Error('httpster unable to serve')
  kill()
})

const backstopBin = path.join(npmBin, 'backstop')
let backstop

setTimeout(() => {
  backstop = cp.spawn(backstopBin, ['test'], { cwd: projectRoot, stdio: 'inherit' })
  processHandles.push(backstop.childProcess)
  backstop.on('exit', code => process.exit(code))
}, 5000)

process.on('exit', kill)
