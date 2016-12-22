import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { withKnobs } from '@kadira/storybook-addon-knobs'
import Menu from './Menu'
import Segment from '../segment/Segment'
import Item from '../item/Item'

const stories = storiesOf('core.Menu', module)

.addDecorator(withKnobs)
.add('basic', () => (
  <Menu>
    <Menu.Item name='Bananas' active={false} />
    <Menu.Item name='Apples' active />
  </Menu>
))
.add('vertical', () => (
  <Menu vertical fixed={'left'} inverted>
    <Menu.Item name='account' active />
    <Menu.Item name='settings' active={false} />
  </Menu>
))
.add('vertical w/ bottom content', () => (
  <Menu vertical fixed={'left'} inverted>
    <Menu.Item name='account' active />
    <Menu.Item name='settings' active={false} />
    <Segment className='bottom aligned content' inverted attached='bottom'>
      <img width="50px" height="50px" style={{ backgroundColor: 'red' }} />
      <a>Logout</a>
    </Segment>
  </Menu>
))
.add('vertical w/ bottom content, 2nd attempt', () => (
  <Menu vertical fixed={'left'} inverted>
    <Menu.Item name='account' active />
    <Menu.Item name='settings' active={false} />
    <Item.Content verticalAlign='bottom'>
      <Segment className='bottom aligned content' inverted attached='bottom'>
        <img width='50px' height='50px' style={{ backgroundColor: 'red' }} />
        <a>Logout</a>
      </Segment>
    </Item.Content>
  </Menu>
))

export default stories
