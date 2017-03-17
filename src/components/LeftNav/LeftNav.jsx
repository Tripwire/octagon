import React from 'react'
import LeftNavMenuItem from './LeftNavMenuItem'
import Sticky from 'react-stickynode'
import '../../styles/components/left-nav.css'
class LeftNav extends React.Component {
  static MenuItem = LeftNavMenuItem

  render () {
    return (
      <div className='nav__left-container'>
        <Sticky enabled top={0} bottomBoundary={1200}>
          <nav className='nav__left '>
            {this.props.children}
          </nav>
        </Sticky>
      </div>
    )
  }
}

LeftNav.defaultProps = {

}

LeftNav.propTypes = {

}

export default LeftNav
