import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { withKnobs } from '@kadira/storybook-addon-knobs'
import Input from './Input'

const stories = storiesOf('core.Input', module)

.addDecorator(withKnobs)
.add('uncut!', () => (
  <div>
    <Input placeholder='Search...' />
  </div>
))
.add('disabled', () => (
  <div>
    <Input disabled value='IM DISABLED' />
  </div>
))
.add('with loading spinner', () => (
  <div>
    <Input loading icon='user' placeholder='Search...' />
  </div>
))

export default stories
