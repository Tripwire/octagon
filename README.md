# Octagon

<img src="https://raw.githubusercontent.com/Tripwire/octagon/master/img/octagon.png" height="80px" />

[![CircleCI](https://circleci.com/gh/Tripwire/octagon.svg?style=svg)](https://circleci.com/gh/Tripwire/octagon) ![](https://img.shields.io/badge/standardjs-%E2%9C%93-brightgreen.svg) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

<img src="https://raw.githubusercontent.com/Tripwire/octagon/master/img/octagon-styleguide.gif" width="50%" />
## Description

Octagon is a React component library. It is built on top of Semantic UI React. You can see examples of the components and tinker with the API via our [interactive library documentation](https://tripwire.github.io/octagon/)**.

This package provides:

  - a custom Semantic UI theme
  - a subset of _Semantic UI React (SUIR)_ components
  - a set of additional React components to facilitate Tripwire UI.

Semantic UI React only contains the React code (no styles), so we are bundling SUIR and Semantic UI Less in our build process. Our code contains their [React components distribution](https://github.com/Semantic-Org/Semantic-UI-React) and their [less-only distribution](https://github.com/Semantic-Org/Semantic-UI-LESS). (Note: The original Semantic UI is built on jQuery.)

 _Note: If you are looking for a ground up framework, please instead jump directly to [semantic-ui-react](http://react.semantic-ui.com/), as this project is generally just an opionionated implementation of the SUI ecosystem._

## Installation

To install and use this project within your project, simply clone this project and use npm to install it.

`npm install --save react-octagon` or `npm add --dev react-octagon`

## Usage

Using Octagon Components in your app is easy. 

- import Octagon CSS
- import components from the lib

```js
import 'react-octagon/lib/styles/semantic.css'
import Segment from 'react-octagon/lib/components/suir/Segment'
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

You can interact with Octagon components on our [Interactive Styleguide](https://tripwire.github.io/octagon/). You can also [launch this locally](#starting-the-environment), which will be especially valuable if you want to develop new components. Built on [Styleguidist](https://github.com/styleguidist/react-styleguidist). 

### React Component API Distribution

**Useful** if you've `npm link`ed your front-end project with `octagon` and want to iterate on components without suffering the build/publish lifecycle for `octagon`.  You must run `npm run build` to get a fresh set of react components!

## Development (adding components)

### Starting the environment
- Run `npm start`
- Open the URL (probably `localhost:6060`) to play w/ components as you develop them

This will launch the Styleguide. All of you changes to files are hot-reloaded. If you want to ship a production version your will need to test and build Octagon.

### Production Build

- **Build Octagon** `npm build`
-- this will create the lib bundle which will contain production build
- **Build Styleguide** 'npm run styleguide:build'
-- this will create the Styleguide to be used for testing
- **Test Octagon** `npm test`
-- tests will likely initially fail if you have created a new component or updated a component. This is because we using [Snapjerk](https://www.npmjs.com/package/snapjerk) image-diffing software.
-- if you approve of the changes Snapjerk displaysyou need to update the refset:
--- new images: set WEBJERK_ALLOW_NEW_IMAGES=1 in your env
--- new changed images: set WEBJERK_APPROVE_CHANGES=1 in your env
--- removed images: simplying remove the images from your reference set

### Building Components

#### React-based Functional Stateless Components
We are using React-Redux for Octagon Components. Octagon Components are considered View-Layer components and should generally be Functional Stateless Components (with exceptions for ephemeral state needed for internal component functioning, see [ADR002](https://github.com/Tripwire/octagon/blob/master/doc/architecture/decisions/0002-components-shall-be-stateless-by-default.md)).
- How to handle state is decided by the app (e.g. dealing with page number errors or and actual page number)
- Positioning of the component will be decided by the app (e.g. 4px padding on the right and left)

```js

<div style={{padding: '4px 0'}}>
  <PaginationControl
    page={state.page}
    totalPages={20}
    onPageChange={obj => {
      if (obj.error) {
        console.error(obj.error)
      } else {
        setState({ page: obj.page}) 
      }
    }}
  />
</div>

```

#### Native Octagon Component Styles

Native Octagon Components use [cssnext](http://cssnext.io) and should follow [BEM CSS Standards](https://en.bem.info/methodology/css/). The styles belows show a block, element, and modifier.

```css
.pagination {
  display: inline-block;
  height: 30px;
  color: #657d8e;
  margin: 0 4px;
  background-color: white;
}

.pagination__button {
  border: 1px solid #bdc3c7;
  color: #657d8e;
  background-color: white;
  cursor: pointer;
  display: inline-block;
  padding: 0px;
  font-size: 28px;
  max-height: 30px;
}

.pagination__page-number_total-pages-unknown {
  font-size: 20px;
  line-height: 15px;
  vertical-align: baseline;
}

```

#### SUIR Octagon Component Styles

SUIR Octagon components use LESS for styling. More information can be found on [Semantic UI's themeing page](https://semantic-ui.com/usage/theming.html). To theme SUIR components, navigate to your theme folder and add your styles in the to the component's: `.variables` and `.overides` files.
(e.g. button.variables & button.overrides)


## Contributing

Please see [CONTRIBUTING.md](CONTRIBUTING.md).

## Resources
[BEM](https://en.bem.info/methodology/css)

[CSS Next](http://cssnext.io/)

[React](https://reactjs.org)

[Redux](https://redux.js.org)

[Semantic UI](https://semantic-ui.com)

[Semantic UI React](https://react.semantic-ui.com/introduction)

[Semantic UI Less](https://github.com/Semantic-Org/Semantic-UI-LESS)


[Snapjerk](https://www.npmjs.com/package/snapjerk)

[Styleguidist](https://github.com/styleguidist/react-styleguidist)
