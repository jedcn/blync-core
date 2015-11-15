'use strict';

const colorLookup = require('./color-lookup');

function parseSetColorArgs(setColorArgs) {
  let value = setColorArgs[0];
  let rgb, blink;
  if (typeof(value) === 'object') {
    rgb = colorLookup(value.color);
    if (value.blink) {
      blink = value.blink;
    }
  } else {
    rgb = colorLookup(value);
    blink = 'none';
  }
  if (rgb === null) {
    throw new Error('Unknown Color: ' + value);
  }
  return {
    red: rgb[0],
    green: rgb[1],
    blue: rgb[2],
    blink: blink
  };
}

module.exports = parseSetColorArgs;
