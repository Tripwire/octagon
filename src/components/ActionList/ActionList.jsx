import React from 'react'
import { Menu, Popup, Icon } from 'semantic-ui-react'
import { ActionListButton } from '../ActionListButton/ActionListButton'
import classNames from 'classnames'

const ActionList = props => {
  const { disabled, actionmenulist } = props

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
        actionmenulist != null &&
        actionmenulist.length > 0 && (
        <Menu vertical>
          {actionmenulist.map(el => (
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
