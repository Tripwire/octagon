import Flexbox from 'flexbox-react'
import PropTypes from 'prop-types'
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
  style: {}
}

ThinCardWidgetValue.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string
}
export default ThinCardWidgetValue
