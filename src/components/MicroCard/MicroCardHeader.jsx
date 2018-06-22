import React from 'react'
import classnames from 'classnames'

export default function MicroCardHeader (props) {
  const { children, className, ...rest } = props
  return (
    <div className={classnames('microcard_header', className)} {...rest}>
      {children}
    </div>
  )
}
