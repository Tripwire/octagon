import React from 'react'
import Flexbox from 'flexbox-react'

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
  return (
    <Flexbox flexDirection='column' justifyContent='center' className={`microcard__message ${status} `}>
      {props.children}
    </Flexbox>
  )
}

MicroCardContentMessage.defaultProps = {
  status: 'default'
}

MicroCardContentMessage.propTypes = {
  status: React.PropTypes.string
}

export default MicroCardContentMessage
