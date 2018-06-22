import React from 'react'
import { Icon } from 'semantic-ui-react'
import classnames from 'classnames'

const LargeCardClose = props => {
  const { children, className, ...rest } = props
  return (
    <span className={classnames('close__fullview', className)} {...rest}>
      <Icon className='ei icon_close' aria-hidden='true' />
      {children}
    </span>
  )
}

LargeCardClose.defaultProps = {}

LargeCardClose.propTypes = {}

export default LargeCardClose
