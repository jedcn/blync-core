# blync-core

JavaScript Library for interacting with Embrava's
[Blynclight Standard][blynclight].

[blynclight]: http://www.embrava.com/products/blync-light

## Usage

```javascript
const BlyncCore = require('blync-core');

const blync = new BlyncCore()

// Given that RebeccaPurple is '#663399'
blync.setColorAsHex({ code: '663399' });
blync.setColorAsHex({ code: '#663399' });
blync.setColorAsHex({ red: '66', green: '33', blue: '99' });
blync.setColorAsDecimal({ red: 102, green: 51, blue: 153 });

blync.turnOff();
```
