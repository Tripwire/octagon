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
        title: '',
        height: '',
        data: { key: '', value: '' },
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
        title: this.props.tooltipTitle,
        height: e.target.getAttribute('data-tooltip-pos') - 35,
        data: {
          key: e.target.getAttribute('data-key'),
          value: e.target.getAttribute('data-value')
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
        data: { key: '', value: '' }
      }
    })
  }

  render () {
    const { barPadding, borderRadius, height, margin, width, xDataType, showXLabel, showIcon } = this.props
    const innerWidth = width - (margin.left + margin.right)
    const innerHeight = height - (margin.top + margin.bottom)
    const transform = `translate(-${margin.left}, ${margin.top})`
    let xScale = null
    const data = JSON.parse(JSON.stringify(this.props.data))
    const xScaleTimeLineData = JSON.parse(JSON.stringify(this.props.data))

    if (this.props.xDataType === 'date') {
      const parseDate = d3.timeParse('%m-%d-%Y %H:%M:%S')
      data.forEach((d) => {
        d.x = parseDate(d.x)
      })
      xScaleTimeLineData.forEach((d) => {
        d.x = parseDate(d.x)
      })

      xScale = ChartUtils.xScaleBand(data, innerWidth, barPadding)
    } else {
      xScale = ChartUtils.xScaleLinear(data, innerWidth, barPadding)
    }

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
              xDataType={xDataType}
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
  xDataType: string,
  showXLabel: bool,
  showIcon: bool,
  tooltipTitle: string,
  XLabelFontSize: string
}

OperationsHistoryBarChart.defaultProps = {
  barPadding: 0.1,
  borderRadius: 3,
  height: 70,
  margin: { top: 0, right: 5, bottom: -5, left: 10 },
  width: 200,
  xDataType: 'month',
  showXLabel: false,
  showIcon: false,
  tooltipTitle: '',
  XLabelFontSize: '16'
}

export default OperationsHistoryBarChart
