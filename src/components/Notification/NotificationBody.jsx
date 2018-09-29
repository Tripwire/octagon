import React from 'react'
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
            let icon = ''
            switch (type) {
              case 'success':
                icon = 'icon_error-triangle_alt'
                break
              case 'info':
                icon = 'icon_error-triangle_alt'
                break
              case 'warning':
                icon = 'icon_error-triangle_alt'
                break
              case 'error':
                icon = 'icon_error-circle_alt'
                break
              default:
                icon = 'icon_check_alt2'
            }
            const options = {
              id,
              type,
              title,
              description,
              timeStamp,
              isMsgRead,
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
