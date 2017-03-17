import React from 'react'
import Flexbox from 'flexbox-react'

const MicroCardCount = (props) => {
  return (
    <Flexbox className='microcard__count'>{props.value}</Flexbox>
  )
}

MicroCardCount.defaultProps = {
  color: '#FFFFFF'
}

MicroCardCount.propTypes = {
  color: React.PropTypes.string

}

export default MicroCardCount
