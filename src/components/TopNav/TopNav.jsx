import React from 'react'
import TopNavContent from './TopNavContent'
import LocalTime from './TopNavLocalTime'
import '../../styles/components/top-nav.css'
class TopNav extends React.Component {
  static Content = TopNavContent;
  static LocalTime = LocalTime;

  render () {
    return (
      <div className='nav__main clearfix'>
        {this.props.children}
      </div>
    )
  }
}

export default TopNav
