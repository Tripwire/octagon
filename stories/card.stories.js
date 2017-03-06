import React from 'react'
import Flexbox from 'flexbox-react'
import { storiesOf } from '@kadira/storybook'
import MicroCard from '../src/components/MicroCard/MicroCard'
import LargeCard from '../src/components/LargeCard/LargeCard'
import colorPalette from '../src/components/colorPallete'

const card = {
  id: 0,
  isFavorited: true,
  title: 'test',
}

const largeCardContent = {
  id: 1,
}

const alertIconUri = require('../src/assets/alert-icon.svg')

function handleMe () {
  console.log('Handle the click action')
}

storiesOf('Cards', module)
  .add('Micro Card', () => (
    <div>
      <MicroCard cardContent={card} style={{marginRight: '10px'}} onClick={handleMe} >
        <MicroCard.Gutter color='critical' />
        <MicroCard.Content cardContent={card} />
        <MicroCard.Favorite isFavorited={card.isFavorited} />
        <MicroCard.Count value={27} />
        <MicroCard.Action onClick={handleMe} />
      </MicroCard>

      <MicroCard cardContent={card} style={{marginRight: '10px'}} onClick={handleMe} >
        <MicroCard.Gutter color='blue' />
        <MicroCard.Content cardContent={card}>
          <Flexbox marginRight='5px'>
            <img className='microcard__stateIcon' src={alertIconUri} alt='icon' />
          </Flexbox>
          <Flexbox flexDirection='column' justifyContent='center' className='microcard__message'>
            <h4>connection error</h4>
            <h3>DATABASE</h3>
          </Flexbox>
        </MicroCard.Content>
        <MicroCard.Favorite isFavorited={card.isFavorited} />
        <MicroCard.Count value={27} />
        <MicroCard.Action onClick={handleMe} />
      </MicroCard>

    </div>
  ))
  .add('Large Card', () => (
    <div>
      <LargeCard cardContent={largeCardContent} showCard>
        <LargeCard.Gutter color="critical" />
        <LargeCard.Close onClick={handleMe} />
        <LargeCard.Action label="test" onClick={handleMe} />
      </LargeCard>

    </div>
  ))
