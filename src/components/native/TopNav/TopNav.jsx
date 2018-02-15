import PropTypes from 'prop-types'
import React from 'react'
import TopNavContent from './TopNavContent'
import LocalTime from './TopNavLocalTime'
import '../../../styles/components/top-nav.css'

class TopNav extends React.Component {
  render () {
    return (
      <div className='octagon nav__main clearfix'>
        {this.props.children}
      </div>
    )
  }
}
TopNav.Content = TopNavContent
TopNav.LocalTime = LocalTime

TopNav.propTypes = {
  /** One of: Content, LocalTime, Node */
  children: PropTypes.node
}

export default TopNav
