import PropTypes from 'prop-types'
import React from 'react'
import Flexbox from 'flexbox-react'
import MicroCardGutter from './MicroCardGutter'
import MicroCardAction from './MicroCardAction'
import MicroCardFavorite from './MicroCardFavorite'
import MicroCardContent from './MicroCardContent'
import MicroCardCount from './MicroCardCount'
import '../../../styles/components/micro-card.css'
import filterAttributesFromProps from '../../../util/externalAttributeFilter'

const MicroCard = props => {
  const externalAttributes = filterAttributesFromProps(props)
  return (
    <Flexbox
      {...externalAttributes}
      flexDirection='row'
      key={props.cardContent.id}
      className={`octagon microcard bordered ${props.className}`}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </Flexbox>
  )
}

MicroCard.Gutter = MicroCardGutter
MicroCard.Action = MicroCardAction
MicroCard.Favorite = MicroCardFavorite
MicroCard.Content = MicroCardContent
MicroCard.Count = MicroCardCount
MicroCard.propTypes = {
  cardContent: PropTypes.object
}

export default MicroCard
