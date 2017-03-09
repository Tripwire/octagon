import React from 'react'
import Flexbox from 'flexbox-react'

const ThinCardWidgetValue = (props) => {
  return (
    <Flexbox alignItems='center' className={` ${props.className} thincard__widget_value`} style={props.style}>
      {props.children}
    </Flexbox>
  )
}
ThinCardWidgetValue.defaultProps = {
  style: {},
  className: {}
}

ThinCardWidgetValue.propTypes = {
  style: React.PropTypes.object,
  className: React.PropTypes.object
}
export default ThinCardWidgetValue
