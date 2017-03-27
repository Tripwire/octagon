import React from 'react'
import Flexbox from 'flexbox-react'
import LargeCardAction from './LargeCardAction'
import LargeCardClose from './LargeCardClose'
import LargeCardGutter from './LargeCardGutter'
import LargeCardContent from './LargeCardContent'
import LargeCardKeyValue from './LargeCardKeyValue'
import LargeCardRecentList from './LargeCardRecentList'
import LargeCardTitle from './LargeCardTitle'
import LargeCardStat from './LargeCardStat'

import '../../styles/components/large-card.css'

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
    return (
      <Flexbox className={`large_card  is-fullview-open-${this.props.showCard} ${this.props.className} `} style={this.props.style}>
        <Flexbox flexDirection='row' flexGrow={3} className={`large_card__container ` + ((this.props.framed) ? 'framed' : '')}>
          {this.props.children}
        </Flexbox>
      </Flexbox>
    )
  }
}

LargeCard.defaultProps = {
  className: '',
  framed: false
}
LargeCard.propTypes = {
  className: React.PropTypes.string,
  framed: React.PropTypes.bool
}
export default LargeCard
