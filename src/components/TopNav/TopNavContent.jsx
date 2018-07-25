import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'

const TopNavContent = props => {
  const { link, children, className, ...rest } = props
  const linkClass = link ? 'nav__item--link' : ''
  return (
    <div
      className={classnames(`nav__item ${linkClass}`, className)}
      {...rest}
    >
      {children}
    </div>
  )
}

TopNavContent.propTypes = {
  /**
   * `link` was implicit when `align='right'` since abfb87d4c37d.
   * such a style does not provide much value add--a pre-styled component should
   * instead be inserted
   * @deprecated
   */
  link: PropTypes.bool
}

export default TopNavContent
