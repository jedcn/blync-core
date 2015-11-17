function runTheseTests() {
  const newBlyncDeviceManager = require('../index');

  describe('requiring index.js', function() {
    it('returns a new BlyncDeviceManager', function() {
      expect(newBlyncDeviceManager).toBeDefined();
      expect(newBlyncDeviceManager.findAllBlyncLights)
        .toEqual(jasmine.any(Function));
    })
  });
}

if (SHOULD_RUN_HID_TESTS) {
  runTheseTests();
}
