import React from 'react'

const ToolTip = (props) => {
  let visibility = 'hidden'
  let transform = ''
  let x = 0

  let width = 150
  let height = 70
  let transformText = 'translate( 10 , 10)'
  const transformArrow = `translate(${(width / 2) - 15}, ${height - 2})`
  const transformLine = `translate(${(width / 2) - 15}, ${height})`

  if (props.tooltip.display === true) {
    const position = props.tooltip.pos
    x = position.x
    visibility = 'visible'
    transform = `translate(${x - (width / 2) + 5}, ${(-1) * (props.tooltip.data.value)})`
  } else {
    visibility = 'hidden'
  }
  return (
    <g transform={transform}>
      <polygon
        class='shadow'
        is points='10,0  30,0  20,10'
        transform={transformArrow}
        fill='#ffffff'
        opacity='1'
        stroke-width='2px'
        stroke={props.tooltip.color}
        visibility={visibility}
      />

      <rect
        width={width}
        is
        height={height}
        rx='0'
        ry='0'
        visibility={visibility}
        fill='#ffffff'
        opacity='1'
        stroke-opacity='1'
        stroke={props.tooltip.color}
        stroke-width='2px'
      />
      <line
        visibility={visibility}
        x1='14'
        y1='0'
        x2='26'
        y2='0'
        is
        opacity='1'
        stroke-opacity='1'
        stroke='white'
        stroke-width='2px'
        transform={transformLine}
      />
      <text is visibility={visibility} transform={transformText} >
        <tspan is x='0' y='10' text-anchor='left' font-size='12px' fill='#657d8e'>{`OPERATIONS (${props.tooltip.data.value})`}</tspan>
        <tspan is x='0' y='20' text-anchor='left' dy='12px' font-size='12px' fill='#657d8e'>{props.tooltip.data.key}</tspan>
      </text>

    </g>
  )
}

ToolTip.propTypes = {
  tooltip: React.PropTypes.object
}

export default ToolTip
