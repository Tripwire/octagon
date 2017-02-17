import React from 'react'

const ToolTip = (props) => {
  let visibility = 'hidden'
  let transform = ''
  let x = 0
  let y = 0
  let width = 150
  let height = 70
  let transformText = `translate(${width / 2}, ${height / 2 - 5})`
  let transformArrow = ''

  if (props.tooltip.display === true) {
    const position = props.tooltip.pos
    x = position.x
    y = position.y
    visibility = 'visible'
    if (y > height) {
      transform = `translate(${x - width / 2}, ${y - height - 20})`
      transformArrow = `translate(${width / 2 - 20}, ${height - 2})`
    } else if (y < height) {
      transform = `translate(${x - width / 2}, ${Math.round(y) + 20})`
      transformArrow = `translate(${width / 2 - 20}, 0) rotate(180, 20, 0)`
    }
  } else {
    visibility = 'hidden'
  }
  return (
    <g transform={transform}>
      <rect class='shadow' is width={width} height={height} rx='5' ry='5' visibility={visibility} fill='#6391da' opacity='.9' />
      <polygon
        class='shadow'
        is points='10,0  30,0  20,10'
        transform={transformArrow}
        fill='#6391da' opacity='.9'
        visibility={visibility}
      />
      <text is visibility={visibility} transform={transformText} >
        <tspan is x='0' text-anchor='middle' font-size='15px' fill='#ffffff'>{props.tooltip.data.key}</tspan>
        <tspan is x='0' text-anchor='middle' dy='25' font-size='20px' fill='#a9f3ff'>{`${props.tooltip.data.value}`}</tspan>
      </text>
    </g>
  )
}

ToolTip.propTypes = {
  tooltip: React.PropTypes.object
}

export default ToolTip

