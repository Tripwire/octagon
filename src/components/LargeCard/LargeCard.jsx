import React from 'react'

import ReactDOM from 'react-dom'
import Flexbox from 'flexbox-react'
import Icon from '../suir/icon/Icon'
import LargeCardAction from './LargeCardAction'
import LargeCardClose from './LargeCardClose'
import LargeCardGutter from './LargeCardGutter'
import LargeCardContent from './LargeCardContent'
import LargeCardKeyValue from './LargeCardKeyValue'
import LargeCardRecentList from './LargeCardRecentList'
import '../../styles/components/large-card.css'


class LargeCard extends React.Component {
  constructor (props) {
    super(props)
    
  }
  static Action = LargeCardAction;
  static Close = LargeCardClose;
  static Gutter = LargeCardGutter;
  static Content = LargeCardContent;
  static KeyValue = LargeCardKeyValue;
  static RecentList = LargeCardRecentList;
  render () {
    return (
      <div className={`large_card  is-fullview-open-${this.props.showCard} ${this.props.className} `} style={this.props.style}>
        <Flexbox flexDirection='row' className='large_card__container'>
          {this.props.children}
        </Flexbox>
      </div>
    )
  }
}
LargeCard.propTypes = {
    cardContent: React.PropTypes.object,
}
export default LargeCard
