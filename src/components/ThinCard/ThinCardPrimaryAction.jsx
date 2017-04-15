import Flexbox from 'flexbox-react'
import React from 'react'
import filterAttributesFromProps from '../../util/externalAttributeFilter'

const ThinCardPrimaryAction = (props) => {
  const externalAttributes = filterAttributesFromProps(props)
  return (
    <Flexbox
      {...externalAttributes}
      alignItems='center'
      className={`thincard__primary_action ${props.className}`}
      style={props.style}>
      {props.children}
    </Flexbox>
  )
}

ThinCardPrimaryAction.defaultProps = {
  style: {},
  className: {}
}

ThinCardPrimaryAction.propTypes = {
  style: React.PropTypes.object,
  className: React.PropTypes.object
}

export default ThinCardPrimaryAction
