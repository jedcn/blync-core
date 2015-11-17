'use strict';

const HID = require('node-hid');
const BlyncLight = require('./blync-light');

function BlyncLightManager() {

}

// Observation #1: The device path changes based on where the USB cord
// is plugged in.
//
// Observation #2: HID.devices() returns the devices in random order
//
// Conclusion: Sorting the devices based on path will allowed
// findAllBlyncLights() to consistently return the same light for [0],
// [1], etc. so that subsequent runs of a program relying on
// blync-core will "light up" the same light consistently.
BlyncLightManager.prototype._devicesSortedByPath = function() {
  const devices = HID.devices();
  devices.sort(function(a, b) {
    if (a.path > b.path) {
      return 1;
    } else if (a.path < b.path) {
      return -1;
    } else {
      return 0;
    }
  });
  return devices;
};

BlyncLightManager.prototype._blyncLightDevices = function (filter) {
  const predicate = filter || function(element) {
    return element.product === 'Blynclight';
  };
  return this._devicesSortedByPath().filter(predicate);
};

BlyncLightManager.prototype.findAllBlyncLights = function() {
  const blyncLightDevices = this._blyncLightDevices();
  return blyncLightDevices.map(function(device) {
    return new BlyncLight(new HID.HID(device.path));
  });
};

module.exports = BlyncLightManager;
