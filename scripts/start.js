/**
 * @description build css, kickoff semantic styles watcher, and kickoff styleguidist!
 */

require('perish')
const builder = require('./builder')
void (async function start () {
  try {
    await builder.styleguideServer()
  } catch (err) {
    throw err
  }
})()
