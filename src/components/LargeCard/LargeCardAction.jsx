import React from 'react'
import { Button } from 'semantic-ui-react'
import classnames from 'classnames'

const LargeCardAction = props => {
  const { className, label, children, ...rest } = props
  return (
    <Button
      className={classnames('tripwire', 'fullview__goto__button', className)}
      {...rest}
    >
      {label}
      {children}
    </Button>
  )
}

LargeCardAction.defaultProps = {}

LargeCardAction.propTypes = {}

export default LargeCardAction
