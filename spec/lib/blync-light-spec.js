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
    describe('when invoked with a string', function() {
      it('recognizes a css colorname and writes the rgb', function(done) {
        this.blyncLight.setColor('red');
        expect(this.device.write).toHaveBeenCalled();
        const writeArgs = this.device.write.calls.first().args[0];
        expect(writeArgs[1]).toBe(255);
        expect(writeArgs[2]).toBe(0);
        expect(writeArgs[3]).toBe(0);
        done();
      });
      it('recognizes a 3 character hex', function(done) {
        this.blyncLight.setColor('f00');
        expect(this.device.write).toHaveBeenCalled();
        const writeArgs = this.device.write.calls.first().args[0];
        expect(writeArgs[1]).toBe(255);
        expect(writeArgs[2]).toBe(0);
        expect(writeArgs[3]).toBe(0);
        done();
      });
      it('recognizes a 3 character hex with a # sign', function(done) {
        this.blyncLight.setColor('#00f');
        expect(this.device.write).toHaveBeenCalled();
        const writeArgs = this.device.write.calls.first().args[0];
        expect(writeArgs[1]).toBe(0);
        expect(writeArgs[2]).toBe(255);
        expect(writeArgs[3]).toBe(0);
        done();
      });
      it('returns a promise that resolves with the command', function(done) {
        const promise = this.blyncLight.setColor('red');
        promise.then(function(command) {
          expect(command.getRed()).toBe(255);
          expect(command.getGreen()).toBe(0);
          expect(command.getBlue()).toBe(0);
          done();
        });
      });
      it('returns a promise that rejects for an unknown color', function(done) {
        const promise = this.blyncLight.setColor('SomeBadColor');
        promise.catch(function(error) {
          expect(error.message).toBe('Unknown Color: SomeBadColor');
          done();
        });
      });
      it('returns a promise that rejects when msg isnt sent ', function(done) {
        brokenDevice = {
          write: function(command) {
            throw new Error('Failed to Write!');
          }
        }
        blyncLight = new BlyncLight(brokenDevice);
        const promise = blyncLight.setColor('red');
        promise.catch(function(error) {
          expect(error.message).toBe('Failed to Write!');
          done();
        });
      });
    });
    describe('when invoked with an object', function() {
      it('recognizes a css colorname and writes the rgb', function(done) {
        this.blyncLight.setColor({
          color: 'red'
        })
        expect(this.device.write).toHaveBeenCalled();
        const writeArgs = this.device.write.calls.first().args[0];
        expect(writeArgs[1]).toBe(255);
        expect(writeArgs[2]).toBe(0);
        expect(writeArgs[3]).toBe(0);
        done();
      });
      it('recognizes a blink value and writes it', function(done) {
        this.blyncLight.setColor({
          color: 'blue',
          blink: 'slow'
        })
        expect(this.device.write).toHaveBeenCalled();
        const writeArgs = this.device.write.calls.first().args[0];
        expect(writeArgs[1]).toBe(0);
        expect(writeArgs[2]).toBe(255);
        expect(writeArgs[3]).toBe(0);
        expect(writeArgs[4]).toBe(100);
        done();
      });
    });
  });
  describe('#turnOff', function() {
    it('writes to the device with 0, 0, 0', function(done) {
      this.blyncLight.turnOff();
      expect(this.device.write).toHaveBeenCalled();
      const writeArgs = this.device.write.calls.first().args[0];
      expect(writeArgs[1]).toBe(0);
      expect(writeArgs[2]).toBe(0);
      expect(writeArgs[3]).toBe(0);
      done()
    });
    it('returns a promise that resolves with the command', function(done) {
      const promise = this.blyncLight.turnOff();
      promise.then(function(command) {
        expect(command.getRed()).toBe(0);
        expect(command.getGreen()).toBe(0);
        expect(command.getBlue()).toBe(0);
        done();
      });
    });
    it('returns a promise that rejects when msg isnt sent ', function(done) {
      brokenDevice = {
        write: function(command) {
          throw new Error('Failed to Write!');
        }
      }
      blyncLight = new BlyncLight(brokenDevice);
      const promise = blyncLight.turnOff();
      promise.catch(function(error) {
        expect(error.message).toBe('Failed to Write!');
        done();
      });
    });
  });
});
