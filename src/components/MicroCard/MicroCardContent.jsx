import PropTypes from 'prop-types'
import React from 'react'
import Flexbox from 'flexbox-react'
import MicroCardContentStatus from './MicroCardContentStatus'
import MicroCardContentMessage from './MicroCardContentMessage'
import filterAttributesFromProps from '../../util/externalAttributeFilter'

const MicroCardContent = (props) => {
  const externalAttributes = filterAttributesFromProps(props)
  return (
    <Flexbox flexDirection='column' paddingBottom='10px' paddingLeft='10px' paddingTop='5px'>
      {(props.title)
        ? <Flexbox {...externalAttributes} className={`box__header ${props.className}`}>{props.title}</Flexbox>
      : ''}
      <Flexbox flexGrow={2}>
        {props.children}
      </Flexbox>
    </Flexbox>
  )
}

MicroCardContent.Status = MicroCardContentStatus
MicroCardContent.Message = MicroCardContentMessage

MicroCardContent.defaultProps = {
  title: ''
}

MicroCardContent.propTypes = {
  title: PropTypes.string
}

export default MicroCardContent
