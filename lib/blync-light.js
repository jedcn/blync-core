'use strict';

const BlyncCommand = require('./blync-command');
const colorLookup = require('./color-lookup');
const wrapInPromise = require('./wrap-in-promise');

function BlyncLight(device) {
  this.device = device;
}

BlyncLight.prototype.setColor = function(value) {
  return wrapInPromise(this, function() {
    let rgb, blink;
    if (typeof(value) === 'object') {
      rgb = colorLookup(value.color);
      if (value.blink) {
        blink = value.blink
      }
    } else {
      rgb = colorLookup(value);
      blink = 'none';
    }
    if (rgb === null) {
      throw new Error('Unknown Color: ' + value);
    }
    const command = new BlyncCommand({
      red: rgb[0],
      green: rgb[1],
      blue: rgb[2],
      blink: blink
    });
    this.device.write(command.getBuffer());
    return command;
  });
};

BlyncLight.prototype.turnOff = function() {
  return wrapInPromise(this, function() {
    const command = new BlyncCommand({
      red: 0,
      green: 0,
      blue: 0
    });
    this.device.write(command.getBuffer());
    return command;
  });
};

module.exports = BlyncLight;
