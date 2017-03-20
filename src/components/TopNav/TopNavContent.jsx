import React from 'react'

const TopNavContent = (props) => {
  return (
    <div className={`nav__main--${props.align}`}>
      <div className={`nav__item ` + ((props.align === 'right') ? 'nav__link' : '')}>
        {props.children}
      </div>
    </div>
  )
}

TopNavContent.defaultProps = {
  align: 'left'
}

TopNavContent.propTypes = {
  align: React.PropTypes.string
}

export default TopNavContent
