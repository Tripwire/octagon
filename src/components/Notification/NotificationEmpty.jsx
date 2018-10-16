import React from 'react'
import { Icon } from 'semantic-ui-react'

const NotificationEmpty = props => {
  const { children, ...rest } = props
  return (
    <div className='empty__notification_panel' {...rest}>
      <div className='outer-circle'>
        <div className='inner-circle'>
          <Icon name='bell outline bell_icon' size='big' />
          <div className='info_text'>
            <span>No New Notifications!</span>
          </div>
        </div>
      </div>
      <p className='large-copy'>
        Check back again for updates, alerts and any other general
        notifications.
      </p>
    </div>
  )
}

NotificationEmpty.defaultProps = {}

NotificationEmpty.propTypes = {}

export default NotificationEmpty
