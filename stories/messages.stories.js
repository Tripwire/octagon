import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Message } from 'semantic-ui-react'

storiesOf('Messages', module)
  .addDecorator((story) => (
    <div style={{maxWidth: '300px', marginTop: '15px', marginLeft: '15px'}}>
      {story()}
    </div>
  ))
  .add('Messages', () => (
    <div>
      <Message success>
        <p>Successful Message</p>
      </Message>
      <Message negative>
        <p>Negative message.</p>
      </Message>
      <Message info>
        <p>Info message.</p>
      </Message>
      <Message warning>
        <p>Warning message.</p>
      </Message>
    </div>
  ))
