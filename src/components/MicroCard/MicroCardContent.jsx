import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function MicroCardContent (props) {
  const {
    children,
    className,
    primary = false,
    secondary = false,
    ...rest
  } = props
  return (
    <div
      className={classnames(
        'microcard__content',
        primary && 'microcard__content--primary',
        secondary && 'microcard__content--secondary',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

MicroCardContent.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool
}

export default MicroCardContent
