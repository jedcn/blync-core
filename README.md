# blync-core

JavaScript Library for interacting with Embrava's
[Blynclight Standard][blynclight].

[blynclight]: http://www.embrava.com/products/blync-light

## Usage

```javascript
const blyncLight = require('blync-core').findFirstBlyncLight()

// Given that RebeccaPurple is '#663399'
blyncLight.setColorAsHex({ code: '663399' });
blyncLight.setColorAsHex({ code: '#663399' });
blyncLight.setColorAsHex({ red: '66', green: '33', blue: '99' });
blyncLight.setColorAsDecimal({ red: 102, green: 51, blue: 153 });

blync.turnOff();
```
