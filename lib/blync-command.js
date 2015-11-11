'use strict';

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
    let redHex, greenHex, blueHex;
    if (opts.rgbHex.charAt(0) === '#') {
      redHex = opts.rgbHex.substring(1, 3);
      greenHex = opts.rgbHex.substring(3, 5);
      blueHex = opts.rgbHex.substring(5, 7);
    } else {
      redHex = opts.rgbHex.substring(0, 2);
      greenHex = opts.rgbHex.substring(2, 4);
      blueHex = opts.rgbHex.substring(4, 6);
    }
    this._buffer[1] = parseInt(redHex, 16);
    this._buffer[2] = parseInt(blueHex, 16);
    this._buffer[3] = parseInt(greenHex, 16);
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
