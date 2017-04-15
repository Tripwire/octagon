import Flexbox from 'flexbox-react'
import React from 'react'
import filterAttributesFromProps from '../../util/externalAttributeFilter'

const ThinCardTitle = (props) => {
  const externalAttributes = filterAttributesFromProps(props)
  return (
    <Flexbox
      {...externalAttributes}
      alignItems='center'
      className={`thincard__title ${props.className}`}
      style={props.style}>
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
