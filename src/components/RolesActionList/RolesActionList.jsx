import React from 'react'
import { ActionListButton } from '../ActionListButton/ActionListButton'
import { Menu, Popup } from 'semantic-ui-react'

const RolesActionList = props => {
  const { disabled } = props

  return (
    <Popup
      className={`action-list ${disabled ? 'disabled' : null}`}
      on='click'
      hoverable
      closeOnTriggerMouseLeave
      closeOnPortalMouseLeave
      position='bottom left'
      style={{ padding: 0 }}
      trigger={
        <span>
          {' '}
          <ActionListButton {...props} />
        </span>
      }
    >
      {!disabled ? (
        <Menu vertical>
          <Menu.Item name='edit'>Export</Menu.Item>
          <Menu.Item name='delete'>Delete</Menu.Item>
        </Menu>
      ) : null}
    </Popup>
  )
}

export default RolesActionList
