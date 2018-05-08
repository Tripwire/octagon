import PropTypes from 'prop-types'
import React from 'react'
import * as shape from 'd3-shape'

const d3 = Object.assign({}, shape)
const { array, func, string } = PropTypes

const PlotArea = props => {
  const { color, data, xScale, yScale } = props
  const area = d3
    .area()
    .x(d => xScale(d.x))
    .y0(yScale(yScale.domain()[0]))
    .y1(d => yScale(d.y))
    .curve(d3.curveCardinal)

  return (
    <g>
      <path className='area' fill={color} d={area(data)} />
    </g>
  )
}

PlotArea.propTypes = {
  color: string,
  data: array,
  xScale: func.isRequired,
  yScale: func.isRequired
}

PlotArea.defaultProps = {}

export default PlotArea
