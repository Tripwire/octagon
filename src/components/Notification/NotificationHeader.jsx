import React from 'react'

const NotificationHeader = props => {
  const {
    title,
    notificationCount,
    detail,
    children,
    onNotificationClicked,
    ...rest
  } = props

  function handlelistViewClicked () {
    onNotificationClicked(undefined)
  }

  const detailView = (
    <div className={'notificationHeader clearfix'} {...rest}>
      <a onClick={() => handlelistViewClicked()}>back</a>
    </div>
  )
  const listView = (
    <div className={'notificationHeader clearfix'} {...rest}>
      <span className='notificationTitle'>{title}</span>
      <span className='notificationCount'>{notificationCount}</span>
      {children}
    </div>
  )

  return detail ? detailView : listView
}

NotificationHeader.defaultProps = {}

NotificationHeader.propTypes = {}

export default NotificationHeader
