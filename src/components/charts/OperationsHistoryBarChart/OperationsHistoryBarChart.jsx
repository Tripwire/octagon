import React, { PropTypes } from 'react'
import Rect from './Rect'
import ToolTip from './OperationsHistoryBarChartTooltip'
import * as ChartUtils from '../Chart/utils'
import filterAttributesFromProps from '../../../util/externalAttributeFilter'

var d3 = Object.assign({}, require('d3-time-format'), require('d3-axis'))
const { array, number, object, string, bool } = PropTypes
class OperationsHistoryBarChart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tooltip: {
        display: false,
        color: null,
        height: '',
        data: { date: '', criticalCount: '', warningCount: '', normalCount: '' },
        pos: { x: '', y: '' }
      }
    }
    this.showToolTip = this.showToolTip.bind(this)
    this.hideToolTip = this.hideToolTip.bind(this)
  }

  showToolTip (e) {
    this.setState({
      tooltip: {
        display: true,
        color: e.target.getAttribute('fill'),
        height: e.target.getAttribute('data-tooltip-pos') - 35,
        data: {
          date: e.target.getAttribute('data-tooltip-date'),
          criticalCount: e.target.getAttribute('data-tooltip-critical-count'),
          warningCount: e.target.getAttribute('data-tooltip-warning-count'),
          normalCount: e.target.getAttribute('data-tooltip-normal-count')
        },
        pos: {
          x: e.target.getAttribute('data-tooltip-x'),
          y: e.target.getAttribute('data-tooltip-y')
        }
      }
    })
  }

  hideToolTip () {
    this.setState({
      tooltip: {
        display: false,
        data: { date: '', criticalCount: '', warningCount: '', normalCount: '' }
      }
    })
  }

  render () {
    const { barPadding, borderRadius, height, margin, width, showXLabel, showIcon } = this.props
    const innerWidth = width - (margin.left + margin.right)
    const innerHeight = height - (margin.top + margin.bottom)
    const transform = `translate(-${margin.left}, ${margin.top})`
    const data = JSON.parse(JSON.stringify(this.props.data))
    data.forEach((d) => {
      // TODO d.label is actually a date once it's parsed in, so we should rename it to d.date
      d.label = d3.timeParse('%m-%d-%Y %H:%M:%S')(d.label)
      d.y = d.normal + d.warning + d.critical
      if (d.critical > 0) {
        d.currentState = 'critical'
      } else if (d.warning > 0) {
        d.currentState = 'warning'
      } else {
        d.currentState = 'normal'
      }
    })
    const xSeries = data.map((d) => {
      return {x: d.label}
    })

    const xScale = ChartUtils.xScaleBand(xSeries, innerWidth, barPadding)
    const yScale = ChartUtils.yScaleLinear(data, innerHeight, 0)

    const externalAttributes = filterAttributesFromProps(this.props)
    return (
      <div {...externalAttributes} className={`bar-chart__container svg-overflow-visible ${this.props.className}`}>
        <svg width={width} height={height}>
          <g transform={transform}>
            <Rect
              borderRadius={borderRadius}
              data={data}
              fill='#4898da'
              hideToolTip={this.hideToolTip}
              innerHeight={innerHeight}
              showToolTip={this.showToolTip}
              transform={transform}
              xScale={xScale}
              yScale={yScale}
              xDataType='date'
              showXLabel={showXLabel}
              showIcon={showIcon}
              XLabelFontSize={this.props.XLabelFontSize}
            />
            <ToolTip tooltip={this.state.tooltip} yScale={yScale} />
          </g>
        </svg>
      </div>
    )
  }
}

OperationsHistoryBarChart.propTypes = {
  barPadding: number,
  borderRadius: number,
  data: array.isRequired,
  height: number,
  margin: object,
  width: number,
  showXLabel: bool,
  showIcon: bool,
  XLabelFontSize: string
}

OperationsHistoryBarChart.defaultProps = {
  barPadding: 0.1,
  borderRadius: 3,
  height: 70,
  margin: { top: 0, right: 5, bottom: -5, left: 10 },
  width: 200,
  showXLabel: false,
  showIcon: false,
  XLabelFontSize: '16'
}

export default OperationsHistoryBarChart
