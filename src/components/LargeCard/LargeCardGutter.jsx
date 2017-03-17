import React from 'react'
import colorPallete from '../colorPallete'
import Flexbox from 'flexbox-react'

const LargeCardGutter = (props) => {
  let color = ''
  switch (props.color) {
    case 'critical':
      color = colorPallete.red
      break
    case 'warning':
      color = colorPallete.yellow
      break
    case 'normal':
      color = colorPallete.blue
      break
    case 'blue':
      color = colorPallete.blue
      break
    default:
      color = props.color
  }
  return (
    <Flexbox className='fullview__left_border' width='9px' style={{backgroundColor: color}} />
  )
}

LargeCardGutter.defaultProps = {

}

LargeCardGutter.propTypes = {

}

export default LargeCardGutter
