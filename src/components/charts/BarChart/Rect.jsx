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
    return (
      <g
        key={`${i}-g`}
        onMouseEnter={props.showToolTip}
        onMouseOut={props.hideToolTip}
      >

        <rect
          className='shadow'
          fill={fillColor}
          height={innerHeight - yScale(d.y)}
          data-tooltip-pos={innerHeight - yScale(d.y)}
          key={i}
          cx={xScale(d.x) + 5}
          cy={yScale(d.y)}
          rx={borderRadius}
          ry={borderRadius}
          width={xScale.bandwidth()}
          x={xScale(d.x)}
          y={yScale(d.y)}
          data-key={xDataKey}
          data-value={d.y}

      />
        <rect
          fill={fillColor}
          fillOpacity={0}
          height={innerHeight}
          data-tooltip-pos={innerHeight - yScale(d.y)}
          key={`${i}-container`}
          cx={xScale(d.x) + 5}
          cy={innerHeight}
          rx={borderRadius}
          ry={borderRadius}
          width={xScale.bandwidth()}
          x={xScale(d.x)}
          y={0}
          data-key={xDataKey}
          data-value={d.y}

      />
        { (props.showIcon)
        ? <image
          xmlns='http://www.w3.org/2000/svg'
          xlinkHref={iconUri}
          x={(xScale(d.x))}
          key={`${i}-i`}
          y={innerHeight / 2}
          width={xScale.bandwidth()}
          height='50px'
          className='svgicon'
          cx={xScale(d.x)}
          cy={yScale(d.y)}
          pointerEvents='none'

        />
       : '' }
        { (props.showXLabel)
        ? <text fontSize={props.XLabelFontSize} x={(xScale(d.x)) + (xScale.bandwidth() / 2)} key={`${i}-t`} width={xScale.bandwidth()} y={innerHeight + 13} fill={palette.grey} textAnchor='middle'>
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
