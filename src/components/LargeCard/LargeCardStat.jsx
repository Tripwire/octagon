import React from 'react'
import Flexbox from 'flexbox-react'

const LargeCardStat = (props) => {
  return (
    <Flexbox className={`stats ${props.className}`} flexDirection='row'>
      <span className='label'>{props.name}</span>
      <span className='value'>{props.value}</span>
    </Flexbox>
  )
}

LargeCardStat.defaultProps = {
  name: '',
  value: 0
}

LargeCardStat.propTypes = {
  name: React.PropTypes.string,
  value: React.PropTypes.number
}

export default LargeCardStat
