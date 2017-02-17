import React, { PropTypes } from 'react'
import colorPallete from '../../colorPallete'
var d3 = Object.assign({}, require('d3-time-format'))

const { array, func, number, string } = PropTypes

const Rect = (props) => {
  const { borderRadius, data, fill, innerHeight, xScale, yScale } = props
  const rects = data.map((d, i) => {
    let xDataKey = d.x
    let fillColor = fill
    if (props.xDataType === 'date') {
      xDataKey = d3.timeFormat('%m/%d/%Y (%H:%M)')(d.x)
    }
    if (d.currentState === 'warning') {
      fillColor = colorPallete.yellow
    } else if (d.currentState === 'critical') {
      fillColor = colorPallete.red
    }
    return (
      <rect
        className='shadow'
        fill={fillColor}
        height={innerHeight - yScale(d.y)}
        key={i}
        cx={xScale(d.x)}
        cy={yScale(d.y)}
        rx={borderRadius}
        ry={borderRadius}
        width={xScale.bandwidth()}
        x={xScale(d.x)}
        y={yScale(d.y)}
        data-key={xDataKey}
        data-value={d.y}
        onMouseEnter={props.showToolTip}
        onMouseOut={props.hideToolTip}
      />
    )
  })

  return (
    <g>
      {rects}
    </g>
  )
}

Rect.propTypes = {
  borderRadius: number,
  data: array.isRequired,
  fill: string,
  innerHeight: number.isRequired,
  hideToolTip: func.isRequired,
  showToolTip: func.isRequired,
  xDataType: string.isRequired,
  xScale: func.isRequired,
  yScale: func.isRequired
}

Rect.defaultProps = {
  borderRadius: 3,
  fill: colorPallete.blue
}

export default Rect
