import PropTypes from 'prop-types'
import React from 'react'
import TopNavContent from './TopNavContent'
import '../../styles/components/top-nav.css'

const TopNav = props => {
  return <div className='octagon nav__main clearfix'>{props.children}</div>
}
TopNav.Content = TopNavContent

TopNav.propTypes = {
  /** One of: Content, Node */
  children: PropTypes.node
}

export default TopNav
