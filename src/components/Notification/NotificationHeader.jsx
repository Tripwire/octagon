import React from 'react'
import { Icon } from 'semantic-ui-react'

const NotificationHeader = props => {
  const {
    title,
    notificationCount,
    detail,
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
      <span className='notificationTitle'>{title}</span>
      <span className='notificationCount'>{notificationCount}</span>
      {children}
    </div>
  )

  return detail ? detailView : listView
}

NotificationHeader.defaultProps = {}

NotificationHeader.propTypes = {}

export default NotificationHeader
