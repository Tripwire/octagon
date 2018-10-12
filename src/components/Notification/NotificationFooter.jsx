import React from 'react'

const NotificationFooter = props => {
  const { children, onClearAll, ...rest } = props
  function handleClearAllClicked () {
    onClearAll()
  }
  return (
    <div className={'notificationFooter clearfix'} {...rest}>
      <a onClick={() => handleClearAllClicked()}>Clear All</a>
    </div>
  )
}

NotificationFooter.defaultProps = {}

NotificationFooter.propTypes = {}

export default NotificationFooter
