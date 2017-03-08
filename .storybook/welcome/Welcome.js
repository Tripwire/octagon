import React from 'react'
import Markdown from 'react-remarkable'
import Octagon from '../../img/octagon'

const md = `
# octagon

**Octagon** is UI component development environment.  This is an implementation of [react-storybook](https://github.com/kadirahq/react-storybook) to showcase & play with our components.

A storybook is a composition of many stories.  A story is a single state of one or more UI components. You can have as many stories as you want. Basically a story is like a visual test case.  Check out the stories inside the \`src/<component>/\` directories.

## Bundled Stories

Octagon exports two types of components:

- Octagon native components
- [semantic-ui-react](http://react.semantic-ui.com/) native components, with a custom theme applied

Octagon native components are simply components that our teams need to build apps with that _are not provided by default_ from semantic-ui-react (SUIR). **It is always preferred to use the SUIR components** when building apps with Octagon than use your own!  Such efforts improve homogeneity in Octagon apps!
`

export default class Welcome extends React.Component {
  showApp (evt) {
    evt.preventDefault()
    if (this.props.showApp) this.props.showApp()
  }

  render () {
    return (
      <div style={{padding: '2em'}}>
        <Octagon />
        <Markdown>{md}</Markdown>
      </div>
    )
  }
}
