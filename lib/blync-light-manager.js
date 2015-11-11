'use strict';

const HID = require('node-hid');
const BlinkLight = require('./blync-light');

function BlyncLightManager() {

}

BlyncLightManager.prototype._devices = function() {
  return HID.devices();
};

BlyncLightManager.prototype._blyncLightDevices = function (filter) {
  const predicate = filter || function(element, index, array) {
    return element.product === 'Blynclight'
  }
  return this._devices().filter(predicate);
}

BlyncLightManager.prototype.findFirstBlyncLight = function() {
  const blyncLightDevices = this._blyncLightDevices()
  const firstBlyncLightDevice = blyncLightDevices[0];
  return new BlinkLight(new HID.HID(firstBlyncLightDevice.path));
};

module.exports = BlyncLightManager;
