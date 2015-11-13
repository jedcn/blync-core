'use strict';

const colorLookup = require('./color-lookup');

function BlyncCommand(opts) {
  this._buffer = this._defaultBuffer();
  opts = opts || {};
  if (opts.red) {
    this._buffer[1] = opts.red;
  }
  if (opts.redHex) {
    this._buffer[1] = parseInt(opts.redHex, 16);
  }
  if (opts.blue) {
    this._buffer[2] = opts.blue;
  }
  if (opts.blueHex) {
    this._buffer[2] = parseInt(opts.blueHex, 16);
  }
  if (opts.green) {
    this._buffer[3] = opts.green;
  }
  if (opts.greenHex) {
    this._buffer[3] = parseInt(opts.greenHex, 16);
  }
  if (opts.rgbHex) {
    let rgb = colorLookup(opts.rgbHex);
    this._buffer[1] = rgb[0];
    this._buffer[2] = rgb[2];
    this._buffer[3] = rgb[1];
  }
}

BlyncCommand.prototype._defaultBuffer = function () {
  var buffer = [];
  buffer[0] = 0x00;
  buffer[1] = 0x00;
  buffer[2] = 0x00;
  buffer[3] = 0x00;
  buffer[4] = 0x00;
  buffer[5] = 90;
  buffer[6] = 0x40;
  buffer[7] = 0x02;
  buffer[8] = 0xFF;
  return buffer;
};

BlyncCommand.prototype.getBuffer = function() {
  return this._buffer;
};

module.exports = BlyncCommand;
