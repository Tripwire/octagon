import React from 'react'

const NotificationFooter = props => {
  const { children, ...rest } = props
  return (
    <div className={'notificationFooter clearfix'} {...rest}>
      {children}
    </div>
  )
}

NotificationFooter.defaultProps = {}

NotificationFooter.propTypes = {}

export default NotificationFooter
