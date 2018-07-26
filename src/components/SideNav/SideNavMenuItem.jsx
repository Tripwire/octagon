import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

/**
 * Menu item for navigation menu
 * @param {*} props
 */
function SideNavMenuItem (props) {
  const { active, image, className, children, ...rest } = props
  const iconClasses = cx('icon_container', `icon_container--${active ? 'active' : 'inactive'}`)
  return (
    <li className={cx('side-nav__item', className)} {...rest}>
      {active ? <div className='side-nav_border--active' /> : null}
      <div className={iconClasses}>
        {image ? <img src={image} /> : null}
        {children}
      </div>
    </li>
  )
}

SideNavMenuItem.defaultProps = {
  active: false,
  image: ''
}

SideNavMenuItem.propTypes = {
  active: PropTypes.bool,
  /** image URI */
  image: PropTypes.string
}

export default SideNavMenuItem
