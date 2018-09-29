import React from 'react'

const NotificationHeader = props => {
  const { title, notificationCount, children, ...rest } = props
  return (
    <div className={'notificationHeader clearfix'} {...rest}>
      <span className='notificationTitle'>{title} </span>
      <span className='notificationCount'>{notificationCount}</span>
      {children}
    </div>
  )
}

NotificationHeader.defaultProps = {}

NotificationHeader.propTypes = {}

export default NotificationHeader
