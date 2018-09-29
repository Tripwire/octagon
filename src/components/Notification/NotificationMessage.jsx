import React from 'react'
import PropTypes from 'prop-types'
import Flexbox from 'flexbox-react'
import { Icon } from 'semantic-ui-react'

const NotificationMessage = props => {
  const { options, ...rest } = props
  const { id, type, title, description, timeStamp, isMsgRead, icon } = options
  return (
    <Flexbox
      id={id}
      isMsgRead={isMsgRead}
      flexDirection='column'
      flexGrow={1}
      className={'column singleNotification'}
      {...rest}
    >
      <Flexbox title={title}>
        <Icon className={`ei text-large notificationIcon ${type} ${icon}`} />
        <Flexbox flexDirection='column' className={`notificationContent`}>
          <div className='notificationTitle'>{title}</div>
          <div className='notificationDesc '>{description}</div>
          <div className='notificationActions'>
            <span className='notificationClear'>Clear</span>
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
  timeStamp: '',
  icon: ''
}

NotificationMessage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default NotificationMessage
