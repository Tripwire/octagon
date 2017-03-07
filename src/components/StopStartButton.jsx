import React from 'react'
import Icon from './suir/icon/Icon';
import '../styles/components/stop-start-button.css'

const StopStartButton = (props) => {
  let iconClass = ''
  if (props.isStopped) {
    iconClass = 'ei icon_pause_alt2 stop-start-button'
  } else {
    iconClass = 'ei arrow_triangle-right_alt2 stop-start-button'
  }
  return (
    <Icon className={` ${iconClass} ${props.className}`} style={props.style} onClick={props.onClick} />
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
