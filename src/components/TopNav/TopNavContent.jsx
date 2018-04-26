import PropTypes from 'prop-types'
import React from 'react'

const TopNavContent = props => {
  return (
    <div className={`nav__main--${props.align}`}>
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
