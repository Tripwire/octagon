import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'

const TopNavContent = props => {
  const { align, children, className, ...rest } = props
  return (
    <div className={classnames(`nav__main--${align}`, className)} {...rest}>
      <div className={`nav__item ${align === 'right' ? 'nav__link' : ''}`}>
        {children}
      </div>
    </div>
  )
}

TopNavContent.defaultProps = {
  align: 'left'
}

TopNavContent.propTypes = {
  align: PropTypes.string
}

export default TopNavContent
