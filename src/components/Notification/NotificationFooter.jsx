import React from 'react'

const NotificationFooter = props => {
  const { children, onClearAll, ...rest } = props
  function handleClearAllClicked () {
    onClearAll()
  }
  return (
    <div className={'notificationFooter clearfix'} {...rest}>
      <div onClick={() => handleClearAllClicked()}>Clear All</div>
    </div>
  )
}

NotificationFooter.defaultProps = {}

NotificationFooter.propTypes = {}

export default NotificationFooter
