import React from 'react'

const normalIconUri = require('../../../assets/icon_check_outline.svg')
const warningIconUri = require('../../../assets/icon_eh_warning.svg')
const criticalIconUri = require('../../../assets/icon_eh_error.svg')

const ToolTip = (props) => {
  let visibility = 'hidden'
  let transform = ''
  let x = 0

  // TODO Increase width of tooltip if any of the counts are >999, or they will overflow out of the tooltip.
  let width = 180
  let height = 70
  let transformText = 'translate( 10 , 10)'
  const transformArrow = `translate(${(width / 2) - 20}, ${height})`
  const transformLine = `translate(${(width / 2) - 20}, ${height})`

  if (props.tooltip.display === true) {
    const position = props.tooltip.pos
    x = position.x
    visibility = 'visible'
    // TODO the position of the tooltip is relative to the scaled sizing of the barchart, consider exposing props to override when it's wrong
    transform = `translate(${x - (width / 2) + 5}, ${(-1) * (props.tooltip.height) - 11})`
  } else {
    visibility = 'hidden'
  }

  const normalCount = props.tooltip.data.normalCount
  const criticalCount = props.tooltip.data.criticalCount
  const warningCount = props.tooltip.data.warningCount

  const normalFontWeight = 300
  let criticalFontWeight = normalFontWeight
  let warningFontWeight = normalFontWeight
  if (criticalCount > 0) {
    criticalFontWeight = 400
  } else if (warningCount > 0) {
    warningFontWeight = 400
  }

  return (
    <g transform={transform} pointerEvents='none'>
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
        x1='12'
        y1='0'
        x2='28'
        y2='0'
        is
        opacity='1'
        stroke-opacity='1'
        stroke='white'
        stroke-width='3px'
        transform={transformLine}
      />
      <text is visibility={visibility} transform={transformText} >
        <tspan is x='80' y='10' text-anchor='middle' font-size='12px' font-weight='700' fill='#657d8e'>{props.tooltip.data.date}</tspan>
        <tspan is x='30' y='28' text-anchor='end' dy='12px' font-size='23px' font-weight={normalFontWeight} fill='#657d8e'>{normalCount}</tspan>
        <tspan is x='88' y='28' text-anchor='end' dy='12px' font-size='23px' font-weight={criticalFontWeight} fill='#c0392b'>{criticalCount}</tspan>
        <tspan is x='148' y='28' text-anchor='end' dy='12px' font-size='23px' font-weight={warningFontWeight} fill='#ff9e2c'>{warningCount}</tspan>
      </text>
      <image
        xmlns='http://www.w3.org/2000/svg'
        x={41}
        y={34}
        width={16}
        height={16}
        xlinkHref={normalIconUri}
        key={0}
        className='svgicon'
        pointerEvents='none'
        visibility={visibility}
      />
      <image
        xmlns='http://www.w3.org/2000/svg'
        x={93}
        y={30}
        width={30}
        height={30}
        xlinkHref={criticalIconUri}
        key={1}
        className='svgicon'
        pointerEvents='none'
        visibility={visibility}
      />
      <image
        xmlns='http://www.w3.org/2000/svg'
        x={152}
        y={31}
        width={30}
        height={30}
        xlinkHref={warningIconUri}
        key={2}
        className='svgicon'
        pointerEvents='none'
        visibility={visibility}
      />

    </g>
  )
}

ToolTip.propTypes = {
  tooltip: React.PropTypes.object
}

export default ToolTip
