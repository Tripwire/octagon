import React from 'react'
import '../styles/components/stop-start-button.css'

const StopStartButton = (props) => {
  let iconClass = ''
  if (props.isStopped) {
    iconClass = 'icon_pause_alt2 stop-start-button'
  } else {
    iconClass = 'arrow_triangle-right_alt2 stop-start-button'
  }
  return (
    <i className={` ${iconClass} ${props.className}`} style={props.style} onClick={props.onClick} />
  )
}

StopStartButton.defaultProps = {
  isStopped: false,
  style: {}
}

StopStartButton.propTypes = {
  isStopped: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  style: React.PropTypes.object
}

export default StopStartButton
