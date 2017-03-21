import React from 'react'

const LargeCardKeyValue = (props) => {
  return (
    <div className={`summary_info ${props.className}`} onClick={props.onClick}>
      <span className='label'>{props.name}</span>
      <span className='count'>{props.value}</span>
    </div>
  )
}

LargeCardKeyValue.defaultProps = {
  name: '',
  value: 0
}

LargeCardKeyValue.propTypes = {
  name: React.PropTypes.string,
  value: React.PropTypes.number
}

export default LargeCardKeyValue
