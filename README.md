# blync-core

JavaScript Library for interacting with Embrava's
[Blynclight Standard][blynclight].

[blynclight]: http://www.embrava.com/products/blync-light

## Usage

```javascript
const BlyncCore = require('blync-core');

const blync = new BlyncCore()
const rebeccaPurple = {
  hex: '663399',
  hexWithPound: '#663399',
  decimal: [102, 51, 153]
}

// RebeccaPurple
blync.setColorAsHex({ color: rebeccaPurple });
blync.setColorAsHex({ color: rebeccaPurple.hexWithPound });
blync.setColorAsDecimal({ color: rebeccaPurple.decimal });
```
