import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { withKnobs } from '@kadira/storybook-addon-knobs'
import Card from './Card'
import Button from '../button/Button'
import Image from '../image/Image'
import Icon from '../icon/Icon'
import Container from '../container/Container'

const stories = storiesOf('core.Card', module)

.addDecorator(withKnobs)
.add('basic', () => (
  <Card>
    <Card.Content>
      <Image floated='right' size='mini' src='http://semantic-ui.com/images/avatar/large/steve.jpg' />
      <Card.Header>
        Steve Sanders
      </Card.Header>
      <Card.Meta>
        Friends of Elliot
      </Card.Meta>
      <Card.Description>
        Steve wants to add you to the group <strong>best friends</strong>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className='ui two buttons'>
        <Button basic color='green'>Approve</Button>
        <Button basic color='red'>Decline</Button>
      </div>
    </Card.Content>
  </Card>
))
.add('logged on user', () => (
  <Card>
    <Card.Content>
      <Image floated='right' size='mini' src='http://semantic-ui.com/images/avatar/large/steve.jpg' />
      <Card.Header>
        Audrey KnowItAll
      </Card.Header>
      <Card.Meta>
        System Administrator
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <Container textAlign='right'>
        <Button icon='settings' />
        <Button color='orange'><Icon name={'sign out'} />Log out</Button>
      </Container>
    </Card.Content>
  </Card>
))

export default stories
