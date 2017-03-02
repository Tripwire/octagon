import '../semantic/dist/semantic.css'
import './styles.css'
import { configure } from '@kadira/storybook'
import { basename } from 'path'
const naturalSort = require('javascript-natural-sort')

const storyLoaders = [
  require.context('../src/', true, /.stories.js$/)
]

// using path.resolve below biffs webpack
const welcomeLoader = require.context(`${__dirname}/welcome`, true, /.stories.js$/)
const styleLoader = require.context(`${__dirname}/styleguidist`, true, /.stories.js$/)

function loadStories () {
  welcomeLoader.keys().forEach(f => welcomeLoader(f))
  styleLoader.keys().forEach(f => styleLoader(f))
  storyLoaders
  .map(loader => loader.keys().map(filename => ({ filename, loader })))
  .reduce((set, curr) => set.concat(curr), []) // flatten all of the [{ filename, loader }, ...] sets
  .sort((aFileLoaderPair, bFileLoaderPair) => {
    return naturalSort(basename(aFileLoaderPair.filename), basename(bFileLoaderPair.filename))
  })
  .forEach(({ filename, loader }) => loader(filename))
}

configure(loadStories, module)
