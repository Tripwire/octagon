import Flexbox from 'flexbox-react'
import React from 'react'
import filterAttributesFromProps from '../../util/externalAttributeFilter'

const ThinCardWidgetValue = (props) => {
  const externalAttributes = filterAttributesFromProps(props)
  return (
    <Flexbox
      {...externalAttributes}
      alignItems='center'
      className={`${props.className} thincard__widget_value`}
      style={props.style}>
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
