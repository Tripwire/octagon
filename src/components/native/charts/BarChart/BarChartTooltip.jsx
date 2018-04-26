import PropTypes from 'prop-types'
import React from 'react'

const ToolTip = props => {
  let visibility = 'hidden'
  let transform = ''
  let x = 0

  let width = 150
  let height = 70
  let transformText = 'translate( 10 , 10)'
  const transformArrow = `translate(${width / 2 - 15}, ${height})`
  const transformLine = `translate(${width / 2 - 15}, ${height})`

  if (props.tooltip.display === true) {
    const position = props.tooltip.pos
    x = position.x
    visibility = 'visible'
    transform = `translate(${x - width / 2 + 5}, ${-1 * props.tooltip.height})`
  } else {
    visibility = 'hidden'
  }
  return (
    <g transform={transform} pointerEvents='none'>
      <polygon
        className='shadow'
        points='10,0  30,0  20,10'
        transform={transformArrow}
        fill='#ffffff'
        opacity='1'
        strokeWidth='2px'
        stroke={props.tooltip.color}
        visibility={visibility}
      />

      <rect
        width={width}
        height={height}
        rx='0'
        ry='0'
        visibility={visibility}
        fill='#ffffff'
        opacity='1'
        strokeOpacity='1'
        stroke={props.tooltip.color}
        strokeWidth='2px'
      />
      <line
        visibility={visibility}
        x1='13'
        y1='0'
        x2='27'
        y2='0'
        opacity='1'
        strokeOpacity='1'
        stroke='white'
        strokeWidth='3px'
        transform={transformLine}
      />
      <text visibility={visibility} transform={transformText}>
        <tspan
          x='0'
          y='10'
          textAnchor='left'
          fontSize='12px'
          fill='#657d8e'
        >{`${props.tooltip.title} (${props.tooltip.data.value})`}</tspan>
        <tspan
          x='0'
          y='20'
          textAnchor='left'
          dy='12px'
          fontSize='12px'
          fill='#657d8e'
        >
          {props.tooltip.data.key}
        </tspan>
      </text>
    </g>
  )
}

ToolTip.propTypes = {
  tooltip: PropTypes.object
}

export default ToolTip
