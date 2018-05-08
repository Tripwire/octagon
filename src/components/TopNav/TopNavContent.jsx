import PropTypes from 'prop-types'
import React from 'react'
import externalAttributeFilter from '../../util/externalAttributeFilter'
import classnames from 'classnames'

const TopNavContent = props => {
  var handledProps = externalAttributeFilter(props)
  return (
    <div
      {...handledProps}
      className={classnames(
        `nav__main--${props.align}`,
        handledProps.className
      )}
    >
      <div
        className={`nav__item ` + (props.align === 'right' ? 'nav__link' : '')}
      >
        {props.children}
      </div>
    </div>
  )
}

TopNavContent.defaultProps = {
  align: 'left'
}

TopNavContent.propTypes = {
  align: PropTypes.string
}

export default TopNavContent
