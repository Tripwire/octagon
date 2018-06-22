import Flexbox from 'flexbox-react'
import React from 'react'
import palette from '../../palette'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const STATE_COLOR_MAP = {
  CRITICAL: 'critical',
  WARNING: 'warning',
  NORMAL: 'normal',
  BLUE: 'blue' // @deprecated
}
const LargeCardGutter = props => {
  const { style = {}, className, color, ...rest } = props
  let backgroundColor
  switch (color) {
    case STATE_COLOR_MAP.CRITICAL:
      backgroundColor = palette.red
      break
    case STATE_COLOR_MAP.WARNING:
      backgroundColor = palette.yellow
      break
    case STATE_COLOR_MAP.NORMAL:
      backgroundColor = palette.blue
      break
    case STATE_COLOR_MAP.BLUE:
      backgroundColor = palette.blue
      break
    default:
      backgroundColor = props.color
  }
  return (
    <Flexbox
      className={classnames('fullview__left_border', className)}
      width='9px'
      style={{ ...style, ...{ backgroundColor } }}
      {...rest}
    />
  )
}

LargeCardGutter.defaultProps = {}

LargeCardGutter.propTypes = {
  /** color of gutter. use `LargeCardGutter.STATE_COLOR_MAP` or any standard web color string  */
  color: PropTypes.string
}
LargeCardGutter.STATE_COLOR_MAP = STATE_COLOR_MAP

export default LargeCardGutter
