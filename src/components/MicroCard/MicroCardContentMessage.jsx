import PropTypes from 'prop-types'
import React from 'react'
import Flexbox from 'flexbox-react'
import filterAttributesFromProps from '../../util/externalAttributeFilter'

const MicroCardContentMessage = (props) => {
  let status = ''

  switch (props.status) {
    case 'critical':
      status = 'text-critical'
      break
    case 'warning':
      status = 'text-warning'
      break
    default:
      status = ''
  }
  const externalAttributes = filterAttributesFromProps(props)
  return (
    <Flexbox
      {...externalAttributes}
      flexDirection='column'
      justifyContent='center'
      className={`microcard__message ${status} ${props.className}`}
    >
      {props.children}
    </Flexbox>
  )
}

MicroCardContentMessage.defaultProps = {
  status: 'default'
}

MicroCardContentMessage.propTypes = {
  status: PropTypes.string
}

export default MicroCardContentMessage
