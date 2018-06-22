import Flexbox from 'flexbox-react'
import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'

const LargeCardStat = props => {
  const { className, label, value, ...rest } = props
  return (
    <Flexbox
      className={classnames('stats', className)}
      flexDirection='row'
      {...rest}
    >
      <span className='label'>{label}</span>
      <span className='value'>{value}</span>
    </Flexbox>
  )
}

LargeCardStat.defaultProps = {
  name: '',
  value: 0
}

LargeCardStat.propTypes = {
  /**
   * Stat label
   */
  label: PropTypes.string,
  /**
   * Stat value
   */
  value: PropTypes.number
}

export default LargeCardStat
