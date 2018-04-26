import React from 'react'
import PropTypes from 'prop-types'
import LeftNavMenuItem from './LeftNavMenuItem'
import '../../../styles/components/left-nav.css'

const LeftNav = props => {
  return (
    <nav className='octagon nav__left ' {...props}>
      {props.children}
    </nav>
  )
}
LeftNav.MenuItem = LeftNavMenuItem
LeftNav.propTypes = {
  /** One of: MenuItem, Node */
  children: PropTypes.node
}

LeftNav.defaultProps = {}

export default LeftNav
