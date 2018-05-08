import React from 'react'
import PropTypes from 'prop-types'
import LeftNavMenuItem from './LeftNavMenuItem'
import '../../styles/components/left-nav.css'
import classnames from 'classnames'

const LeftNav = (props) => {
  return (
    <nav {...props} className={classnames(props.className, 'octagon nav__left')}>
      {props.children}
    </nav>
  )
}
LeftNav.MenuItem = LeftNavMenuItem
LeftNav.propTypes = {
  /** One of: MenuItem, Node */
  children: PropTypes.node
}

LeftNav.defaultProps = {

}

export default LeftNav
