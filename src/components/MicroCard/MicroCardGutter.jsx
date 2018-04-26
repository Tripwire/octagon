import PropTypes from 'prop-types'
import React from 'react'
import Flexbox from 'flexbox-react'
import palette from '../../palette'
import filterAttributesFromProps from '../../util/externalAttributeFilter'

const MicroCardGutter = props => {
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

  const externalAttributes = filterAttributesFromProps(props)
  return (
    <Flexbox
      {...externalAttributes}
      className={`microcard state__indicator ${props.className}`}
      style={{ backgroundColor: color }}
    />
  )
}

MicroCardGutter.defaultProps = {
  color: '#FFFFFF'
}

MicroCardGutter.propTypes = {
  color: PropTypes.string
}

export default MicroCardGutter
