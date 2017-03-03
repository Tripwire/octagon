import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Radio, Dropdown, Input, Button, Popup, Checkbox } from 'semantic-ui-react'
import FavoriteButton from '../src/components/FavoriteButton'
import StopStartButton from '../src/components/StopStartButton'
import PaginationControl from '../src/components/PaginationControl'
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

const paginationSampleData = [
  { text: '1w', value: '1w' },
  { text: '2w', value: '2w' },
  { text: '1m', value: '1m' },
  { text: '1w', value: '1w' },
  { text: '2w', value: '2w' },
  { text: '1m', value: '1m' },
  { text: '1w', value: '1w' },
  { text: '2w', value: '2w' },
  { text: '1m', value: '1m' },
  { text: '1w', value: '1w' },
  { text: '2w', value: '2w' },
  { text: '1m', value: '1m' },
  { text: '1w', value: '1w' },
  { text: '2w', value: '2w' },
  { text: '1m', value: '1m' }
]

function nextPage () {
  // handle your pagination
}

storiesOf('Interactive Controls', module)
  .addDecorator((story) => (
    <div style={{marginTop: '15px', marginLeft: '15px'}}>
      {story()}
    </div>
  ))
  .add('Radio Toggle', () => (
    <Radio toggle />
  ))
   .add('Radio Button', () => (
     <div>
       <div>
         <Radio />
        Standard
      </div>
       <div>
         <Radio disabled />
       Disabled
      </div>
       <div>
         <Radio checked disabled />
       Checked Disabled
      </div>
       <br />
      Reference Semantic UI documentation for usage: <a href='http://react.semantic-ui.com/addons/radio' target='_new'> here </a>
     </div>
  ))
   .add('Checkbox', () => (
     <div>
       <div>
         <Checkbox />
          Standard
      </div>
       <div>
         <Checkbox checked />
        Checked
      </div>
       <div>
         <Checkbox disabled />
        Disabled
      </div>
       <div>
         <Checkbox checked disabled />
        Checked Disabled
      </div>

       <br />
      Reference Semantic UI documentation for usage: <a href='http://react.semantic-ui.com/modules/checkbox' target='_new'> here </a>
     </div>
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
          positioning='top right'
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
        <br />
        Normal
      </div>
      <div>
        <Input error />
        <br />
        Error
      </div>
      <div>
        <Input focus />
        <br />
        Normal
      </div>
      <div>
        <Input disabled />
        <br />
        Disabled
      </div>
      <div>
        <Input
          icon='search'
          placeholder='Browse / Search: Tag, Group, or Operation'
          style={{width: '400px'}}
        />
        <br />
        Search
      </div>
    </div>

  ))
  .add('Pagination Controls', () => (
    <div>
      <PaginationControl
        totalItems={paginationSampleData.length}
        perPage={5}
        navigateToPage={nextPage}
        controlsDisabled={false}
      />
    </div>

  ))
