import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Menu, Segment } from 'semantic-ui-react'

storiesOf('Menu', module)

    .add('Tabs', () => (
      <div>
        <Menu attached='top' tabular>
          <Menu.Item name='First' active />
          <Menu.Item name='Second' />
          <Menu.Item name='Third' />
        </Menu>
        <Segment attached='bottom'>
          <img src='http://semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
      </div>
    ))
