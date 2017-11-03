import PropTypes from 'prop-types'
import React from 'react'
import '../../../styles/components/favorite-button.css'

const FavoriteButton = (props) => {
  let favoriteIconClass = ''
  if (props.isFavorited) {
    favoriteIconClass = 'icon_star'
  } else {
    favoriteIconClass = 'icon_star_alt star_gray'
  }
  return (
    <div className='favorite-button'>
      <i className={favoriteIconClass} />
    </div>
  )
}

FavoriteButton.defaultProps = {
  isFavorited: false
}

FavoriteButton.propTypes = {
  isFavorited: PropTypes.bool
}

export default FavoriteButton
