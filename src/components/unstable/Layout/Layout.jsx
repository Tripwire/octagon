import './Layout.css'
import cx from 'classnames'
import LeftNav from '../../LeftNav/LeftNav'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import TopNav from '../../TopNav/TopNav'

export default class Layout extends PureComponent {
  render () {
    const { logo, navItems, admin, ...rest } = this.props
    return (
      <div {...rest} className={cx(this.props.className, 'layout__container')}>
        <TopNav className='layout__header'>
          <TopNav.Content align='left'>{logo}</TopNav.Content>
          <TopNav.Content className='top-nav__dropdown-selector' align='right'>
            {admin}
          </TopNav.Content>
        </TopNav>
        <LeftNav className='layout__nav'>{navItems}</LeftNav>
        <div className='layout__content'>{this.props.children}</div>
      </div>
    )
  }
}
Layout.propTypes = {
  logo: PropTypes.element.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.element).isRequired,
  admin: PropTypes.element
}

Layout.LeftNav = LeftNav
Layout.TopNav = TopNav
