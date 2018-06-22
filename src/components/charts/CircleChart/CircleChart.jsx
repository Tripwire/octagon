import PropTypes from 'prop-types'
import React from 'react'
import palette from '../../../palette'
import * as shape from 'd3-shape'

const d3 = Object.assign({}, shape)

const twoPi = Math.PI * 2

const CircleChart = props => {
  const {
    color,
    border,
    endPercent,
    radius,
    padding,
    backgroundOpacity,
    ...rest
  } = props
  const center = radius + padding
  const boxSize = (radius + padding) * 2
  const endPercentValue = props.endPercentValue

  const arc = d3
    .arc()
    .startAngle(0)
    .innerRadius(radius)
    .outerRadius(radius - border)
  const arcbg = d3
    .arc()
    .startAngle(0)
    .innerRadius(radius - 4)
    .outerRadius(radius - 1)

  return (
    <div {...rest}>
      <svg width={boxSize} height={boxSize}>
        <g transform={`translate(${center},${center})`}>
          <g className='progress-meter'>
            <path
              className='background'
              fill='#8faec1'
              fillOpacity={backgroundOpacity}
              d={arcbg.endAngle(twoPi)()}
            />
            <path
              className='foreground'
              fill={color}
              fillOpacity='1'
              d={arc.endAngle(twoPi * endPercent)()}
            />
            <text
              className='current-progress'
              fill={color}
              textAnchor='middle'
              dy='.35em'
              fontSize='2.5em'
              fontWeight='300'
            >
              {endPercentValue}
            </text>
          </g>
        </g>
      </svg>
    </div>
  )
}

CircleChart.propTypes = {
  color: PropTypes.string,
  border: PropTypes.number,
  endPercent: PropTypes.number,
  radius: PropTypes.number,
  padding: PropTypes.number,
  endPercentValue: PropTypes.string,
  backgroundOpacity: PropTypes.number
}

CircleChart.defaultProps = {
  color: palette.blue,
  border: 5,
  padding: 10,
  endPercent: 0.45,
  radius: 45,
  backgroundOpacity: 0.5
}

export default CircleChart
