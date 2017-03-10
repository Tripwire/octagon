# react-octagon

<img src="https://raw.githubusercontent.com/Tripwire/octagon/master/img/octagon.png" height="80px" />

[ ![Codeship Status for Tripwire/octagon](https://app.codeship.com/projects/de913c80-aab0-0134-4a1e-5ab626077bc6/status?branch=master)](https://app.codeship.com/projects/192040)  ![](https://img.shields.io/badge/standardjs-%E2%9C%93-brightgreen.svg) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

octagon is a react component library.  see the latest interactive library documentation [here](https://tripwire.github.io/octagon/).

this package provides:

  - a custom semantic-ui theme,
  - a subset of _semantic-ui-react (SUIR)_ components,
  - a set of additional react components to facilitate Tripwire UI.

 **If you are looking for a ground up framework, please instead jump directly to [semantic-ui-react](http://react.semantic-ui.com/)**, as this project is generally just an opionionated implementation of the SUI ecosystem.

<img src="https://github.com/Tripwire/octagon/blob/master/img/octagon-styleguide.mov.gif?raw=true" width="50%" />

## install

`npm install --save react-octagon` or `yarn add --dev react-octagon`

## usage - react component library

octagon imports, occasionally wraps, and re-exports piece-wise components from [semantic-ui-react](http://react.semantic-ui.com/).  **you may generally refer to those docs for API usage**.

To use it:

- add octagon's CSS into your app using whatever css bundling you prefer
  - **your build system must be able to bundle static assets**.  that is, this code exports components that have code like `require('./widget.css')`
- import components from the lib

```js
import 'octagon/lib/styles/semantic.css'
import Segment from 'octagon/lib/components/suir/Segment'
import FavoriteButton from 'octagon/lib/components/FavoriteButton'

class MyWigdet () {
  render () {
    return (
      <Segment>
        <FavoriteButton isFavorited />
      </Segment>
    )
  }
}
```

## development

- clone this repository
- run `yarn`
- run `yarn start`
- open the URL to play w/ components as you develop them

now you're off to the races :horse_racing:!  theme changes, components, & examples will update automatically.  Make sure that your examples source components from within the `src/` dir!

**for information on how to adjust the theme styles**, see [THEMING.md](THEMEING.md).

### react component api distribution

**useful** if you've `yarn link`ed your front-end project with `octagon` and want to iterate on components without suffering the build/publish lifecycle for `octagon`.  You must run `yarn run build` to get a fresh set of react components!

## contributing

want to contribute?  please see [THEMEING.md](THEMEING.md) & [CONTRIBUTING.md](CONTRIBUTING.md).
