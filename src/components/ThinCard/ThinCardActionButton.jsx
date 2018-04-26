import Flexbox from 'flexbox-react'
import PropTypes from 'prop-types'
import React from 'react'
import filterAttributesFromProps from '../../util/externalAttributeFilter'

const ThinCardActionButton = props => {
  const externalAttributes = filterAttributesFromProps(props)
  return (
    <Flexbox {...externalAttributes} alignItems='center' flexGrow={3}>
      <div
        className={`thincard__action_button ${props.innerDivClassName}`}
        style={props.style}
      >
        {props.children}
      </div>
    </Flexbox>
  )
}

ThinCardActionButton.defaultProps = {
  style: {},
  innerDivClassName: {}
}

ThinCardActionButton.propTypes = {
  style: PropTypes.object,
  innerDivClassName: PropTypes.object
}

export default ThinCardActionButton
