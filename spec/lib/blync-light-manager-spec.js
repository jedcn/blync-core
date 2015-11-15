'use strict';

function runTheseTests() {
  const BlyncLightManager = require('../../lib/blync-light-manager');
  const HID = require('node-hid');

  const hidPath = 'USB_0e53_2516_14100000';

  describe('BlyncLightManager', function() {
    describe('#findFirstBlyncLight', function() {
      it('works with node-hid to find a light', function() {
        const manager = new BlyncLightManager()
        spyOn(HID, 'devices').and.returnValue([{
          vendorId: 3667,
          productId: 9494,
          path: hidPath,
          serialNumber: '',
          manufacturer: '',
          product: 'Blynclight',
          release: 256,
          interface: -1 }])
        blyncLightSpy = jasmine.createSpy();
        spyOn(HID, 'HID').and.returnValue(blyncLightSpy);
        const blyncLight = manager.findFirstBlyncLight();
        expect(HID.devices).toHaveBeenCalled();
        expect(HID.HID).toHaveBeenCalledWith(hidPath)
        expect(blyncLight.device).toBe(blyncLightSpy);
      });
    });
  });

}

if (SHOULD_RUN_HID_TESTS) {
  runTheseTests();
}
