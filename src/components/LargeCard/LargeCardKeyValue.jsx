import PropTypes from 'prop-types'
import React from 'react'
import filterAttributesFromProps from '../../util/externalAttributeFilter'

const LargeCardKeyValue = props => {
  const externalAttributes = filterAttributesFromProps(props)

  const { label, value, renderValue } = props

  return (
    <div {...externalAttributes} className={`summary_info ${props.className}`}>
      <span className='label'>{label}</span>
      <span className='count'>{renderValue(value)}</span>
    </div>
  )
}

LargeCardKeyValue.defaultProps = {
  label: '',
  value: 0,
  renderValue: value =>
    value.toLocaleString(navigator.language, { minimumFractionDigits: 0 })
}

LargeCardKeyValue.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number.isRequired,
  renderValue: PropTypes.function
}

export default LargeCardKeyValue
