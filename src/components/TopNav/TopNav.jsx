import PropTypes from 'prop-types'
import React from 'react'
import TopNavContent from './TopNavContent'
import '../../styles/components/top-nav.css'
import classnames from 'classnames'

const TopNav = props => {
  const { children, className, ...rest } = props
  return (
    <div
      {...rest}
      className={classnames('octagon nav__main clearfix', className)}
    >
      {children}
    </div>
  )
}
TopNav.Content = TopNavContent

TopNav.propTypes = {
  /** One of: Content, Node */
  children: PropTypes.node
}

export default TopNav
