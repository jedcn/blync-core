'use strict';

const blinkMap = {
  none: 0,
  slow: 100,
  fast: 70
};

function BlyncCommand(opts) {
  this._buffer = this._defaultBuffer();
  opts = opts || {};
  if (opts.red) {
    this.setRed(opts.red);
  }
  if (opts.green) {
    this.setGreen(opts.green);
  }
  if (opts.blue) {
    this.setBlue(opts.blue);
  }
  if (opts.blink) {
    this.setBlink(opts.blink);
  }
}

BlyncCommand.prototype.getRed = function() {
  return this._buffer[1];
};

BlyncCommand.prototype.setRed = function(value) {
  this._buffer[1] = value;
};

BlyncCommand.prototype.getGreen = function() {
  return this._buffer[3];
};

BlyncCommand.prototype.setGreen = function(value) {
  this._buffer[3] = value;
};

BlyncCommand.prototype.getBlue = function() {
  return this._buffer[2];
};

BlyncCommand.prototype.setBlue = function(value) {
  this._buffer[2] = value;
};

BlyncCommand.prototype.getBlink = function() {
  const blinkDecimalValue = this._buffer[4];
  if (blinkDecimalValue === 0) {
    return 'none';
  } else if (blinkDecimalValue === 100) {
    return 'slow';
  } else {
    return 'fast';
  }
};

BlyncCommand.prototype.setBlink = function(value) {
  this._buffer[4] = blinkMap[value];
};

BlyncCommand.prototype._defaultBuffer = function() {
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
