import '../../styles/components/large-card.css'
import Flexbox from 'flexbox-react'
import PropTypes from 'prop-types'
import React from 'react'
import LargeCardAction from './LargeCardAction'
import LargeCardClose from './LargeCardClose'
import LargeCardContent from './LargeCardContent'
import LargeCardGutter from './LargeCardGutter'
import LargeCardKeyValue from './LargeCardKeyValue'
import LargeCardRecentList from './LargeCardRecentList'
import LargeCardStat from './LargeCardStat'
import LargeCardTitle from './LargeCardTitle'
import classnames from 'classnames'

const LargeCard = props => {
  const { children, className, framed, showCard, style, ...rest } = props
  return (
    <Flexbox
      className={classnames(
        'octagon',
        'large_card',
        showCard && 'is-fullview-open',
        className
      )}
      {...rest}
    >
      <Flexbox
        flexDirection='row'
        flexGrow={3}
        className={classnames('large_card__container', framed && 'framed')}
      >
        {children}
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
  framed: false,
  showCard: false
}
LargeCard.propTypes = {
  /**
   * Pad the card inside of a gray border
   */
  framed: PropTypes.bool,
  /**
   * Render the card
   * @deprecated Rendering will be the default mode in the future.  Components
   * controlling their own complete render state is an antipattern
   */
  showCard: PropTypes.bool
}
export default LargeCard
