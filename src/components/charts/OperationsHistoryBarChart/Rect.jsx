import React, { PropTypes } from 'react'
import palette from '../../../palette'
var d3 = Object.assign({}, require('d3-time-format'))

const { array, func, number, string } = PropTypes

const warningIconUri = require('../../../assets/icon_eh_warning.svg')
const criticalIconUri = require('../../../assets/icon_eh_error.svg')

const Rect = (props) => {
  const { borderRadius, data, fill, innerHeight, xScale, yScale } = props

  const rects = data.map((d, i) => {
    let xDataKey = d3.timeFormat('%m/%d/%Y (%H:%M)')(d.label)
    let xDateLabel = d3.timeFormat('%m/%d')(d.label)
    let iconUri = ''
    let fillColor = fill
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
          x={xScale(d.label)}
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
          x={xScale(d.label)}
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
          data-tooltip-current-state={d.currentState}
          data-tooltip-date={d3.timeFormat('%A %B %-d')(d.label)}
          data-tooltip-critical-count={d.critical}
          data-tooltip-warning-count={d.warning}
          data-tooltip-normal-count={d.normal}
          data-tooltip-x={xScale(d.label) + 5}
          data-tooltip-y={innerHeight}
          onMouseEnter={props.showToolTip}
          onMouseOut={props.hideToolTip}
      />
        { (props.showIcon)
        ? <image
          xmlns='http://www.w3.org/2000/svg'
          x={(xScale(d.label))}
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
          x={(xScale(d.label)) + (xScale.bandwidth() / 2)}
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
