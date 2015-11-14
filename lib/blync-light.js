'use strict';

const BlyncCommand = require('./blync-command');
const colorLookup = require('./color-lookup');
const wrapInPromise = require('./wrap-in-promise');

function BlyncLight(device) {
  this.device = device;
}

BlyncLight.prototype.setColor = function(color) {
  return wrapInPromise(this, function() {
    const rgb = colorLookup(color);
    if (rgb === null) {
      throw new Error('Unknown Color: ' + color);
    }
    const command = new BlyncCommand({
      red: rgb[0],
      green: rgb[1],
      blue: rgb[2]
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
