import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Radio, Dropdown, Input, Button, Popup } from 'semantic-ui-react'
import FavoriteButton from '../src/components/FavoriteButton'
import StopStartButton from '../src/components/StopStartButton'
import '../src/styles/app.css'

const dropdownOptions = [
  { text: 'All', value: 'all' },
  { text: 'prod.1.console', value: 'io' },
  { text: 'prod.2.console', value: 'groups' },
  { text: 'prod.3.console', value: 'tasktypes' }
]
const dropdownOptionsTime = [
  { text: '1w', value: '1w' },
  { text: '2w', value: '2w' },
  { text: '1m', value: '1m' }
]

storiesOf('Interactive Controls', module)
  .addDecorator((story) => (
    <div style={{maxWidth: '200px', marginTop: '15px', marginLeft: '15px'}}>
      {story()}
    </div>
  ))
  .add('Radio Toggle', () => (
    <Radio toggle />
  ))
   .add('Radio Button', () => (
     <Radio />
  ))
  .add('Dropdown Menu', () => (
    <Dropdown placeholder='Select Country' selection options={dropdownOptions} defaultValue={dropdownOptions[0].value} />
  ))
  .add('Time Selection Dropdown', () => (
    <Dropdown
      options={dropdownOptionsTime}
      icon={<i className='icon_clock_alt'
        style={{fontSize: '23px', marginLeft: '5px'}} />}
      defaultValue={dropdownOptionsTime[0].value}
      />
  ))
  .add('Favorite Button', () => (
    <div>
      <FavoriteButton isFavorited />
      <FavoriteButton isFavorited={false} />
    </div>
  ))
  .add('Operation Control', () => (
    <div>
      <StopStartButton isStopped={false} style={{fontSize: '25px'}} />
      <StopStartButton isStopped style={{fontSize: '25px'}} />
    </div>
  ))
  .add('Popup Neutral', () => (
    <div>
      <div>
        <Popup
          trigger={<Button className='tripwire'>Popup Neutral</Button>}
          content='Neutral Popup Content'
          className='grey'
          positioning='bottom left'
        />
      </div>
      <br /><br />
      <div>
        <Popup
          trigger={<Button className='tripwire'>Popup Critical</Button>}
          content='Critical Popup Content'
          className='red'
          positioning='bottom left'
        />
      </div>
      <br /><br />
      <div>
        <Popup
          trigger={<Button className='tripwire'>Popup Warning</Button>}
          content='Warning Popup Content'
          className='yellow'
          positioning='bottom left'
        />
      </div>
    </div>
  ))
  .add('Input', () => (
    <div>
      <div>
        <Input />
        Normal
      </div>
      <div>
        <Input error />
        Error
      </div>
      <div>
        <Input focus />
        Focused
      </div>
      <div>
        <Input disabled />
        disabled
      </div>
      <div>
        <Input
          icon='search'
          placeholder='Browse / Search: Tag, Group, or Operation'
          style={{width: '400px'}}
        />
      Search
      </div>
    </div>

  ))
