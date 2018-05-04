import PropTypes from 'prop-types'
import React from 'react'
import TopNavContent from './TopNavContent'
import '../../styles/components/top-nav.css'
import externalAttributeFilter from '../../util/externalAttributeFilter'
import classnames from 'classnames'

const TopNav = (props) => {
  var handledProps = externalAttributeFilter(props)
  return (
    <div
      {...handledProps}
      className={classnames('octagon nav__main clearfix', handledProps.className)}
    >
      {props.children}
    </div>
  )
}
TopNav.Content = TopNavContent

TopNav.propTypes = {
  /** One of: Content, Node */
  children: PropTypes.node
}

export default TopNav
