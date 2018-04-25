import PropTypes from 'prop-types'
import React from 'react'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import filterAttributesFromProps from '../../../util/externalAttributeFilter'

const MicroCardFavorite = (props) => {
  const externalAttributes = filterAttributesFromProps(props)
  return (
    <div {...externalAttributes} className={`microcard_favorite ${props.className}`}>
      <FavoriteButton isFavorited={props.isFavorited} />
    </div>
  )
}

MicroCardFavorite.defaultProps = {

}

MicroCardFavorite.propTypes = {
  isFavorited: PropTypes.bool
}

export default MicroCardFavorite
