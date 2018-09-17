import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

/**
 * Menu item for navigation menu
 * @param {*} props
 */
function SideNavMenuItem (props) {
  const { active, image, className, children, as, to, ...rest } = props
  const additionalProps = {}

  const elementReplaced = as && to // then I'm assuming that this is a NavLink but don't want a direct class reference here
  const ElementType = as || 'div'

  if (elementReplaced) {
    additionalProps.activeClassName = 'side-nav_active'
    additionalProps.to = to
  }
  const elementClasses = cx('side-nav__icon-container', {
    'side-nav_active': active && !elementReplaced
  })

  return (
    <li className={cx('side-nav__item', className)}>
      <ElementType
        className={elementClasses}
        {...additionalProps}
        {...rest}
        style={{ width: '100%' }}
      >
        <React.Fragment>
          {image ? <img src={image} /> : null}
          {children}
        </React.Fragment>
      </ElementType>
    </li>
  )
}

SideNavMenuItem.defaultProps = {
  active: false,
  image: ''
}

SideNavMenuItem.propTypes = {
  active: PropTypes.bool,
  /** image URI */
  image: PropTypes.string
}

export default SideNavMenuItem
