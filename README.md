# octagon

<img src="https://raw.githubusercontent.com/Tripwire/octagon/master/img/octagon.png" height="80px" />

[![CircleCI](https://circleci.com/gh/Tripwire/octagon.svg?style=svg)](https://circleci.com/gh/Tripwire/octagon) ![](https://img.shields.io/badge/standardjs-%E2%9C%93-brightgreen.svg) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

<img src="https://raw.githubusercontent.com/Tripwire/octagon/master/img/octagon-styleguide.gif" width="50%" />

## description

octagon is a react component library. it is built on top of Semantic UI React. You can see examples of the components and tinker with the API via our [interactive library documentation](https://tripwire.github.io/octagon/)**.

this package provides:

  - a custom semantic-ui theme
  - a subset of _semantic-ui-eact (SUIR)_ components
  - a set of additional react components to facilitate Tripwire UI.

SUIR only contains the react code (no styles), so we are bundling SUIR and semantic-ui-less in our build process. our code contains their [react components distribution](https://github.com/Semantic-Org/Semantic-UI-React) and their [less-only distribution](https://github.com/Semantic-Org/Semantic-UI-LESS). (note: the original Semantic UI is built on jQuery.)

 _note: if you are looking for a ground up framework, please instead jump directly to [semantic-ui-react](http://react.semantic-ui.com/), as this project is generally just an opionionated implementation of the SUI ecosystem._

## installation

to install and use this project within your project, simply clone the react-octagon project and use npm to install it.

`npm install --save react-octagon` or `npm add --dev react-octagon`

## usage

using octagon components in your app is easy. 

- import octagon CSS
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

you can interact with octagon components on our [interactive styleguide](https://tripwire.github.io/octagon/). you can also [launch this locally](#starting-the-environment), which will be especially valuable if you want to develop new components. built on [Styleguidist](https://github.com/styleguidist/react-styleguidist). 

### react component api distribution

**useful** if you've `npm link`ed your front-end project with `octagon` and want to iterate on components without suffering the build/publish lifecycle for `octagon`.  you must run `npm run build` to get a fresh set of react components!

## development (adding components)

### starting the environment
- run `npm start`
- open the URL (probably `localhost:6060`) to play w/ components as you develop them

this will launch the Styleguide. all of you changes to files are hot-reloaded. if you want to ship a production version your will need to test and build octagon.

### production build

- **build octagon** `npm build`
-- this will create the lib bundle which will contain production build
- **build styleguide** 'npm run styleguide:build'
-- this will create the Styleguide to be used for testing
- **test octagon** `npm test`
-- tests will likely initially fail if you have created a new component or updated a component. this is because we using [Snapjerk](https://www.npmjs.com/package/snapjerk) image-diffing software.
-- if you approve of the changes Snapjerk displaysyou need to update the refset:
--- new images: set WEBJERK_ALLOW_NEW_IMAGES=1 in your env
--- new changed images: set WEBJERK_APPROVE_CHANGES=1 in your env
--- removed images: simplying remove the images from your reference set

### building components

#### react-based functional stateless components
octagon components are considered view-layer components and should generally be functional stateless components (see [ADR002](https://github.com/Tripwire/octagon/blob/master/doc/architecture/decisions/0002-components-shall-be-stateless-by-default.md)).
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

#### native octagon component styles

native octagon components use [cssnext](http://cssnext.io) and should follow [BEM CSS Standards](https://en.bem.info/methodology/css/). the styles belows show a block, element, and modifier.

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

#### SUIR octagon component styles

SUIR octagon components use LESS for styling. more information can be found on [Semantic UI's themeing page](https://semantic-ui.com/usage/theming.html). to theme SUIR components, navigate to your theme folder and add your styles in the to the component's: `.variables` and `.overides` files.
(e.g. button.variables & button.overrides)

## contributing

please see [CONTRIBUTING.md](CONTRIBUTING.md) for all development.

## resources
[BEM](https://en.bem.info/methodology/css)

[CSS Next](http://cssnext.io/)

[React](https://reactjs.org)

[Semantic UI](https://semantic-ui.com)

[Semantic UI React](https://react.semantic-ui.com/introduction)

[Semantic UI Less](https://github.com/Semantic-Org/Semantic-UI-LESS)

[Snapjerk](https://www.npmjs.com/package/snapjerk)

[Styleguidist](https://github.com/styleguidist/react-styleguidist)
