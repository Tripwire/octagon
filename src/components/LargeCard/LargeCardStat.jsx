import Flexbox from 'flexbox-react'
import PropTypes from 'prop-types'
import React from 'react'
import filterAttributesFromProps from '../../util/externalAttributeFilter'

const LargeCardStat = (props) => {
  const externalAttributes = filterAttributesFromProps(props)
  return (
    <Flexbox {...externalAttributes} className={`stats ${props.className}`} flexDirection='row'>
      <span className='label'>{props.label}</span>
      <span className='value'>{props.value}</span>
    </Flexbox>
  )
}

LargeCardStat.defaultProps = {
  name: '',
  value: 0
}

LargeCardStat.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number
}

export default LargeCardStat
