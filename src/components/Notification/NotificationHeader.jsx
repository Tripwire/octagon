import React from 'react'
import { Icon } from 'semantic-ui-react'

const NotificationHeader = props => {
  const {
    title,
    notificationCount,
    selectedNotification,
    children,
    onBackClicked,
    ...rest
  } = props

  function handlelistViewClicked () {
    onBackClicked()
  }

  const detailView = (
    <div
      className={'notificationHeader detailView clearfix'}
      onClick={() => handlelistViewClicked()}
      {...rest}
    >
      <Icon className='angle left backarrow' />
      <h4 className='backbtn'>BACK</h4>
    </div>
  )
  const listView = (
    <div className={'notificationHeader clearfix'} {...rest}>
      <h4 className='notificationTitle'>{title}</h4>
      {notificationCount ? (
        <span className='notificationCount'>{notificationCount}</span>
      ) : null}
      {children}
    </div>
  )

  return selectedNotification ? detailView : listView
}

NotificationHeader.defaultProps = {}

NotificationHeader.propTypes = {}

export default NotificationHeader
