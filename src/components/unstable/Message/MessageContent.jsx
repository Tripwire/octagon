import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'

const ContentMessage = props => {
  const { children, className, status, ...rest } = props
  let statusClassName
  if (status === ContentMessage.STATUSES.CRITICAL) {
    statusClassName = 'text-critical'
  } else if (status === ContentMessage.STATUSES.WARNING) {
    statusClassName = 'text-warning'
  }
  return (
    <div
      className={classnames(
        'octagon',
        'message__content',
        statusClassName,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
ContentMessage.STATUSES = {
  CRITICAL: 'critical',
  WARNING: 'warning'
}

ContentMessage.defaultProps = {
  status: 'default'
}

ContentMessage.propTypes = {
  /**
   * Status key used to style message accordingly.  Can be a none type, or,
   * one of ['critical', 'warning'].  Or, use `ContentMessage.STATUSES`.
   */
  status: PropTypes.oneOf(Object.values(ContentMessage.STATUSES))
}

export default ContentMessage
