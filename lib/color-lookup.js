'use strict';

const cssColorParser = require('csscolorparser');

function colorLookup(colorString) {
  let result = cssColorParser.parseCSSColor(colorString);
  if (result === null) {
    result = cssColorParser.parseCSSColor('#' + colorString);
  }
  if (result === null) {
    if (colorString.toLowerCase() === 'rebeccapurple') {
      result = [102, 51, 153, 1];
    }
  }
  return result;
}

module.exports = colorLookup;
