import React from 'react'
import Flexbox from 'flexbox-react'

const LargeCardTitle = (props) => {
  return (
    <Flexbox flexGrow={3} flexDirection='column'>
      <div className='title'>{props.title}</div>
      <div className='text-small textGray'>{props.description}</div>
    </Flexbox>
  )
}

LargeCardTitle.defaultProps = {
  title: '',
  description: ''
}

LargeCardTitle.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string
}

export default LargeCardTitle
