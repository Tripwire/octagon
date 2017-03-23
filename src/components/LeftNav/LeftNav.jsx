import React from 'react'
import LeftNavMenuItem from './LeftNavMenuItem'
import '../../styles/components/left-nav.css'
class LeftNav extends React.Component {
  static MenuItem = LeftNavMenuItem

  render () {
    return (
      <div className='nav__left-container'>

        <nav className='nav__left '>
          {this.props.children}
        </nav>

      </div>
    )
  }
}

LeftNav.defaultProps = {

}

LeftNav.propTypes = {

}

export default LeftNav
