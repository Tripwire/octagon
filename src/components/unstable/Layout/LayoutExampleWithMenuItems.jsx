import { Popup, Menu, Icon, Input, Label } from 'semantic-ui-react'
import iconDashboard from '../../../assets/icon_mainav_dash_selected.svg'
import iconOperations from '../../../assets/icon_mainav_ops_selected.svg'
import Layout from './Layout'
import React from 'react'

const onClick = () => console.log('Layout:navItem:clicked!')
export default class LayoutExampleWithMenuItems extends React.Component {
  render () {
    return (
      <Layout
        className='hide-in-test'
        logo={<h1 style={{ color: 'white' }}>LOGO</h1>}
        navItems={[
          <Layout.LeftNav.MenuItem
            key='1'
            active
            image={iconDashboard}
            onClick={onClick}
          />,
          <Layout.LeftNav.MenuItem
            key='2'
            image={iconOperations}
            onClick={onClick}
          />
        ]}
        admin={
          <Popup
            hoverable
            position='bottom right'
            style={{ padding: 0 }}
            trigger={
              <span>
                {'administrator '}
                <Icon name='chevron down' size='small' />
              </span>
            }
          >
            <Menu vertical>
              <Menu.Item name='inbox' active onClick={this.handleItemClick}>
                <Label color='teal'>1</Label>
                Inbox
              </Menu.Item>

              <Menu.Item name='spam' onClick={this.handleItemClick}>
                <Label>51</Label>
                Spam
              </Menu.Item>

              <Menu.Item name='updates' onClick={this.handleItemClick}>
                <Label>1</Label>
                Updates
              </Menu.Item>
              <Menu.Item>
                <Input icon='search' placeholder='Search mail...' />
              </Menu.Item>
            </Menu>
          </Popup>
        }
      />
    )
  }
}
