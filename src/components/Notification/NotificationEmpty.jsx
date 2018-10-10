import React from 'react'
import { Icon } from 'semantic-ui-react'

const NotificationEmpty = props => {
  const { children, ...rest } = props
  return (
    <div className='empty__notification_panel' {...rest}>
      <div className='empty__circle'>
        <div className='bell_icon'>
          <Icon name='bell outline' size='big' />
        </div>
        <div className='info_text'>
          <span>No New Notifications!</span>
        </div>
      </div>
      <div className='title'>
        <span>
          Check back again for updates, alerts and any other general
          notifications.
        </span>
      </div>
    </div>
  )
}

NotificationEmpty.defaultProps = {}

NotificationEmpty.propTypes = {}

export default NotificationEmpty
