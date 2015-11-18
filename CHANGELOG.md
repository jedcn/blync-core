# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

### Added
- `BlyncLightManager#findAllBlyncLights()` has been added created.

### Changed

- `BlyncLight#setColor` can now take an Array. The array is presumed
  to contain three decimal RGB values, for example, to set red you
  pass: `setColor([255, 0, 0])`

### Fixed
- Nothing yet.

### Removed
- `BlyncLightManager#findfirstBlyncLight` has been removed. You can
  now access it with `findAllBlyncLights[0]`.

## [0.1.0] - 2015-11-15

Initial release.

[Unreleased]: https://github.com/jedcn/blync-core/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/jedcn/blync-core/tree/v0.1.0
