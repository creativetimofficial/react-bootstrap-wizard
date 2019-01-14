## [0.0.6] 2019-01-14
### Bug fixing
- Updated README.md
- `finishButtonClick` now triggers if the `validate` prop is `false`

## [0.0.6] 2019-01-03
### Bug fixing
- Updated README.md
## Enhancement
- Added new prop inside `steps` for sending props to the step component (`stepProps`)
- Added new boolean prop `progressbar`, which will determinate the apperance of a progressbar insted of the moving tab (**Caution: You will need to add steps.stepIcon to your steps for this to work nice**)
- Added `classnames` library to the project

## [0.0.5] 2018-08-27
### Bug fixing
- Small changes for this warning: `Can't call setState (or forceUpdate) on an unmounted component.`
- Updated README.md
## Enhancement
- Added support for collecting all states of the steps (Read the README.md for more)
- Added support for scss (it auto-compiles into css)
- Moved the styles from direct import (now you have to import the styles in your project)
- Added new prop inside `steps` for adding an icon to the `stepName`
- Small changes on how the components of the wizard are rendered

## [0.0.4] 2018-02-09
### Changes in tab margins
- Added margin left and right to moving tab

## [0.0.3] 2018-02-07
### Changes in color
- Change the color from only on navs to the whole header

## [0.0.1] 2017-12-05
### Original Release
- Added React and Reactstrap as base frameworks
- Added Creative Tim Now UI Dashboard styles
