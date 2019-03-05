# Changelog
All notable changes to this project will be documented in this file.

## [1.1.1] - 2019-03-05

### Fixed
- do no longer calc with `scrollHeight` use `offsetHeight`

## [1.1.0] - 2019-03-05

### Changed
- event listener handling, make usage of `@huh/contao-utils-bundle`
- plugin name from `scroll-toggle` to `@hundh/scroll-toggle`
- on `window.load` add `scroll-hide` class if offSetTop matches toggle conditions 

## [1.0.1] - 2018-10-29

### Added
- `data-init-show` option to hide element also if offset is below document.scrollTop

## [1.0.0] - 2018-10-29

### Added
- Initial version
