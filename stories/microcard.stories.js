import React from 'react'
import Flexbox from 'flexbox-react'
import { storiesOf } from '@kadira/storybook'
import MicroCard from '../src/components/MicroCard'
import colorPalette from '../src/components/colorPallete'

const card = {
  id: 0,
  gutter: colorPalette.red,
  isFavorited: true,
  title: 'test',
  showArrow: true
}

const cardSecond = {
  id: 1,
  isFavorited: false,
  title: 'second test',
  showArrow: true,
  count: 28
}

const alertIconUri = require('../src/assets/alert-icon.svg')

storiesOf('Micro Card', module)
  .add('Micro Card', () => (
    <div>
      <MicroCard cardContent={card} style={{marginRight: '10px'}}>
        <Flexbox flexDirection='row'>
          <Flexbox marginRight='5px'>
            <img className='microcard__stateIcon' src={alertIconUri} alt='icon' />
          </Flexbox>
          <Flexbox flexDirection='column' justifyContent='center' className='microcard__message'>
            <h4>connection error</h4>
            <h3>DATABASE</h3>
          </Flexbox>
        </Flexbox>
      </MicroCard>

      <MicroCard cardContent={cardSecond} >
        <Flexbox flexDirection='row'>
          <Flexbox marginRight='5px'>
            <img className='microcard__stateIcon' src={alertIconUri} alt='icon' />
          </Flexbox>
          <Flexbox flexDirection='column' justifyContent='center' className='microcard__message'>
            <h4>connection error</h4>
            <h3>DATABASE</h3>
          </Flexbox>
        </Flexbox>
      </MicroCard>

    </div>
  ))
