'use strict'

require('perish')
var path = require('path')

module.exports = {
  staticDirectory: path.resolve(__dirname, './styleguide'),
  snapDefinitionsFromWindow: function querySnapDefinitions (divs, message) {
    // @NOTE this JS is run in the browser context

    // hide hidden nodes
    Array.from(document.querySelectorAll('.hide-in-test'))
    .map(node => { node.style.display = 'none' })

    // generate snap configs
    return Array.from(document.querySelectorAll('[data-preview]'))
    .map((node, i) => {
      var classUid = `snap-node-${i}`
      var exampleFilename = Array.from(node.attributes).find(attr => attr.name === 'data-preview').value
      var exampleTitle
      try {
        exampleTitle = node.parentNode.previousSibling.textContent
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^a-zA-Z-]/g, '')
        .substr(0, 20)
      } catch (err) {
        console.error(err)
        exampleTitle = i
      }
      node.classList.add(classUid)
      return { selector: `.${classUid}`, name: `${exampleFilename}-${exampleTitle}` }
    })
  }
}
