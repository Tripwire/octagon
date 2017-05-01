import React, { PropTypes } from 'react'
import palette from '../../../palette'
var d3 = Object.assign({}, require('d3-time-format'))

const { array, func, number, string } = PropTypes

const warningIconUri = require('../../../assets/icon_eh_warning.svg')
const criticalIconUri = require('../../../assets/icon_eh_error.svg')

const Rect = (props) => {
  const { borderRadius, data, fill, innerHeight, xScale, yScale } = props

  const rects = data.map((d, i) => {
    let xDataKey = d.x
    let xDateLabel = ''
    let iconUri = ''
    let fillColor = fill
    if (props.xDataType === 'date') {
      xDataKey = d3.timeFormat('%m/%d/%Y (%H:%M)')(d.x)
      xDateLabel = d3.timeFormat('%m/%d')(d.x)
    }
    if (d.currentState === 'warning') {
      fillColor = palette.yellow
      iconUri = warningIconUri
    } else if (d.currentState === 'critical') {
      fillColor = palette.red
      iconUri = criticalIconUri
    }

    const filledInRectangleHeight = innerHeight - yScale(d.y)
    let iconY = innerHeight / 1.5
    if (yScale(d.y) > 83) {
      iconY = yScale(d.y) - 8 - 25
    }

    return (
      <g key={`${i}-g`}>

        <rect
          x={xScale(d.x)}
          y={yScale(d.y)}
          width={xScale.bandwidth()}
          height={filledInRectangleHeight}
          className='shadow'
          fill={fillColor}
          data-tooltip-pos={filledInRectangleHeight}
          key={i}
          rx={borderRadius}
          ry={borderRadius}
          data-key={xDataKey}
          data-value={d.y}
      />
        <rect
          x={xScale(d.x)}
          y={0}
          width={xScale.bandwidth()}
          height={innerHeight}
          fill={fillColor}
          fillOpacity={0}
          data-tooltip-pos={filledInRectangleHeight}
          key={`${i}-container`}
          rx={borderRadius}
          ry={borderRadius}
          data-key={xDataKey}
          data-value={d.y}
          data-tooltip-x={xScale(d.x) + 5}
          data-tooltip-y={innerHeight}
          onMouseEnter={props.showToolTip}
          onMouseOut={props.hideToolTip}
      />
        { (props.showIcon)
        ? <image
          xmlns='http://www.w3.org/2000/svg'
          x={(xScale(d.x))}
          y={iconY}
          width={xScale.bandwidth()}
          height='50px'
          xlinkHref={iconUri}
          key={`${i}-i`}
          className='svgicon'
          pointerEvents='none'
        />
       : '' }
        { (props.showXLabel)
        ? <text
          fontSize={props.XLabelFontSize}
          x={(xScale(d.x)) + (xScale.bandwidth() / 2)}
          key={`${i}-t`}
          width={xScale.bandwidth()}
          y={innerHeight + 13}
          fill={palette.grey}
          textAnchor='middle'>
          {xDateLabel}
        </text>
      : '' }
      </g>
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
  yScale: func.isRequired,
  showXLabel: React.PropTypes.bool,
  showIcon: React.PropTypes.bool,
  XLabelFontSize: string
}

Rect.defaultProps = {
  borderRadius: 3,
  fill: palette.blue,
  showXLabel: false,
  showIcon: false,
  XLabelFontSize: '16'
}

export default Rect
