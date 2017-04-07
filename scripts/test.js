/* eslint-disable semi */
'use strict'

require('perish')
var path = require('path')
var webjerky = require('webjerky')

webjerky({
  testName: 'octagon-' + Date.now(),
  staticDir: path.resolve(__dirname, '..', 'styleguide'),
  /**
   * This function searches the full styleguide for all preview elements.  It
   * then tries to infer a logical filename for the screenshot based on nearby
   * text.  It's not super robust.  We can deal w/ it for now!
   * @returns {array} snaps [{ name: '...', elem: '<css-selector>' }, ...]
   */
  snapDefinitionsFromWindow: function snapDefinitionsFromStyleguide () {
    // @NOTE this JS is run in the _browser_ context
    // webdriverio JS serialziation requires semis. :/
    function getParentSiblingText (node) {
      var par = node.parentNode || node.parentElement;
      if (!par) return null;
      var sib = par.previousSibling;
      if (!sib) return null;
      return sib.innerText.trim().replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase();
    }
    var divs = document.querySelectorAll('[class*="preview"]');
    var map = [];
    var i = 0;
    var tDiv;
    var name;
    var tNode;
    var nameCounts = {};
    while (divs[i]) {
      name = null;
      tDiv = divs[i];
      tNode = tDiv;
      while (!name) {
        name = getParentSiblingText(tNode);
        tNode = tNode.parentElement || tNode.parentNode;
      }
      if (!nameCounts[name]) {
        nameCounts[name] = 1;
      } else {
        nameCounts[name] += 1;
        name = name + '-' + nameCounts[name];
      }
      if (!tDiv.id) tDiv.id = '__dummy_div_' + i;
      map.push({ elem: '#' + tDiv.id, name: name });
      ++i;
    }
    console.log(map.map(function (n) { return n.name; }))
    return map;
  }
})
