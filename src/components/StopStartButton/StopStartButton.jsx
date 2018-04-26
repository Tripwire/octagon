import PropTypes from 'prop-types'
import React from 'react'
import { Icon } from 'semantic-ui-react'
import '../../styles/components/stop-start-button.css'

const StopStartButton = props => {
  let iconClass = 'octagon ei stop-start-button '
  if (props.className) {
    iconClass = `${iconClass} ${props.className}`
  }
  if (props.isStopped) {
    iconClass = `${iconClass} icon_pause_alt2`
  } else {
    iconClass = `${iconClass} arrow_triangle-right_alt2`
  }
  return (
    <Icon
      className={`${iconClass}`}
      style={props.style}
      onClick={props.onClick}
    />
  )
}

StopStartButton.defaultProps = {
  isStopped: false,
  style: {}
}

StopStartButton.propTypes = {
  isStopped: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object
}

export default StopStartButton
