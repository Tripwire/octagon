import React from 'react'
import filterAttributesFromProps from '../../util/externalAttributeFilter'

const LargeCardKeyValue = (props) => {
  const externalAttributes = filterAttributesFromProps(props)
  return (
    <div {...externalAttributes} className={`summary_info ${props.className}`}>
      <span className='label'>{props.label}</span>
      <span className='count'>{props.value}</span>
    </div>
  )
}

LargeCardKeyValue.defaultProps = {
  name: '',
  value: 0
}

LargeCardKeyValue.propTypes = {
  name: React.PropTypes.string,
  value: React.PropTypes.number
}

export default LargeCardKeyValue
