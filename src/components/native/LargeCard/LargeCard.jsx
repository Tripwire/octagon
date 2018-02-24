import '../../../styles/components/large-card.css'
import Flexbox from 'flexbox-react'
import PropTypes from 'prop-types'
import React from 'react'
import filterAttributesFromProps from '../../../util/externalAttributeFilter'
import LargeCardAction from './LargeCardAction'
import LargeCardClose from './LargeCardClose'
import LargeCardContent from './LargeCardContent'
import LargeCardGutter from './LargeCardGutter'
import LargeCardKeyValue from './LargeCardKeyValue'
import LargeCardRecentList from './LargeCardRecentList'
import LargeCardStat from './LargeCardStat'
import LargeCardTitle from './LargeCardTitle'

const LargeCard = (props) => {
  const externalAttributes = filterAttributesFromProps(props)
  return (
    <Flexbox
      {...externalAttributes}
      className={`octagon large_card is-fullview-open-${props.showCard} ${props.className}`}
      style={props.style}>
      <Flexbox
        flexDirection='row'
        flexGrow={3}
        className={`large_card__container ` + ((props.framed) ? 'framed' : '')}>
        {props.children}
      </Flexbox>
    </Flexbox>
  )
}

LargeCard.Action = LargeCardAction
LargeCard.Close = LargeCardClose
LargeCard.Gutter = LargeCardGutter
LargeCard.Content = LargeCardContent
LargeCard.KeyValue = LargeCardKeyValue
LargeCard.RecentList = LargeCardRecentList
LargeCard.Title = LargeCardTitle
LargeCard.Stat = LargeCardStat

LargeCard.defaultProps = {
  className: '',
  framed: false,
  showCard: false
}
LargeCard.propTypes = {
  className: PropTypes.string,
  framed: PropTypes.bool,
  showCard: PropTypes.bool
}
export default LargeCard
