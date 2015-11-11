const BlyncCommand = require('../../lib/blync-command');

describe('BlyncCommand', function() {
  describe('new BlyncCommand()', function() {
    it('creates a default buffer ', function() {
      const blyncCommand = new BlyncCommand();
      const buffer = blyncCommand.getBuffer();
      expect(Array.isArray(buffer)).toBe(true);
      expect(buffer.length).toBe(9);
    });
  });

  describe('new BlyncCommand(opts)', function() {
    const redValue = 128;
    const greenValue = 64;
    const blueValue = 32;
    it('it sets (decimal) red, green, and blue', function() {
      const blyncCommand = new BlyncCommand({
        red: redValue,
        green: greenValue,
        blue: blueValue
      });
      const buffer = blyncCommand.getBuffer();
      expect(buffer[1]).toBe(redValue);
      expect(buffer[2]).toBe(blueValue);
      expect(buffer[3]).toBe(greenValue);
    });

    const redHexValue = redValue.toString(16);
    const greenHexValue = greenValue.toString(16);
    const blueHexValue = blueValue.toString(16);
    it('it sets redHex, greenHex, and blueHex', function() {
      const blyncCommand = new BlyncCommand({
        redHex: redHexValue,
        greenHex: greenHexValue,
        blueHex: blueHexValue
      });
      const buffer = blyncCommand.getBuffer();
      expect(buffer[1]).toBe(redValue);
      expect(buffer[2]).toBe(blueValue);
      expect(buffer[3]).toBe(greenValue);
    });

    const rgbHex = redHexValue + greenHexValue + blueHexValue;
    it('it sets rgbHex', function() {
      const blyncCommand = new BlyncCommand({
        rgbHex: rgbHex,
      });
      const buffer = blyncCommand.getBuffer();
      expect(buffer[1]).toBe(redValue);
      expect(buffer[2]).toBe(blueValue);
      expect(buffer[3]).toBe(greenValue);
    });

    it('it sets #rgbHex', function() {
      const blyncCommand = new BlyncCommand({
        rgbHex: '#' + rgbHex,
      });
      const buffer = blyncCommand.getBuffer();
      expect(buffer[1]).toBe(redValue);
      expect(buffer[2]).toBe(blueValue);
      expect(buffer[3]).toBe(greenValue);
    });
  });
});
