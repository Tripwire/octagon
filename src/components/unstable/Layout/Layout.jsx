import './Layout.css'
import { Icon } from 'semantic-ui-react'
import cx from 'classnames'
import iconDashboard from '../../../assets/icon_mainav_dash_selected.svg'
import iconOperations from '../../../assets/icon_mainav_ops_selected.svg'
import LeftNav from '../../LeftNav/LeftNav'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import TopNav from '../../TopNav/TopNav'

export default class Layout extends PureComponent {
  render () {
    const {
      logo,
      ...rest
    } = this.props
    return (
      <div
        {...rest}
        className={cx(this.props.className, 'layout__container')}
      >
        <TopNav className='layout__header'>
          <TopNav.Content align='left'>
            {logo}
          </TopNav.Content>
          <TopNav.Content className='top-nav__dropdown-selector' align='right'>
            {'administrator '}
            <Icon name='chevron down' size='small' />
          </TopNav.Content>
        </TopNav>
        <LeftNav className='layout__nav'>
          <LeftNav.MenuItem active image={iconDashboard} />
          <LeftNav.MenuItem image={iconOperations} />
        </LeftNav>
        <div className='layout__content'>{this.props.children}</div>
      </div>
    )
  }
}
Layout.propTypes = {
  logo: PropTypes.element.isRequired
}
