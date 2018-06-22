import PropTypes from 'prop-types'
import React from 'react'
import alertIconUri from '../../../assets/alert-icon.svg'
import warningIconUri from '../../../assets/warning-yellow.svg'
import classnames from 'classnames'

const MessageStateIcon = props => {
  const { className, status, ...rest } = props
  let icon
  switch (status) {
    case 'critical':
      icon = alertIconUri
      break
    case 'warning':
      icon = warningIconUri
      break
  }
  return (
    <img
      className={classnames('message__state-icon', className)}
      src={icon}
      alt='icon'
      {...rest}
    />
  )
}

MessageStateIcon.defaultProps = {
  status: 'critical'
}

MessageStateIcon.propTypes = {
  status: PropTypes.string
}

export default MessageStateIcon
