import React from 'react'
import { getAlertIconClassName } from '../../util/getAlertIconClassName'
import NotificationMessage from './NotificationMessage'
import NotificationEmpty from './NotificationEmpty'

const NotificationBody = props => {
  const {
    children,
    notifications,
    removeItem,
    onNotificationClicked,
    ...rest
  } = props
  const notificationsLength = notifications.length
  console.log('NotificationBody')
  if (props.detail) {
    const selectedNotification = (function () {
      for (let i = 0; i < notificationsLength; i++) {
        console.log(notifications[i].id + ' =? ' + props.detail)
        if (notifications[i].id === props.detail) return notifications[i]
      }
      return {}
    })()
    selectedNotification.icon = getAlertIconClassName(selectedNotification.type)
    return (
      <NotificationMessage
        key={selectedNotification.id}
        options={selectedNotification}
      />
    )
  }

  if (notificationsLength > 0) {
    return (
      <div className='notificationBody' {...rest}>
        {notifications.map(
          ({ id, type, title, description, timeStamp, isMsgRead }) => {
            const icon = getAlertIconClassName(type)
            const options = {
              id,
              type,
              title,
              description,
              icon: icon,
              timeStamp: timeStamp,
              removeItem: removeItem,
              onNotificationClicked: onNotificationClicked
            }
            return <NotificationMessage key={id} options={options} />
          }
        )}
        {children}
      </div>
    )
  } else {
    return <NotificationEmpty />
  }
}

NotificationBody.defaultProps = {}

NotificationBody.propTypes = {}

export default NotificationBody
