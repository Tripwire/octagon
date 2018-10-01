import React from 'react'
import { getAlertIconClassName } from '../../util/getAlertIconClassName'
import NotificationMessage from './NotificationMessage'
import NotificationEmpty from './NotificationEmpty'

const NotificationBody = props => {
  const { children, notifications, removeItem, ...rest } = props
  let componentToRender = (
    <div>
      <NotificationEmpty />
    </div>
  )

  if (notifications.length > 0) {
    componentToRender = (
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
              removeItem: removeItem
            }
            return <NotificationMessage key={id} options={options} />
          }
        )}
        {children}
      </div>
    )
  }

  return componentToRender
}

NotificationBody.defaultProps = {}

NotificationBody.propTypes = {}

export default NotificationBody
