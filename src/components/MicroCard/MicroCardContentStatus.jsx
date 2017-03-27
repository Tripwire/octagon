import React from 'react'
import Flexbox from 'flexbox-react'

const alertIconUri = require('../../assets/alert-icon.svg')
const warningIconUri = require('../../assets/warning-yellow.svg')
const MicroCardContentStatus = (props) => {
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

  return (
    <Flexbox marginRight='5px'>
      <img className='microcard__stateIcon' src={icon} alt='icon' />
    </Flexbox>
  )
}

MicroCardContentStatus.defaultProps = {
  status: 'critical'
}

MicroCardContentStatus.propTypes = {
  status: React.PropTypes.string
}

export default MicroCardContentStatus
