import PropTypes from 'prop-types'
import React from 'react'
import palette from '../../palette'
import classnames from 'classnames'

const MicroCardGutter = props => {
  const { className, color, style = {}, ...rest } = props
  let backgroundColor = ''
  switch (color) {
    case 'critical':
      backgroundColor = palette.red
      break
    case 'warning':
      backgroundColor = palette.yellow
      break
    case 'normal':
      backgroundColor = palette.blue
      break
    case 'blue':
      backgroundColor = palette.blue
      break
    default:
      backgroundColor = color
  }

  return (
    <div
      className={classnames('microcard__gutter', className)}
      style={{ ...style, ...{ backgroundColor } }}
      {...rest}
    />
  )
}

MicroCardGutter.defaultProps = {
  color: '#FFFFFF'
}

MicroCardGutter.propTypes = {
  /**
   * Gutter color.  Use simple strings, e.g. red/green/blue, to pull standard
   * colors off the pallete, or, provide a web-friendly color string.
   */
  color: PropTypes.string
}

export default MicroCardGutter
