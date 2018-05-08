'use strict'

require('perish')
var path = require('path')

module.exports = {
  staticDirectory: path.resolve(__dirname, './styleguide'),
  snapDefinitionsFromWindow: async function querySnapDefinitions (
    divs,
    message
  ) {
    // @NOTE this JS is run in the browser context
    await new Promise(function (resolve, reject) {
      setTimeout(resolve, 500)
    })

    // remove hidden nodes from test
    Array.from(document.querySelectorAll('.hide-in-test')).map(node => {
      var tNode = node.parentNode
      while (!tNode.attributes['data-preview']) tNode = tNode.parentNode
      tNode.parentNode.removeChild(tNode)
    })

    // generate snap configs
    return Array.from(document.querySelectorAll('[data-preview]')).map(
      (node, i) => {
        var classUid = `snap-node-${i}`
        var exampleFilename = Array.from(node.attributes).find(
          attr => attr.name === 'data-preview'
        ).value
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
        return {
          selector: `.${classUid}`,
          name: `${exampleFilename}-${exampleTitle}`
        }
      }
    )
  }
}
