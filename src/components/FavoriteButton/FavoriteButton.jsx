import PropTypes from 'prop-types'
import React from 'react'
import '../../styles/components/favorite-button.css'
import classnames from 'classnames'

const FavoriteButton = props => {
  const { isFavorited, className, children, ...rest } = props
  const favoriteIconClass = isFavorited
    ? 'icon_star'
    : 'icon_star_alt star_gray'
  return (
    <div
      className={classnames('octagon', 'favorite-button', className)}
      {...rest}
    >
      <i className={favoriteIconClass} />
      {children}
    </div>
  )
}

FavoriteButton.defaultProps = {
  isFavorited: false
}

FavoriteButton.propTypes = {
  /**
   * Set button to favorite mode.
   */
  isFavorited: PropTypes.bool
}

export default FavoriteButton
