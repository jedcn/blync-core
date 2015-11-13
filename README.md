# blync-core

JavaScript Library for interacting with Embrava's
[Blynclight Standard][blynclight].

[blynclight]: http://www.embrava.com/products/blync-light

## Usage

```javascript
const blyncCore = require('blync-core');
const blyncLight = blyncCore.findFirstBlyncLight();

blyncLight.setColor('#f00');            // Red
blyncLight.setColor('blue');            // Blue
blyncLight.setColor('RebeccaPurple');   // Any CSS color
blyncLight.turnOff()
```
