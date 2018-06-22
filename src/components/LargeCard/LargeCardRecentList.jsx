import Flexbox from 'flexbox-react'
import PropTypes from 'prop-types'
import React from 'react'
import { Icon } from 'semantic-ui-react'

/**
 * A context specific component, intended to display _states_ of items in a list.
 * Items shall have an iterface including keys { id, state }, where state is one
 * of `[critical, warning, normal]`
 */
const LargeCardRecentList = props => {
  const { items, ...rest } = props
  return (
    <Flexbox flexDirection='column' flexGrow={1} {...rest}>
      <h4 className='label'>Recent</h4>
      {items.map(({ id, state, status, date }) => {
        let icon = ''
        switch (state) {
          case 'warning':
            icon = 'icon_error-triangle_alt'
            break
          case 'critical':
            icon = 'icon_error-circle_alt'
            break
          default:
            icon = 'icon_check_alt2'
        }
        return (
          <Flexbox
            key={id}
            flexDirection='row'
            className={`recent_list-${state} recent__activity__row`}
          >
            <Flexbox
              className={`recent_list-${state}`}
              alignItems='center'
              marginRight='20px'
            >
              <Icon className={`ei ${icon} text-large`} />
            </Flexbox>
            <Flexbox
              className={`text-uppercase text-small recent_list-${state}`}
              alignItems='center'
              marginRight='20px'
            >
              {status}
            </Flexbox>
            <Flexbox
              className={`text-uppercase text-small recent_list-${state}`}
              alignItems='center'
            >
              {date}
            </Flexbox>
          </Flexbox>
        )
      })}
    </Flexbox>
  )
}
LargeCardRecentList.STATES = ['critical', 'normal', 'warning']

LargeCardRecentList.defaultProps = {}

LargeCardRecentList.propTypes = {
  /**
   * Array of items to render into recent list
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      state: PropTypes.oneOf(LargeCardRecentList.STATES).isRequired,
      status: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    })
  )
}

export default LargeCardRecentList
