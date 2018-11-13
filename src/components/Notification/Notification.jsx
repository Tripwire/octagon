import '../../styles/components/notification.css'
import React from 'react'
import { Popup } from 'semantic-ui-react'
import NotificationBadge from './NotificationBadge'
import NotificationTray from './NotificationTray'
import NotificationHeader from './NotificationHeader'
import NotificationBody from './NotificationBody'
import NotificationFooter from './NotificationFooter'
import NotificationEmpty from './NotificationEmpty'

const Notification = props => {
  const {
    children,
    notifications,
    onNotificationClicked,
    onBackClicked,
    onClearNotification,
    onClearAll,
    selectedNotification,
    ...rest
  } = props

  const notificationCount = notifications.length

  const badge = (
    <Notification.Badge
      key={'badge'}
      size='small'
      notificationCount={notificationCount}
      onClick={() => onNotificationClicked()}
    />
  )
  const tray = (
    <Notification.Tray key={'tray'}>
      <Notification.Header
        title={'NOTIFICATIONS'}
        selectedNotification={selectedNotification}
        notificationCount={notificationCount}
        onBackClicked={onBackClicked}
      />
      <Notification.Body
        selectedNotification={selectedNotification}
        notifications={notifications}
        onNotificationClicked={onNotificationClicked}
        onClearNotification={onClearNotification}
      />
      <Notification.Footer
        onClearAll={onClearAll}
        selectedNotification={selectedNotification}
        empty={!notificationCount}
      />
    </Notification.Tray>
  )

  return (
    <Popup
      trigger={badge}
      content={tray}
      on='click'
      position='bottom center'
      className={'notificationPopup'}
      {...rest}
    />
  )
}

Notification.Badge = NotificationBadge
Notification.Tray = NotificationTray
Notification.Header = NotificationHeader
Notification.Body = NotificationBody
Notification.Footer = NotificationFooter
Notification.Empty = NotificationEmpty

export default Notification
