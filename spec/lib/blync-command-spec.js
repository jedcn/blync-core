'use strict';

const BlyncCommand = require('../../lib/blync-command');

describe('BlyncCommand', function() {
  const redValue = 128;
  const greenValue = 64;
  const blueValue = 32;
  describe('new BlyncCommand()', function() {
    it('sets up defaults for red, green, blue, blink and buffer', function() {
      const blyncCommand = new BlyncCommand()
      expect(blyncCommand.getRed()).toBe(0);
      expect(blyncCommand.getGreen()).toBe(0);
      expect(blyncCommand.getBlue()).toBe(0);
      expect(blyncCommand.getBlink()).toBe('none');
      const buffer = blyncCommand.getBuffer();
      expect(buffer.length).toBe(9);
    });
  });
  describe('new BlyncCommand(opts)', function() {
    it('sets red, green, and blue decimal values from opts', function() {
      const blyncCommand = new BlyncCommand({
        red: redValue,
        green: greenValue,
        blue: blueValue,
        blink: 'none'
      });
      expect(blyncCommand.getRed()).toBe(redValue);
      expect(blyncCommand.getGreen()).toBe(greenValue);
      expect(blyncCommand.getBlue()).toBe(blueValue);
      expect(blyncCommand.getBlink()).toBe('none');
    });
    it('sets a blink value of none, slow, or fast from opts.blink', function() {
      let blyncCommand = new BlyncCommand({
        red: redValue,
        green: greenValue,
        blue: blueValue,
        blink: 'none'
      });
      expect(blyncCommand.getBlink()).toBe('none');
      blyncCommand = new BlyncCommand({
        red: redValue,
        green: greenValue,
        blue: blueValue,
        blink: 'slow'
      });
      expect(blyncCommand.getBlink()).toBe('slow');
      blyncCommand = new BlyncCommand({
        red: redValue,
        green: greenValue,
        blue: blueValue,
        blink: 'fast'
      });
      expect(blyncCommand.getBlink()).toBe('fast');
    });
    it('sets a blink value of none by default', function() {
      let blyncCommand = new BlyncCommand({
        red: redValue,
        green: greenValue,
        blue: blueValue
      });
      expect(blyncCommand.getBlink()).toBe('none');
    });
  });
  describe('#getBuffer()', function() {
    it('contains the red decimal rgb value in [1]', function() {
      const blyncCommand = new BlyncCommand({
        red: redValue,
        green: greenValue,
        blue: blueValue
      })
      const buffer = blyncCommand.getBuffer();
      expect(buffer[1]).toBe(redValue);
    });
    it('contains the blue decimal rgb value in [2]', function() {
      const blyncCommand = new BlyncCommand({
        red: redValue,
        green: greenValue,
        blue: blueValue
      })
      const buffer = blyncCommand.getBuffer();
      expect(buffer[2]).toBe(blueValue);
    });
    it('contains the green decimal rgb value in [3]', function() {
      const blyncCommand = new BlyncCommand({
        red: redValue,
        green: greenValue,
        blue: blueValue
      })
      const buffer = blyncCommand.getBuffer();
      expect(buffer[3]).toBe(greenValue);
    });
    it('describes a "none" blink value in [4]', function() {
      const blyncCommand = new BlyncCommand({
        red: redValue,
        green: greenValue,
        blue: blueValue,
        blink: "none"
      })
      const buffer = blyncCommand.getBuffer();
      expect(buffer[4]).toBe(0);
    });
    it('describes a "slow" blink value in [4]', function() {
      const blyncCommand = new BlyncCommand({
        red: redValue,
        green: greenValue,
        blue: blueValue,
        blink: "slow"
      })
      const buffer = blyncCommand.getBuffer();
      expect(buffer[4]).toBe(100);
    });
    it('describes a "fast" blink value in [4]', function() {
      const blyncCommand = new BlyncCommand({
        red: redValue,
        green: greenValue,
        blue: blueValue,
        blink: "fast"
      })
      const buffer = blyncCommand.getBuffer();
      expect(buffer[4]).toBe(70);
    });
  });
});
