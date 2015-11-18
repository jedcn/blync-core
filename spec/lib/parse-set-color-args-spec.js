const parseSetColorArgs = require('../../lib/parse-set-color-args');

describe('parseSetColorArgs', function() {
  describe('when invoked with a string', function() {
    it('recognizes a css colorname', function() {
      const result = parseSetColorArgs(['red']);
      expect(result.red).toBe(255);
      expect(result.green).toBe(0);
      expect(result.blue).toBe(0);
    });
  });
  describe('when invoked with an object', function() {
    it('recognizes a css colorname', function() {
      const result = parseSetColorArgs([{
        color: '#f00'
      }]);
      expect(result.red).toBe(255);
      expect(result.green).toBe(0);
      expect(result.blue).toBe(0);
    });
    it('recognizes a blink value', function() {
      const result = parseSetColorArgs([{
        color: '00f',
        blink: 'slow'
      }]);
      expect(result.red).toBe(0);
      expect(result.green).toBe(0);
      expect(result.blue).toBe(255);
      expect(result.blink).toBe('slow');
    });
  });
  describe('when invoked with an array', function() {
    it('presumes the array contains 3 rgb decimals', function() {
      const result = parseSetColorArgs([[128, 64, 32]]);
      expect(result.red).toBe(128);
      expect(result.green).toBe(64);
      expect(result.blue).toBe(32);
    });
  });
});
