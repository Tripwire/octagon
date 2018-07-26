import './side-nav.css'
import classnames from 'classnames'
import SideNavMenuItem from './SideNavMenuItem'
import PropTypes from 'prop-types'
import React from 'react'

const SideNav = props => {
  const { className, children, ...rest } = props
  return (
    <nav
      className={classnames(className, 'octagon side-nav')}
      {...rest}
    >
      {children}
    </nav>
  )
}
SideNav.MenuItem = SideNavMenuItem
SideNav.propTypes = {
  /** One of: MenuItem, Node */
  children: PropTypes.node
}

SideNav.defaultProps = {}

export default SideNav
