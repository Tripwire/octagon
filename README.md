# octagon

<img src="https://raw.githubusercontent.com/Tripwire/octagon/master/img/octagon.png" height="80px" />

[![CircleCI](https://circleci.com/gh/Tripwire/octagon.svg?style=svg)](https://circleci.com/gh/Tripwire/octagon) ![](https://img.shields.io/badge/standardjs-%E2%9C%93-brightgreen.svg) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Greenkeeper badge](https://badges.greenkeeper.io/Tripwire/octagon.svg)](https://greenkeeper.io/)


<img src="https://raw.githubusercontent.com/Tripwire/octagon/master/img/octagon-styleguide.gif" width="50%" />

## description

octagon is a react component library. it is built on top of Semantic UI React (SUIR). You can see examples of the components and tinker with the API via our [interactive library documentation](https://tripwire.github.io/octagon/)**.

this package provides:

- a custom semantic-ui theme
- a set of supplementary react components beyond those provided by SUIR

 _note: if you are looking for a ground up framework, please instead jump directly to [semantic-ui-react](http://react.semantic-ui.com/), as this project is generally just an opionionated implementation of the SUI ecosystem._

## installation

to install and use this project within your project, simply clone the react-octagon project and use npm to install it.

`npm install --save react-octagon` or `npm add --dev react-octagon`

## usage

using octagon components in your app is easy:

- import octagon's CSS
- import components from the lib, or from SUIR

```js
import 'react-octagon/lib/styles/semantic.css'
import { Segment } from 'semantic-ui-react'
import FavoriteButton from 'react-octagon/lib/components/FavoriteButton'

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

you can interact with octagon components on our [interactive styleguide](https://tripwire.github.io/octagon/). you can also [launch this locally](#starting-the-environment), which will be especially valuable if you want to develop new components. built on [Styleguidist](https://github.com/styleguidist/react-styleguidist).

### react component api distribution

**useful** if you've `npm link`ed your front-end project with `octagon` and want to iterate on components without suffering the build/publish lifecycle for `octagon`.  you must run `npm run build` to get a fresh set of react components!

## contributing

please see [CONTRIBUTING.md](CONTRIBUTING.md) for all development.
