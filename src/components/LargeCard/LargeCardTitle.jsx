import Flexbox from 'flexbox-react'
import React from 'react'
import filterAttributesFromProps from '../../util/externalAttributeFilter'

const LargeCardTitle = (props) => {
  const externalAttributes = filterAttributesFromProps(props)
  return (
    <Flexbox {...externalAttributes} flexGrow={3} flexDirection='column'>
      <div title={props.title} className='title'>{props.title}</div>
      <div title={props.description} className='text-small textGray'>{props.description}</div>
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
