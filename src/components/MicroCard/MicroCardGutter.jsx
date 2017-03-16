import React from 'react'
import Flexbox from 'flexbox-react'
import colorPallete from '../colorPallete'

const MicroCardGutter = (props) => {
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
    <Flexbox className='microcard state__indicator' style={{backgroundColor: color}} width='8px' />
  )
}

MicroCardGutter.defaultProps = {
  color: '#FFFFFF'
}

MicroCardGutter.propTypes = {
  color: React.PropTypes.string

}

export default MicroCardGutter
