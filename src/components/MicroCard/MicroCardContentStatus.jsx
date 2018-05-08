import PropTypes from 'prop-types'
import React from 'react'
import Flexbox from 'flexbox-react'
import filterAttributesFromProps from '../../util/externalAttributeFilter'
import alertIconUri from '../../assets/alert-icon.svg'
import warningIconUri from '../../assets/warning-yellow.svg'

const MicroCardContentStatus = props => {
  let icon = ''

  switch (props.status) {
    case 'critical':
      icon = alertIconUri
      break
    case 'warning':
      icon = warningIconUri
      break
    default:
      icon = ''
  }
  const externalAttributes = filterAttributesFromProps(props)
  return (
    <Flexbox marginRight='5px'>
      <img
        {...externalAttributes}
        className={`microcard__stateIcon ${props.className}`}
        src={icon}
        alt='icon'
      />
    </Flexbox>
  )
}

MicroCardContentStatus.defaultProps = {
  status: 'critical'
}

MicroCardContentStatus.propTypes = {
  status: PropTypes.string
}

export default MicroCardContentStatus
