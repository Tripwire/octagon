import React from 'react'
import { Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const NotificationBadge = props => {
  const { size, notificationCount, ...rest } = props

  return (
    <span className={`notificationIcon ${size}`} {...rest}>
      <Icon name='bell outline' size={size} />
      <span className={`notificationCount ${size}`}>{notificationCount}</span>
    </span>
  )
}

NotificationBadge.defaultProps = {
  notificationCount: 0
}

NotificationBadge.propTypes = {
  notificationCount: PropTypes.number
}

export default NotificationBadge
