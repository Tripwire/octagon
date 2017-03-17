import React from 'react'
import Flexbox from 'flexbox-react'

const ThinCardWidgetLabel = (props) => {
  return (
    <Flexbox alignItems='center' className={` ${props.className} thincard__widget_label`} style={props.style}>
      {props.children}
    </Flexbox>
  )
}

ThinCardWidgetLabel.defaultProps = {
  style: {},
  className: {}
}

ThinCardWidgetLabel.propTypes = {
  style: React.PropTypes.object,
  className: React.PropTypes.object
}

export default ThinCardWidgetLabel
