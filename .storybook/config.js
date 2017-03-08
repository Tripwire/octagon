import '../lib/styles/semantic.css'
import './styles.css'
import { configure } from '@kadira/storybook'

const styleLoader = require.context(`${__dirname}/styleguidist`, true, /.stories.js$/)
const welcomeLoader = require.context(`${__dirname}/welcome`, true, /.stories.js$/)

function loadStories () {
  welcomeLoader.keys().forEach(f => welcomeLoader(f))
  styleLoader.keys().forEach(f => styleLoader(f))
}

configure(loadStories, module)
