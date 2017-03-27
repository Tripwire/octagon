import React from 'react'
import Flexbox from 'flexbox-react'

const ThinCardActionButton = (props) => {
  return (
    <Flexbox alignItems='center' flexGrow={3}>
      <div onClick={props.onClick} className={`thincard__action_button ${props.ClassName}`} style={props.style}>
        {props.children}
      </div>
    </Flexbox>
  )
}

ThinCardActionButton.defaultProps = {
  style: {},
  className: {}
}

ThinCardActionButton.propTypes = {
  style: React.PropTypes.object,
  className: React.PropTypes.object,
  onClick: React.PropTypes.func
}

export default ThinCardActionButton
