const newBlyncDeviceManager = require('../index');

describe('requiring index.js', function() {
  it('returns a new BlyncDeviceManager', function() {
    expect(newBlyncDeviceManager).toBeDefined();
    expect(newBlyncDeviceManager.findFirstBlyncLight)
      .toEqual(jasmine.any(Function));
  })
});
