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

class MicroCard extends React.Component {
  static Gutter = MicroCardGutter;
  static Action = MicroCardAction;
  static Favorite = MicroCardFavorite;
  static Content = MicroCardContent;
  static Count = MicroCardCount;
  render () {
    const externalAttributes = filterAttributesFromProps(this.props)
    return (
      <Flexbox {...externalAttributes}
        flexDirection='row'
        key={this.props.cardContent.id}
        className={`microcard bordered ${this.props.className}`}
        style={this.props.style}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </Flexbox>
    )
  }
}

MicroCard.propTypes = {
  cardContent: PropTypes.object
}

export default MicroCard
