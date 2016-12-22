import '../lib/styles/semantic.css'
import { configure } from '@kadira/storybook'

const req = require.context('../src/', true, /.stories.js$/)
const rootReq = require.context(__dirname, true, /.stories.js$/)
function loadStories () {
  rootReq.keys().forEach(f => rootReq(f))
  req.keys().sort().forEach((f) => req(f))
}
configure(loadStories, module)
