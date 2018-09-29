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
  const { children, ...rest } = props
  let visible = true
  let childrenNodes = {}
  children.forEach(ele => {
    childrenNodes[ele.key] = ele
  })

  return (
    <Popup
      visible={visible}
      trigger={childrenNodes.badge}
      content={childrenNodes.tray}
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
