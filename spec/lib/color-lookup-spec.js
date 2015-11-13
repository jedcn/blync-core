const colorLookup = require('../../lib/color-lookup');

describe('colorLookup', function() {
  it('can lookup css names', function() {
    const properCaseResult = colorLookup('Magenta');
    const lowerCaseResult = colorLookup('magenta');
    expect(properCaseResult).toEqual(lowerCaseResult);

    expect(lowerCaseResult[0]).toEqual(255);
    expect(lowerCaseResult[1]).toEqual(0);
    expect(lowerCaseResult[2]).toEqual(255);
  });

  it('can lookup rebeccapurple', function() {
    const properCaseResult = colorLookup('RebeccaPurple');
    const lowerCaseResult = colorLookup('rebeccapurple');
    expect(properCaseResult).toEqual(lowerCaseResult);
    expect(lowerCaseResult[0]).toEqual(102);
    expect(lowerCaseResult[1]).toEqual(51);
    expect(lowerCaseResult[2]).toEqual(153);
  });

  it('can lookup hex values', function() {
    const sixResult = colorLookup('#aabbcc');
    const threeResult = colorLookup('#abc');
    const noHashResult = colorLookup('aabbcc');
    expect(sixResult).toEqual(threeResult);
    expect(sixResult).toEqual(noHashResult);
    expect(sixResult[0]).toEqual(170);
    expect(sixResult[1]).toEqual(187);
    expect(sixResult[2]).toEqual(204);
  });
});
