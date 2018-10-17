import React from 'react'

const NotificationFooter = props => {
  const { children, onClearAll, empty, selectedNotification, ...rest } = props
  function handleClearAllClicked () {
    onClearAll()
  }
  if (empty) return <div className='empty-footer' />
  if (selectedNotification) return null
  return (
    <div className={'notificationFooter'} {...rest}>
      {empty ? null : <a onClick={() => handleClearAllClicked()}>Clear All</a>}
    </div>
  )
}

NotificationFooter.defaultProps = {}

NotificationFooter.propTypes = {}

export default NotificationFooter
