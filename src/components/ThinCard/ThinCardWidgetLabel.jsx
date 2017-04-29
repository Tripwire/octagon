import Flexbox from 'flexbox-react'
import React from 'react'
import filterAttributesFromProps from '../../util/externalAttributeFilter'

const ThinCardWidgetLabel = (props) => {
  const externalAttributes = filterAttributesFromProps(props)
  return (
    <Flexbox
      {...externalAttributes}
      alignItems='center'
      className={`${props.className} thincard__widget_label`}
      style={props.style}>
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
