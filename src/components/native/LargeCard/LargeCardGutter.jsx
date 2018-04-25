import Flexbox from 'flexbox-react'
import React from 'react'
import palette from '../../../palette'
import filterAttributesFromProps from '../../../util/externalAttributeFilter'

const LargeCardGutter = (props) => {
  const externalAttributes = filterAttributesFromProps(props)
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
    <Flexbox
      {...externalAttributes}
      className={`fullview__left_border ${props.className}`}
      width='9px'
      style={{ backgroundColor: color }} />
  )
}

LargeCardGutter.defaultProps = {

}

LargeCardGutter.propTypes = {

}

export default LargeCardGutter
