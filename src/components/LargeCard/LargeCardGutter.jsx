import Flexbox from 'flexbox-react'
import React from 'react'
import palette from '../../palette'
import PropTypes from 'prop-types'
import filterAttributesFromProps from '../../util/externalAttributeFilter'

const STATE_COLOR_MAP = {
  CRITICAL: 'critical',
  WARNING: 'warning',
  NORMAL: 'normal',
  BLUE: 'blue' // @deprecated
}
const LargeCardGutter = (props) => {
  const externalAttributes = filterAttributesFromProps(props)
  let color = ''
  switch (props.color) {
    case STATE_COLOR_MAP.CRITICAL:
      color = palette.red
      break
    case STATE_COLOR_MAP.WARNING:
      color = palette.yellow
      break
    case STATE_COLOR_MAP.NORMAL:
      color = palette.blue
      break
    case STATE_COLOR_MAP.BLUE:
      color = palette.blue
      break
    default:
      color = props.color
  }
  return (
    <Flexbox
      {...externalAttributes}
      className={`fullview__left_border ${props.className || ''}`}
      width='9px'
      style={{ backgroundColor: color }} />
  )
}

LargeCardGutter.defaultProps = {

}

LargeCardGutter.propTypes = {
  /** color of gutter. use `LargeCardGutter.STATE_COLOR_MAP` or any standard web color string  */
  color: PropTypes.oneOf(
    Object.values(STATE_COLOR_MAP).concat(
      PropTypes.string
    )
  )
}
LargeCardGutter.STATE_COLOR_MAP = STATE_COLOR_MAP

export default LargeCardGutter
