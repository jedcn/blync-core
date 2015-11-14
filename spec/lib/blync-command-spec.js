const BlyncCommand = require('../../lib/blync-command');

describe('BlyncCommand', function() {
  const redValue = 128;
  const greenValue = 64;
  const blueValue = 32;
  describe('new BlyncCommand(opts)', function() {
    it('sets red, green, and blue decimal values from opts', function() {
      const blyncCommand = new BlyncCommand({
        red: redValue,
        green: greenValue,
        blue: blueValue
      });
      expect(blyncCommand.getRed()).toBe(redValue);
      expect(blyncCommand.getGreen()).toBe(greenValue);
      expect(blyncCommand.getBlue()).toBe(blueValue);
    });
  });
  describe('#getBuffer()', function() {
    it('describes an "off" light by default', function() {
      const blyncCommand = new BlyncCommand()
      const buffer = blyncCommand.getBuffer();
      expect(Array.isArray(buffer)).toBe(true);
      expect(buffer.length).toBe(9);
      expect(buffer[1]).toBe(0);
      expect(buffer[2]).toBe(0);
      expect(buffer[3]).toBe(0);
    });
    it('describes the set values otherwise', function() {
      const blyncCommand = new BlyncCommand({
        red: redValue,
        green: greenValue,
        blue: blueValue
      })
      const buffer = blyncCommand.getBuffer();
      expect(Array.isArray(buffer)).toBe(true);
      expect(buffer.length).toBe(9);
      expect(buffer[1]).toBe(redValue);
      expect(buffer[2]).toBe(blueValue);
      expect(buffer[3]).toBe(greenValue);
    });
  });
});
