import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { withKnobs } from '@kadira/storybook-addon-knobs'
import Menu from './Menu'
import Segment from '../segment/Segment'
import Item from '../item/Item'
import Card from '../card/Card'
import Container from '../container/Container'

import './menu.stories.css'
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
  <Menu id='mp-main-menu' vertical fixed='left' inverted>
    <Menu.Item name='account' active />
    <Menu.Item name='settings' active={false} />
    <div id='mp_menu_buffer'>{' '}</div>
    <Item.Content verticalAlign='bottom'>
      <Segment inverted>
        <a>Logout</a>
        <Card>
          <Card.Content>
            <img width='50px' height='50px' style={{ backgroundColor: 'red' }} />
            <Card.Header>
              Audrey KnowItAll
            </Card.Header>
            <Card.Meta>
              System Administrator
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Container textAlign='right'>
              <p>GREAT CONTENT HERE</p>
            </Container>
          </Card.Content>
        </Card>
      </Segment>
    </Item.Content>
  </Menu>
))

export default stories
