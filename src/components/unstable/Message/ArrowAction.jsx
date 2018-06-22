import React from 'react'
import { Icon } from 'semantic-ui-react'
import classnames from 'classnames'

export default function ArrowAction (props) {
  const { className, ...rest } = props
  return (
    <Icon
      className={classnames(
        'ei',
        'message__arrow-right',
        'arrow_carrot-right',
        className
      )}
      {...rest}
    />
  )
}
ArrowAction.defaultProps = {}
ArrowAction.propTypes = {}
