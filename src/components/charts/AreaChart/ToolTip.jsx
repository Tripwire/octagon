import React from 'react'

const ToolTip = (props) => {
  let visibility = 'hidden'
  let transform = ''
  let x = 0
  let y = 0
  let width = 150
  let height = 40
  let transformArrow = ''
  let transformText = `translate(${width / 2}, ${height / 2 - 5})`

  if (props.tooltip.display === true) {
    const position = props.tooltip.pos
    x = position.x
    y = position.y
    visibility = 'visible'
    if (y < height) {
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
      <polygon
        class='shadow'
        is points='10,0  30,0  20,10'
        transform={transformArrow}
        fill='#ffffff' opacity='1'
        stroke='#A676B2'
        stroke-width='1px'
        visibility={visibility}
      />
      <rect class='shadow' is width={width} height={height} rx='0' ry='0' visibility={visibility} fill='#ffffff' stroke='#A676B2' stroke-width='1px' />
      {/* we want tooltip content a little flexible by allow passing direct from whatever call Tooltip */}
      <g visibility={visibility} transform={transformText}>
        {props.children}
      </g>
    </g>
  )
}

ToolTip.propTypes = {
  tooltip: React.PropTypes.object,
  children: React.PropTypes.node
}

export default ToolTip
