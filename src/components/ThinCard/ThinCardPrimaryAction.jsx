import Flexbox from 'flexbox-react'
import PropTypes from 'prop-types'
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
  style: {}
}

ThinCardPrimaryAction.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string
}

export default ThinCardPrimaryAction
