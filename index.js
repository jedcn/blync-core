'use strict';

const HID = require('node-hid');
const BlyncCommand = require('./lib/blync-command');

function BlyncCore() {
  const devices = HID.devices();
  const blyncLights = devices.filter(function(element, index, array) {
    return element.product === 'Blynclight'
  });
  const firstBlyncLight = blyncLights[0];
  const firstBlyncLightPath = firstBlyncLight.path
  this.device = new HID.HID(firstBlyncLightPath);
};

BlyncCore.prototype.setColorAsDecimal = function(opts) {
  const command = new BlyncCommand({
    red: opts.red,
    green: opts.green,
    blue: opts.blue
  });
  this.device.write(command.getBuffer());
};

BlyncCore.prototype.setColorAsHex = function(opts) {
  if (opts.code) {
    const command = new BlyncCommand({ rgbHex: opts.code });
    this.device.write(command.getBuffer());
  } else {
    const command = new BlyncCommand({
      redHex: opts.red,
      greenHex: opts.green,
      blueHex: opts.blue
    });
    this.device.write(command.getBuffer());
  }
};

BlyncCore.prototype.turnOff = function() {
  const command = new BlyncCommand({
    red: 0,
    green: 0,
    blue: 0
  });
  this.device.write(command.getBuffer());
}

module.exports = BlyncCore;
