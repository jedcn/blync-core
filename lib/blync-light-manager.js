'use strict';

const HID = require('node-hid');
const BlyncLight = require('./blync-light');

function BlyncLightManager() {

}

BlyncLightManager.prototype._devices = function() {
  return HID.devices();
};

BlyncLightManager.prototype._blyncLightDevices = function (filter) {
  const predicate = filter || function(element) {
    return element.product === 'Blynclight';
  };
  return this._devices().filter(predicate);
};

BlyncLightManager.prototype.findAllBlyncLights = function() {
  const blyncLightDevices = this._blyncLightDevices();
  return blyncLightDevices.map(function(device) {
    return new BlyncLight(new HID.HID(device.path));
  });
};

module.exports = BlyncLightManager;
