import React from 'react'
import Flexbox from 'flexbox-react'
import FavoriteButton from './FavoriteButton'
import { Icon } from 'semantic-ui-react'
import '../styles/components/micro-card.css'

const MicroCard = (props) => {
  console.log(props)
  return (
    <Flexbox
      flexDirection='row'
      key={props.cardContent.id}
      className={`microcard bordered`}
      style={props.style}
    >
      {
            (props.cardContent.gutter)
            ? (
              <Flexbox className='state__indicator' style={{backgroundColor: props.cardContent.gutter}} width='8px' />
            )
            : ''
        }
      <Flexbox flexDirection='column' paddingBottom='10px' paddingLeft='10px' paddingTop='5px'>
        <Flexbox className='box__header'>{props.cardContent.title}</Flexbox>
        <Flexbox flexGrow={2}>
          {props.children}
        </Flexbox>
      </Flexbox>
      <Flexbox flexGrow={2} justifyContent='flex-end'>
        {props.cardContent.count
        ? <Flexbox alignItems='flex-end' className='microcard__count'>{props.cardContent.count}</Flexbox>
              : ''
            }
      </Flexbox>
      <Flexbox>
        <Flexbox className='microcard_favorite'>
          <FavoriteButton isFavorited={props.cardContent.isFavorited} />
        </Flexbox>
        {
            (props.cardContent.showArrow)
            ? (
              <Flexbox>
                <Icon className='ei microcard__arrow-right arrow_carrot-right' />
              </Flexbox>
            ) : ''
        }
      </Flexbox>
    </Flexbox>
  )
}

MicroCard.defaultProps = {

}

MicroCard.propTypes = {
  cardContent: React.PropTypes.object

}

export default MicroCard
