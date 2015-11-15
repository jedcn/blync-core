# blync-core

JavaScript Library for interacting with Embrava's
[Blynclight Standard][blynclight].

[blynclight]: http://www.embrava.com/products/blync-light

## Usage

```javascript
const blyncCore = require('blync-core');
const blyncLight = blyncCore.findFirstBlyncLight();

// Red for a second, then blue for a second, then off.
blyncLight.setColor('red')
  .then(function() {
    setTimeout(function() {
      blyncLight.setColor('blue');
      setTimeout(function() {
        blyncLight.turnOff();
      }, 1000);
    }, 1000);
  })

// Flash blue for 5 seconds
blyncLight.setColor({
  color: 'blue',
  blink: 'slow'
}).then(function() {
    setTimeout(function() {
      blyncLight.turnOff();
    }, 5000);
  })
```

## Further Reading

[![Circle CI](https://circleci.com/gh/jedcn/blync-core.svg?style=svg)](https://circleci.com/gh/jedcn/blync-core) [![Travis](https://travis-ci.org/jedcn/blync-core.svg?branch=master)](https://travis-ci.org/jedcn/blync-core)

[An overview of blync-core][OVERVIEW.md].

[OVERVIEW.md]: OVERVIEW.md
