import React from 'react'
import NotificationMessage from './NotificationMessage'
import NotificationEmpty from './NotificationEmpty'
import NotificationDetail from './NotificationDetail'

const NotificationBody = props => {
  function getNotification (notification, dataFor) {
    if (dataFor === 'notificationList') {
      return (
        <NotificationMessage
          key={notification.id}
          notification={notification}
          onNotificationClicked={onNotificationClicked}
          onClearNotification={onClearNotification}
        />
      )
    } else {
      return (
        <NotificationDetail
          notification={notification}
          onClearNotification={onClearNotification}
        />
      )
    }
  }
  function getNotificationContent () {
    if (props.detail) {
      return getNotification(props.detail, 'detailedNotification')
    }
    if (notificationsLength > 0) {
      return notifications.map(notification => {
        console.log(notification.id)
        return getNotification(notification, 'notificationList')
      })
    } else {
      return <NotificationEmpty />
    }
  }

  const {
    children,
    notifications,
    removeItem,
    onNotificationClicked,
    onClearNotification,
    ...rest
  } = props
  const notificationsLength = notifications.length
  const notificationContent = getNotificationContent()

  return (
    <div className='notificationBody' {...rest}>
      {notificationContent}
    </div>
  )
}

NotificationBody.defaultProps = {}

NotificationBody.propTypes = {}

export default NotificationBody
