import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'

const LargeCardKeyValue = props => {
  const {
    className,
    label,
    value,
    renderValue = defaultRenderValue,
    ...rest
  } = props

  return (
    <div className={classnames('summary_info', className)} {...rest}>
      <span className='label'>{label}</span>
      <span className='count'>{renderValue(value)}</span>
    </div>
  )
}

LargeCardKeyValue.defaultProps = {
  label: '',
  value: ''
}

LargeCardKeyValue.propTypes = {
  /**
   * Label for value
   */
  label: PropTypes.string,
  /**
   * Raw value
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Optional transformation function for value to render.  Defaults to
   * `toLocaleString`.
   * @param {any} value
   * @returns {any}
   */
  renderValue: PropTypes.func
}

function defaultRenderValue (value) {
  return value.toLocaleString(navigator.language, { minimumFractionDigits: 0 })
}
export default LargeCardKeyValue
