import cx from 'classnames'
import React from 'react'

export function generic ({ name, className }) {
  const Component = function Component (props) {
    const { className: userClassName, children, ...rest } = props
    return (
      <div className={cx(userClassName, className)} {...rest}>
        {children}
      </div>
    )
  }
  Component.displayName = name
  return Component
}
