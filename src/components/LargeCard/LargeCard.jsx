import React from 'react'

import ReactDOM from 'react-dom'
import Flexbox from 'flexbox-react'
import { Icon } from 'semantic-ui-react'
import LargeCardAction from './LargeCardAction'
import LargeCardClose from './LargeCardClose'
import LargeCardGutter from './LargeCardGutter'
import '../../styles/components/large-card.css'


class LargeCard extends React.Component {
  constructor (props) {
    super(props)
    
  }
  static Action = LargeCardAction;
  static Close = LargeCardClose;
  static Gutter = LargeCardGutter;

  render () {
    return (
      <div className={`console__box__fullview  is-fullview-open-${this.props.showCard}`}>
        <Flexbox flexDirection='row' className='console__box__fullview__container' height='275px'>

        
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
