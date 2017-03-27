import React from 'react'
import Flexbox from 'flexbox-react'
import MicroCardGutter from './MicroCardGutter'
import MicroCardAction from './MicroCardAction'
import MicroCardFavorite from './MicroCardFavorite'
import MicroCardContent from './MicroCardContent'
import MicroCardCount from './MicroCardCount'
import '../../styles/components/micro-card.css'

class MicroCard extends React.Component {
  static Gutter = MicroCardGutter;
  static Action = MicroCardAction;
  static Favorite = MicroCardFavorite;
  static Content = MicroCardContent;
  static Count = MicroCardCount;
  render () {
    return (
      <Flexbox
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
  cardContent: React.PropTypes.object
}

export default MicroCard
