import React from 'react'
import NotificationMessage from './NotificationMessage'
import NotificationEmpty from './NotificationEmpty'

const NotificationBody = props => {
  function getNotification (notification) {
    return (
      <NotificationMessage
        key={notification.id}
        notification={notification}
        onNotificationClicked={onNotificationClicked}
        onClearNotification={onClearNotification}
      />
    )
  }
  function getNotificationContent () {
    if (props.detail) {
      return getNotification(props.detail)
    }
    if (notificationsLength > 0) {
      return notifications.map(notification => {
        console.log(notification.id)
        return getNotification(notification)
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
