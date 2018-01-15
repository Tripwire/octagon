import React from 'react'
import PropTypes from 'prop-types'
import '../../../styles/components/vertical-menu.css'

function VMenuItem (props) {
  let linkStyles = 'vmenu__link'
  let activeIcon = ''

  if (props.active) {
    linkStyles += ' vmenu__link_active'
    activeIcon = <i className='vmenu__icon arrow_carrot-right' />
  }

  return (
    <li className='vmenu__item'>
      <a href='' className={linkStyles}>
        {props.children}
        {props.active ? activeIcon : '' }
      </a>
    </li>
  )
}

class VMenu extends React.PureComponent {
  render () {
    return (
      <nav className='vmenu' {...this.props}>
        <ul className='vmenu__content'>{this.props.children}</ul>
      </nav>
    )
  }
}

VMenu.MenuItem = VMenuItem

VMenu.propTypes = {
  /** One of: MenuItem, Node */
  children: PropTypes.node
}

VMenu.defaultProps = {

}

export default VMenu
