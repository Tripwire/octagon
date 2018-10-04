import './Layout.css'
import { generic } from '../../../util/component-factory'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

export default function Layout (props) {
  const { className, children, full, notifying, ...rest } = props
  const classes = classnames(
    'layout__container',
    {
      'layout__container--full': full,
      'layout__container--notifying': notifying
    },
    className
  )
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}
Layout.displayName = 'Layout'
Layout.propTypes = {
  /**
   * size the layout to the viewpost (100vh, 100vw)
   */
  full: PropTypes.bool,
  /**
   * provide a container for notifications between the header and the body
   */
  notifying: PropTypes.bool
}
Layout.Header = generic({ name: 'LayoutHeader', className: 'layout__header' })
Layout.Nav = generic({ name: 'LayoutNav', className: 'layout__nav' })
Layout.Notification = generic({ name: 'LayoutNotification', className: 'layout__notification' })
Layout.Body = generic({ name: 'LayoutBody', className: 'layout__body' })
