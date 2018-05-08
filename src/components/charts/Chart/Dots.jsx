import PropTypes from 'prop-types'
import React from 'react'
import * as timeFormat from 'd3-time-format'

var d3 = Object.assign({}, timeFormat)

const Dots = (props) => {
  let circles = props.data.map((d, i) => {
    let xDataKey = d.x
    if (props.xDataType === 'date') {
      xDataKey = d3.timeFormat('%b %e')(d.x)
    }
    return (
      <circle
        className='dot' r='5'
        cx={props.xScale(d.x)}
        cy={props.yScale(d.y)}
        fill='#F3F4F2'
        stroke='#3f5175' strokeWidth='5px' key={i}
        onMouseOver={props.showToolTip}
        onMouseOut={props.hideToolTip}
        data-key={xDataKey}
        data-value={d.y}
      />
    )
  })

  return (
    <g> {circles} </g>
  )
}

Dots.propTypes = {
  showToolTip: PropTypes.func,
  hideToolTip: PropTypes.func,
  data: PropTypes.array,
  xScale: PropTypes.func,
  yScale: PropTypes.func,
  xDataType: PropTypes.string
}

Dots.defaultProps = {
  xDataType: 'number'
}

export default Dots
