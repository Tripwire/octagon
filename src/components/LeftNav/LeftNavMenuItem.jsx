import React from 'react'
import PropTypes from 'prop-types'

/**
 * Menu item for navigation menu
 * @param {*} props
 */
function LeftNavMenuItem (props) {
  let iconContainerActiveClass = props.active
    ? 'icon_container-active'
    : 'icon_container-inactive'
  let iconActiveClass = props.active ? 'active-icon' : ''
  return (
    <li className='nav__item' onClick={props.onClick}>
      {props.active ? <div className='nav_border--active' /> : null}
      <div className={`icon_container ${iconContainerActiveClass}`}>
        {props.image ? (
          <img className={`icon_nav ${iconActiveClass}`} src={props.image} />
        ) : null}
        {props.children}
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
