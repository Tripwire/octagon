import React from 'react'
import { Menu, Popup, Icon } from 'semantic-ui-react'
import { ActionListButton } from '../ActionListButton/ActionListButton'
import classNames from 'classnames'

const ActionList = props => {
  const { disabled, actionMenuList } = props

  return (
    <Popup
      className={classNames('action-list', { disabled })}
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
      {!disabled &&
        actionMenuList != null &&
        actionMenuList.length > 0 && (
        <Menu vertical>
          {actionMenuList.map(el => (
            <Menu.Item key={el.id} name={el.Name}>
              <Icon className={el.icon} />
              {el.Name}
            </Menu.Item>
          ))}
        </Menu>
      )}
    </Popup>
  )
}

export default ActionList
