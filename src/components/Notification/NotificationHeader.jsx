import React from 'react'
import { Icon } from 'semantic-ui-react'

const NotificationHeader = props => {
  const {
    title,
    notificationCount,
    selectedNotification,
    children,
    onNotificationClicked,
    ...rest
  } = props

  function handlelistViewClicked () {
    onNotificationClicked(undefined)
  }

  const detailView = (
    <div
      className={'notificationHeader detailView clearfix'}
      onClick={() => handlelistViewClicked()}
      {...rest}
    >
      <Icon className='angle left backarrow' />
      <span className='backbtn'>BACK</span>
    </div>
  )
  const listView = (
    <div className={'notificationHeader clearfix'} {...rest}>
      <h4 className='notificationTitle'>{title}</h4>
      <span className='notificationCount'>{notificationCount}</span>
      {children}
    </div>
  )

  return selectedNotification ? detailView : listView
}

NotificationHeader.defaultProps = {}

NotificationHeader.propTypes = {}

export default NotificationHeader
