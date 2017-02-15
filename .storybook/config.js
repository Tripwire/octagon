// import '../lib/styles/semantic.css'
import '../semantic/dist/semantic.min.css';
import './styles.css'
import { configure } from '@kadira/storybook'
import { basename } from 'path'
const naturalSort = require('javascript-natural-sort')

const storyLoaders = [
  require.context('../src/', true, /.stories.js$/),
  require.context('../stories/', true, /.stories.js$/)
]
const welcomeLoader = require.context(__dirname, true, /.stories.js$/)
function loadStories () {
  welcomeLoader.keys().forEach(f => welcomeLoader(f))
  storyLoaders
  .map(loader => loader.keys().map(filename => ({ filename, loader })))
  .reduce((set, curr) => set.concat(curr), []) // flatten all of the [{ filename, loader }, ...] sets
  .sort((aFileLoaderPair, bFileLoaderPair) => {
    return naturalSort(basename(aFileLoaderPair.filename), basename(bFileLoaderPair.filename))
  })
  .forEach(({ filename, loader }) => loader(filename))
}
configure(loadStories, module)
