import React from 'react'
import { ActionListButton } from '../ActionListButton/ActionListButton'
import { Menu, Popup } from 'semantic-ui-react'
import classNames from 'classnames'

const RolesActionList = props => {
  const { disabled } = props
  const btnClass = classNames('action-list', { disabled: disabled })

  return (
    <Popup
      className={btnClass}
      on='click'
      hoverable
      closeOnTriggerMouseLeave
      closeOnPortalMouseLeave
      position='bottom left'
      style={{ padding: 0 }}
      trigger={
        <span>
          <ActionListButton {...props} />
        </span>
      }
    >
      {!disabled && (
        <Menu vertical>
          <Menu.Item name='edit'>Export</Menu.Item>
          <Menu.Item name='delete'>Delete</Menu.Item>
        </Menu>
      )}
    </Popup>
  )
}

export default RolesActionList
