import './Layout.css'
import { generic } from '../../../util/component-factory'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

export default function Layout (props) {
  const { className, children, full, ...rest } = props
  const classes = classnames(
    'layout__container',
    full ? 'layout__container--full' : null,
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
  full: PropTypes.bool
}
Layout.Header = generic({ name: 'LayoutHeader', className: 'layout__header' })
Layout.Nav = generic({ name: 'LayoutNav', className: 'layout__nav' })
Layout.Body = generic({ name: 'LayoutBody', className: 'layout__body' })
