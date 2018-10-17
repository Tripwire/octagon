import React from 'react'

const NotificationTray = props => {
  const { children, ...rest } = props
  return <div {...rest}>{children}</div>
}

export default NotificationTray
