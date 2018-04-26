import React from 'react'
import PropTypes from 'prop-types'

/**
 * Menu item for navigation menu
 * @param {*} props
 */
function LeftNavMenuItem (props) {
  let active = ''
  let activeIcon = ''
  active = props.active ? 'icon_container-active' : 'icon_container-inactive'
  activeIcon = props.active ? 'active-icon' : ''
  return (
    <li className='nav__item' onClick={props.onClick}>
      <div className={`icon_container ${active}`}>
        {(props.image)
          ? <img className={`icon_nav ${activeIcon}`} src={props.image} />
          : null}
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
