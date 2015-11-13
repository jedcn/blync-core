const BlyncLight = require('../../lib/blync-light');

const redValue = 128;
const greenValue = 64;
const blueValue = 32;
const redHexValue = redValue.toString(16);
const greenHexValue = greenValue.toString(16);
const blueHexValue = blueValue.toString(16);

describe('BlyncLight', function() {
  beforeEach(function() {
    this.device = {
      write: function() { }
    }
    spyOn(this.device, 'write');
    this.blyncLight = new BlyncLight(this.device);
  });
  describe('#setColor', function() {
    it('writes to the device with the color translation', function() {
      this.blyncLight.setColor('red');
      expect(this.device.write).toHaveBeenCalled();
      const writeArgs = this.device.write.calls.first().args[0];
      expect(writeArgs[1]).toBe(255);
      expect(writeArgs[2]).toBe(0);
      expect(writeArgs[3]).toBe(0);
    });
  });
  describe('#setColorAsDecimal', function() {
    it('writes to the device with red, green, and blue', function() {
      this.blyncLight.setColorAsDecimal({
        red: redValue,
        green: greenValue,
        blue: blueValue
      });
      expect(this.device.write).toHaveBeenCalled();
      const writeArgs = this.device.write.calls.first().args[0];
      expect(writeArgs[1]).toBe(redValue);
      expect(writeArgs[2]).toBe(blueValue);
      expect(writeArgs[3]).toBe(greenValue);
    });
  });
  describe('#setColorAsHex', function() {
    it('writes to the device with red, green, and blue', function() {
      this.blyncLight.setColorAsHex({
        red: redHexValue,
        green: greenHexValue,
        blue: blueHexValue
      });
      expect(this.device.write).toHaveBeenCalled();
      const writeArgs = this.device.write.calls.first().args[0];
      expect(writeArgs[1]).toBe(redValue);
      expect(writeArgs[2]).toBe(blueValue);
      expect(writeArgs[3]).toBe(greenValue);
    });
    it('writes to the device with a hex code', function() {
      this.blyncLight.setColorAsHex({
        code: redHexValue + greenHexValue + blueHexValue
      });
      expect(this.device.write).toHaveBeenCalled();
      const writeArgs = this.device.write.calls.first().args[0];
      expect(writeArgs[1]).toBe(redValue);
      expect(writeArgs[2]).toBe(blueValue);
      expect(writeArgs[3]).toBe(greenValue);
    });
    it('writes to the device with a # hex code', function() {
      this.blyncLight.setColorAsHex({
        code: '#' + redHexValue + greenHexValue + blueHexValue
      });
      expect(this.device.write).toHaveBeenCalled();
      const writeArgs = this.device.write.calls.first().args[0];
      expect(writeArgs[1]).toBe(redValue);
      expect(writeArgs[2]).toBe(blueValue);
      expect(writeArgs[3]).toBe(greenValue);
    });
  });
  describe('#turnOff', function() {
    it('writes to the device with 0, 0, 0', function() {
      this.blyncLight.turnOff();
      expect(this.device.write).toHaveBeenCalled();
      const writeArgs = this.device.write.calls.first().args[0];
      expect(writeArgs[1]).toBe(0);
      expect(writeArgs[2]).toBe(0);
      expect(writeArgs[3]).toBe(0);
    });
  });
});
