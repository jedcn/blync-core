# blync-core

JavaScript Library for interacting with Embrava's
[Blynclight Standard][blynclight].

[blynclight]: http://www.embrava.com/products/blync-light

## Usage

Get a reference to the BlyncLight attached to your computer:

```javascript
const blyncCore = require('blync-core');
const blyncLight = blyncCore.findAllBlyncLights()[0];
```

The `blyncLight` reference above has a method named `setColor`.

This method works with values like `#f00` or `#ff00cc` or with CSS
color names like `indigo` or `MediumSeaGreen`.

```javascript
blyncLight.setColor('indigo');
```

The `setColor` function returns a promise, and so you can call `then()`
on the result:

```javascript
// Red for a second, then blue for a second, then off.
blyncLight.setColor('red');
  .then(function() {
    setTimeout(function() {
      blyncLight.setColor('blue');
      setTimeout(function() {
        blyncLight.turnOff();
      }, 1000);
    }, 1000);
  })
```

The BlyncLight has a built in "blink" capability, and you can provide
values of `none`, `slow`, or `fast` when setting a color:

```javascript
// Flash blue for 5 seconds
blyncLight.setColor({
  color: 'blue',
  blink: 'slow'
});
```

When you are done, you can turn it off:

```javascript
blyncLight.turnOff();
```

## Further Reading

[![Circle CI](https://circleci.com/gh/jedcn/blync-core.svg?style=svg)](https://circleci.com/gh/jedcn/blync-core) [![Travis](https://travis-ci.org/jedcn/blync-core.svg?branch=master)](https://travis-ci.org/jedcn/blync-core)

[An overview of blync-core][OVERVIEW.md].

[OVERVIEW.md]: OVERVIEW.md
