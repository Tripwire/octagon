import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Button } from 'semantic-ui-react'

storiesOf('Button', module)
  .addDecorator((story) => (
    <div style={{maxWidth: '200px', marginTop: '15px', marginLeft: '15px'}}>
      {story()}
    </div>
  ))
  .add('Button', () => (
    <Button className='tripwire'>Copy </Button>
  ))
  .add('Disabled Button', () => (
    <Button className='tripwire' disabled >Some Copy </Button>
  ))
  .add('Active Button', () => (
    <Button className='tripwire' active>
            Some Copy
          </Button>
  ))
  .add('Positive Button', () => (
    <Button positive className='tripwire'>
      <i className='icon_check' style={{marginRight: '10px'}} />
        Positive
      </Button>
  ))
  .add('Negative Button', () => (
    <Button negative className='tripwire'>
      <i className='icon_close' style={{marginRight: '10px'}} />
        Negative
      </Button>
  ))
  .add('Icon Button', () => (
    <div>
      <div>
        <Button icon>
          <i className='icon_plus' style={{fontSize: '25px'}} />
        </Button>
        Normal
      </div>
      <div>
        <Button icon active>
          <i className='icon_plus' style={{fontSize: '25px'}} />
        </Button>
        Active
      </div>
      <div>
        <Button icon disabled>
          <i className='icon_plus' style={{fontSize: '25px'}} />
        </Button>
        Disabled
      </div>
    </div>
  ))

