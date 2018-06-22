import Flexbox from 'flexbox-react'
import PropTypes from 'prop-types'
import React from 'react'

const LargeCardTitle = props => {
  const { title, description, ...rest } = props
  return (
    <Flexbox flexGrow={3} flexDirection='column' {...rest}>
      <div title={title} className='title'>
        {title}
      </div>
      <div title={description} className='friendly_name'>
        {description}
      </div>
    </Flexbox>
  )
}

LargeCardTitle.defaultProps = {
  title: '',
  description: ''
}

LargeCardTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default LargeCardTitle
