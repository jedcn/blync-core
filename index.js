'use strict';

const HID = require('node-hid');

function BlyncCore() {
  const devices = HID.devices();
  const blyncLights = devices.filter(function(element, index, array) {
    return element.product === 'Blynclight'
  });
  const firstBlyncLight = blyncLights[0];
  const firstBlyncLightPath = firstBlyncLight.path
  this.device = new HID.HID(firstBlyncLightPath);
};

function sendCommand(device, red, green, blue) {

  var commandBuffer = [];
  commandBuffer[0] = 0x00;
  commandBuffer[1] = red;
  commandBuffer[2] = blue;
  commandBuffer[3] = green;
  commandBuffer[4] = 0;
  commandBuffer[5] = 90;
  commandBuffer[6] = 0x40;
  commandBuffer[7] = 0x02;
  commandBuffer[8] = 0xFF;
  device.write(commandBuffer);
};

BlyncCore.prototype.setColorAsDecimal = function(opts) {
  sendCommand(this.device, opts.red, opts.green, opts.blue);
};

BlyncCore.prototype.setColorAsHex = function(opts) {
  let red, green, blue;
  if (opts.code) {
    if (opts.code.charAt(0) === '#') {
      red = opts.code.substring(1, 3);
      green = opts.code.substring(3, 5);
      blue = opts.code.substring(5, 7);
    } else {
      red = opts.code.substring(0, 2);
      green = opts.code.substring(2, 4);
      blue = opts.code.substring(4, 6);
    }
  } else {
    red = opts.red;
    blue = opts.blue;
    green = opts.green
  }
  sendCommand(this.device,
              parseInt(red, 16),
              parseInt(green, 16),
              parseInt(blue, 16));
};

function sendTurnOffCommand(device) {
  var commandBuffer = [];
  commandBuffer[0] = 0x00;
  commandBuffer[1] = 0x00;
  commandBuffer[2] = 0x00;
  commandBuffer[3] = 0x00;
  commandBuffer[4] = 0x00;
  commandBuffer[5] = 0x00;
  commandBuffer[6] = 0x00;
  commandBuffer[7] = 0x00;
  commandBuffer[8] = 0xFF;
  device.write(commandBuffer);
};

BlyncCore.prototype.turnOff = function() {
  sendTurnOffCommand(this.device)
}

module.exports = BlyncCore;
