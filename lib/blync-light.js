'use strict';

const BlyncCommand = require('./blync-command');
const wrapInPromise = require('./wrap-in-promise');
const parseSetColorArgs = require('./parse-set-color-args');

function BlyncLight(device) {
  this.device = device;
}

BlyncLight.prototype.setColor = function() {
  var setColorArgs = arguments;
  return wrapInPromise(this, function() {
    const commandValues = parseSetColorArgs(setColorArgs);
    const command = new BlyncCommand(commandValues);
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
