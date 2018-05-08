import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

/**
 * Menu item for navigation menu
 * @param {*} props
 */
function LeftNavMenuItem (props) {
  const { active, image, className, children, ...rest } = props
  let iconActiveClass = props.active ? 'active-icon' : ''
  return (
    <li {...rest} className={cx('nav__item', className)}>
      {active ? <div className='nav_border--active' /> : null}
      <div
        className={`icon_container icon_container-${
          active ? 'active' : 'inactive'
        }`}
      >
        {image ? (
          <img className={`icon_nav ${iconActiveClass}`} src={image} />
        ) : null}
        {children}
      </div>
    </li>
  )
}

LeftNavMenuItem.defaultProps = {
  active: false,
  image: ''
}

LeftNavMenuItem.propTypes = {
  active: PropTypes.bool,
  /** image URI */
  image: PropTypes.string
}

export default LeftNavMenuItem
