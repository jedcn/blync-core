'use strict';

function runTheseTests() {
  const BlyncLightManager = require('../../lib/blync-light-manager');
  const HID = require('node-hid');

  const hidDevices = {
    twoLightsOneKeyboard: [{
      vendorId: 3667,
      productId: 9494,
      path: 'USB_0e53_2516_14200000',
      serialNumber: '',
      manufacturer: '',
      product: 'Blynclight',
      release: 256,
      interface: -1
    }, {
      vendorId: 1452,
      productId: 597,
      path: 'Bluetooth_05ac_0255_7f2e3d38',
      serialNumber: 'e4-8b-7f-2e-3d-27',
      manufacturer: 'Apple',
      product: 'Apple Keyboard',
      release: 80,
      interface: -1
    }, {
      vendorId: 3667,
      productId: 9494,
      path: 'USB_0e53_2516_14100000',
      serialNumber: '',
      manufacturer: '',
      product: 'Blynclight',
      release: 256,
      interface: -1
    }],
    oneLightOneKeyboard: [{
      vendorId: 1452,
      productId: 597,
      path: 'Bluetooth_05ac_0255_7f2e3d38',
      serialNumber: 'e4-8b-7f-2e-3d-27',
      manufacturer: 'Apple',
      product: 'Apple Keyboard',
      release: 80,
      interface: -1
    }, {
      vendorId: 3667,
      productId: 9494,
      path: 'USB_0e53_2516_14100000',
      serialNumber: '',
      manufacturer: '',
      product: 'Blynclight',
      release: 256,
      interface: -1
    }]
  };

  describe('BlyncLightManager', function() {
    describe('#findAllBlyncLights', function() {
      it('can work with node-hid to find a single light', function() {
        const manager = new BlyncLightManager()
        spyOn(HID, 'devices').and.returnValue(hidDevices.oneLightOneKeyboard)
        const blyncLightSpy = jasmine.createSpy();
        spyOn(HID, 'HID').and.returnValue(blyncLightSpy);
        const lights = manager.findAllBlyncLights();
        expect(HID.devices).toHaveBeenCalled();
        expect(HID.HID).toHaveBeenCalledWith(hidDevices.oneLightOneKeyboard[1].path)
        expect(lights.length).toBe(1);
        expect(lights[0].device).toBe(blyncLightSpy);
      });
      it('can work with node-hid to find multiple lights', function() {
        const manager = new BlyncLightManager()
        spyOn(HID, 'devices').and.returnValue(hidDevices.twoLightsOneKeyboard)
        spyOn(HID, 'HID')
        const lights = manager.findAllBlyncLights();
        expect(lights.length).toBe(2);
      });
    });
  });
}

if (SHOULD_RUN_HID_TESTS) {
  runTheseTests();
}
