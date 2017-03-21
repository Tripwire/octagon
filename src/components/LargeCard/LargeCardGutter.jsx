import React from 'react'
import palette from '../../palette'
import Flexbox from 'flexbox-react'

const LargeCardGutter = (props) => {
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
    <Flexbox className='fullview__left_border' width='9px' style={{ backgroundColor: color }} />
  )
}

LargeCardGutter.defaultProps = {

}

LargeCardGutter.propTypes = {

}

export default LargeCardGutter
