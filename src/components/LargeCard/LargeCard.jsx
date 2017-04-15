import '../../styles/components/large-card.css'
import Flexbox from 'flexbox-react'
import React from 'react'
import filterAttributesFromProps from '../../util/externalAttributeFilter'
import LargeCardAction from './LargeCardAction'
import LargeCardClose from './LargeCardClose'
import LargeCardContent from './LargeCardContent'
import LargeCardGutter from './LargeCardGutter'
import LargeCardKeyValue from './LargeCardKeyValue'
import LargeCardRecentList from './LargeCardRecentList'
import LargeCardStat from './LargeCardStat'
import LargeCardTitle from './LargeCardTitle'

class LargeCard extends React.Component {
  static Action = LargeCardAction;
  static Close = LargeCardClose;
  static Gutter = LargeCardGutter;
  static Content = LargeCardContent;
  static KeyValue = LargeCardKeyValue;
  static RecentList = LargeCardRecentList;
  static Title = LargeCardTitle;
  static Stat = LargeCardStat;

  render () {
    const externalAttributes = filterAttributesFromProps(this.props)
    return (
      <Flexbox
        {...externalAttributes}
        className={`large_card is-fullview-open-${this.props.showCard} ${this.props.className}`}
        style={this.props.style}>
        <Flexbox
          flexDirection='row'
          flexGrow={3}
          className={`large_card__container ` + ((this.props.framed) ? 'framed' : '')}>
          {this.props.children}
        </Flexbox>
      </Flexbox>
    )
  }
}

LargeCard.defaultProps = {
  className: '',
  framed: false,
  showCard: false
}
LargeCard.propTypes = {
  className: React.PropTypes.string,
  framed: React.PropTypes.bool,
  showCard: React.PropTypes.bool
}
export default LargeCard
