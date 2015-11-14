'use strict';

const BlyncCommand = require('./blync-command');
const colorLookup = require('./color-lookup');

function BlyncLight(device) {
  this.device = device;
}

BlyncLight.prototype.setColor = function(color) {
  return new Promise((resolve, reject) => {
    try {
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
      resolve(command);
    } catch (e) {
      reject(e);
    }
  });
};

BlyncLight.prototype.turnOff = function() {
  return new Promise((resolve, reject) => {
    try {
      const command = new BlyncCommand({
        red: 0,
        green: 0,
        blue: 0
      });
      this.device.write(command.getBuffer());
      resolve(command);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = BlyncLight;
