# Overview

This project provides node bindings for manipulating an Embrava
Blynclight.

This Blynclight can only be set to a color and it has limited blinking
capability. It cannot change its brightness level, nor does it provide
true fidelity for RGB colors.

If you have a single Blynclight plugged in, you can get access to it
as follows:

```javascript
const blyncCore = require('blync-core');
const blyncLight = blyncCore.findFirstBlyncLight();
```

You can change color by invoking `setColor` and passing in a css color
name or a hex value:

```javascript
blyncLight.setColor('magenta');
```

```javascript
blyncLight.setColor('#f00'); // Red
```

```javascript
blyncLight.setColor('00f'); // Blue
```

You can also pass an object to `setColor` if you would like to make it
blink:

```javascript
blyncLight.setColor({
  color: 'RebeccaPurple',
  blink: 'slow'
});
```

`setColor` is synchronous, but it returns a promise, and so you can
`.then()` after it.

When you are done, you can turn off the light:

```javascript
blyncLight.turnOff();
```

And this is equivalent to changing to the color black:

```javascript
blyncLight.setColor('000'); // Also turns off
```

## Supported Lights

This project was built to support the following setup:

* node > 4.0
* MacOS El Capitan
* A standard blynclight that has the following on the bottom:
  `BLYNCUSB30-151`

It will be a happy coincidence if it works with other operating
systems or other Blynclights.

## Upcoming Changes

Several projects will be built around the v0.1.0 API and, if it is
satisfactory, it will become 1.0.0.

Any changes will be referenced in the [CHANGELOG][CHANGELOG.md].

[CHANGELOG.md]: CHANGELOG.md

## Development

Start local development by cloning the repository and running:

* `npm install`
* `npm test`

Code should adhere to project coding standards. These can be verified
and enforced with:

* `npm run lint`

## Tests

Tests are written so that they can run whether or not a Blynclight is
plugged in.

They are also run as part of a Continuous Integration system. However,
default containers in both circle and travis cannot pass if
`require('node-hid')` is run during the tests.

To work around this, the the testing infrastructure has been modified
to *not* run tests that `require('node-hid')` if an environment
variable is set as follows:

```shell
SHOULD_RUN_HID_TESTS=false
```

The `blync-core` project in both circle and travis has been configured
to use this environment variable with this value.

### Running without `node-hid`

If you are on MacOs `require('node-hid')` doesn't cause any problems
and it is hard to predict when ci builds will fail.

To simulate the limitations of the ci build (ie: being unable to
`require('node-hid')` you can do:

```shell
rm -rf node_modules/node-hid && npm test
```

Some tests will fail if you do this, and you will see them fail with
an error message like:

    Error: Cannot find module 'node-hid'

This is similar to what would happen if you ran on circle-ci or
travis. Those systems are different in how they would fail (travis):

    Error: libusb-1.0.so.0: cannot open shared object file: No such file or directory

Or (circle-ci):

    cannot initialize hidapi (hid_init failed)
    Aborted (core dumped)

However, if you set the environment variable to `false` then the test
suite should be able to run even without having `node-hid` installed:

```shell
rm -rf node_modules/node-hid && SHOULD_RUN_HID_TESTS=false npm test
```

Even though `node-hid` is vital to the functioning of this library,
the majority of code does not use it, and so you can still get a
decent test run in by mocking it out or avoiding it.

## Releases

It is my intent to only release with passing tests and lint:

* `npm run lint`
* `npm test`

And I will tag each release.
