import React from 'react'
import Flexbox from 'flexbox-react'
import { Icon } from 'semantic-ui-react'
import { getAlertIconClassName } from '../../util/getAlertIconClassName'

const NotificationDetail = props => {
  const { notification, onClearNotification, ...rest } = props
  const { id, type, title, description, timeStamp, isMsgRead } = notification
  const icon = getAlertIconClassName(type)
  const isReadStyle = isMsgRead ? 'normal' : 'bold'

  function handleClearClicked (e, notification) {
    onClearNotification(notification)
    e.stopPropagation()
  }

  return (
    <Flexbox
      id={id}
      flexDirection='column'
      flexGrow={1}
      className={'column detailView notification_detail'}
      {...rest}
    >
      <Flexbox title={title}>
        <Icon className={`notificationIcon ${type} ${icon}`} />
        <Flexbox flexDirection='column' className={`notificationContent`}>
          <div
            className='notificationTitle'
            style={{ fontWeight: isReadStyle }}
          >
            {title}
          </div>
          <div className='notificationTime'>{timeStamp}</div>
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
      </Flexbox>
    </Flexbox>
  )
}

NotificationDetail.defaultProps = {}

NotificationDetail.propTypes = {}

export default NotificationDetail
