import Flexbox from 'flexbox-react'
import React from 'react'
import filterAttributesFromProps from '../../util/externalAttributeFilter'

const LargeCardStat = (props) => {
  const externalAttributes = filterAttributesFromProps(props)
  return (
    <Flexbox {...externalAttributes} className={`stats ${props.className}`} flexDirection='row'>
      <span className='label'>{props.label}</span>
      <span className='value'>{props.value}</span>
    </Flexbox>
  )
}

LargeCardStat.defaultProps = {
  name: '',
  value: 0
}

LargeCardStat.propTypes = {
  label: React.PropTypes.string,
  value: React.PropTypes.number
}

export default LargeCardStat
