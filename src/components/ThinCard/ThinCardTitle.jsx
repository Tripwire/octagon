import React from 'react'
import Flexbox from 'flexbox-react'

const ThinCardTitle = (props) => {
  return (
    <Flexbox alignItems='center' className={`thincard__title ${props.className}`} style={props.style}>
      {props.children}
    </Flexbox>
  )
}

ThinCardTitle.defaultProps = {
  style: {},
  className: {}
}

ThinCardTitle.propTypes = {
  style: React.PropTypes.object,
  className: React.PropTypes.object
}

export default ThinCardTitle
