import PropTypes from 'prop-types'
import React from 'react'
import Flexbox from 'flexbox-react'
import filterAttributesFromProps from '../../util/externalAttributeFilter'

const MicroCardCount = (props) => {
  const externalAttributes = filterAttributesFromProps(props)
  return (
    <Flexbox {...externalAttributes} className={`microcard__count ${props.className}`}>{props.value}</Flexbox>
  )
}

MicroCardCount.defaultProps = {
  color: '#FFFFFF'
}

MicroCardCount.propTypes = {
  color: PropTypes.string

}

export default MicroCardCount
