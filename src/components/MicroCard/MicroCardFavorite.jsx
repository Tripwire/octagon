import React from 'react'
import FavoriteButton from '../FavoriteButton'

const MicroCardFavorite = (props) => {
  return (
    <div className='microcard_favorite'>
      <FavoriteButton isFavorited={props.isFavorited} />
    </div>
  )
}

MicroCardFavorite.defaultProps = {

}

MicroCardFavorite.propTypes = {
  isFavorited: React.PropTypes.bool
}

export default MicroCardFavorite
