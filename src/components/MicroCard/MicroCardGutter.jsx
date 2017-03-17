import React from 'react'
import Flexbox from 'flexbox-react'
import palette from '../../palette'

const MicroCardGutter = (props) => {
  let color = ''
  switch (props.color) {
    case 'critical':
      color = palette.red
      break
    case 'warning':
      color = palette.yellow
      break
    case 'normal':
      color = palette.blue
      break
    case 'blue':
      color = palette.blue
      break
    default:
      color = props.color
  }

  return (
    <Flexbox className='microcard state__indicator' style={{ backgroundColor: color }} width='8px' />
  )
}

MicroCardGutter.defaultProps = {
  color: '#FFFFFF'
}

MicroCardGutter.propTypes = {
  color: React.PropTypes.string

}

export default MicroCardGutter
