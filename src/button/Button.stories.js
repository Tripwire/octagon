import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs'
import faker from 'faker'
import Button from './Button'

const stories = storiesOf('core.Button', module)

.addDecorator(withKnobs)
.add('with colors', () => (
  <div>
    <Button primary>primary</Button>
    <Button secondary>secondary</Button>
    <Button secondary>default</Button>
  </div>
))
.add('with sizes', () => (
  <div>
    <Button size='mini'>
      Mini
    </Button>
    <Button size='tiny'>
      Tiny
    </Button>
    <Button size='small'>
      Small
    </Button>
    <Button size='medium'>
      Medium
    </Button>
    <Button size='large'>
      Large
    </Button>
    <Button size='big'>
      Big
    </Button>
    <Button size='huge'>
      Huge
    </Button>
    <Button size='massive'>
      Massive
    </Button>
  </div>
))
.add('with icons', () => {
  const labelPos = text('Label position (left|right)', 'right')
  return (
    <div>
      <Button size='large' icon='cloud' content="Content it to the cloud!" />
      <Button size='large' icon='cloud' label="Label it to the cloud!" labelPosition={labelPos} />
    </div>
  )
})
.add('with some emoji', () => (
  <Button primary small>😀 😎 👍 💯</Button>
))
.add('with lorem', () => (
  <Button>{faker.lorem.words(2)}</Button>
))
.add('with disabled', () => {
  const disabled = boolean('Disabled', true)
  const bTxt = text('text', 'yahtzee')
  return <Button disabled={disabled}>{bTxt}</Button>
})

export default stories
