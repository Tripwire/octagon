import React from 'react'
import PropTypes from 'prop-types'
import Flexbox from 'flexbox-react'
import { Icon } from 'semantic-ui-react'
import { getAlertIconClassName } from '../../util/getAlertIconClassName'

const NotificationMessage = props => {
  const {
    notification,
    onNotificationClicked,
    onClearNotification,
    ...rest
  } = props
  const { id, type, title, description, timeStamp, isMsgRead } = notification
  const icon = getAlertIconClassName(type)
  const isReadStyle = isMsgRead ? 'normal' : 'bold'
  console.log('isRead: ' + isMsgRead)

  function handleNotificationClicked (notification) {
    onNotificationClicked(notification)
  }

  function handleClearClicked (e, notification) {
    onClearNotification(notification)
    e.stopPropagation()
  }

  return (
    <Flexbox
      id={id}
      onClick={() => handleNotificationClicked(notification)}
      flexDirection='column'
      flexGrow={1}
      className={'column singleNotification'}
      {...rest}
    >
      <Flexbox title={title}>
        <Icon className={`ei text-large notificationIcon ${type} ${icon}`} />
        <Flexbox flexDirection='column' className={`notificationContent`}>
          <div
            className='notificationTitle'
            style={{ fontWeight: isReadStyle }}
          >
            {title}
          </div>
          <div className='notificationDesc '>{description}</div>
          <div className='notificationActions'>
            <a
              className='notificationClear'
              onClick={e => handleClearClicked(e, notification)}
            >
              Clear
            </a>
          </div>
        </Flexbox>
        <div className='notificationTime'>{timeStamp}</div>
      </Flexbox>
    </Flexbox>
  )
}

NotificationMessage.defaultProps = {
  title: '',
  description: '',
  icon: ''
}

NotificationMessage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default NotificationMessage
