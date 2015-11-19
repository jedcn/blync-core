# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

The API is not yet locked-- it is under 1.0.0.

## [Unreleased]

### Added
- Nothing yet.

### Changed
- Nothing yet.

### Fixed
- Nothing yet.

### Removed
- Nothing yet.

## [0.2.0] - 2015-11-18

### Added
- `BlyncLightManager#findAllBlyncLights()` has been added.

### Changed

- `BlyncLight#setColor` can now take an Array. The array is presumed
  to contain three decimal RGB values, for example, to set red you
  pass: `setColor([255, 0, 0])`
- `BlyncLightManager#_blyncLightDevices` now returns devices in sorted
  order. This was changed because I noticed that devices were returned
  in random order from `HID.devices()` when I had two BlyncLights
  plugged in.

### Fixed
- Nothing yet.

### Removed
- `BlyncLightManager#findfirstBlyncLight` has been removed. You can
  get the equivalent value with `findAllBlyncLights[0]`.

## [0.1.0] - 2015-11-15

Initial release.

[Unreleased]: https://github.com/jedcn/blync-core/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/jedcn/blync-core/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/jedcn/blync-core/tree/v0.1.0
