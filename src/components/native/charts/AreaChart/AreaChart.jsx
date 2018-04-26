import '../../../../styles/components/area-chart.css'
import PropTypes from 'prop-types'
import React from 'react'
import PlotArea from './PlotArea'
import Axis from './Axis'
import ToolTip from './ToolTip'
import Dots from '../Chart/Dots'
import ChartOverlay from '../Chart/ChartOverlay'
import * as ChartUtils from '../Chart/utils'
import filterAttributesFromProps from '../../../../util/externalAttributeFilter'

var d3 = Object.assign(
  {},
  require('d3-shape'),
  require('d3-format'),
  require('d3-axis')
)

class AreaChart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tooltip: {
        display: false,
        data: { key: '', value: '' },
        pos: { x: '', y: '' }
      }
    }
    this.showToolTip = this.showToolTip.bind(this)
    this.hideToolTip = this.hideToolTip.bind(this)
    this.mouseMove = this.mouseMove.bind(this)
    this.renderToolTip = this.renderToolTip.bind(this)
  }

  mouseMove (toolTipData, toolTipPos) {
    this.setState({
      tooltip: {
        display: true,
        data: toolTipData,
        pos: toolTipPos
      }
    })
  }

  showToolTip (e) {
    this.setState({
      tooltip: {
        display: true,
        data: {
          key: e.target.getAttribute('data-key'),
          value: e.target.getAttribute('data-value')
        },
        pos: {
          x: e.target.getAttribute('cx'),
          y: e.target.getAttribute('cy')
        }
      }
    })
  }

  hideToolTip () {
    this.setState({
      tooltip: {
        display: false,
        data: {}
      }
    })
  }

  renderToolTip () {
    if (this.props.tooltipVisible) {
      return (
        <ToolTip tooltip={this.state.tooltip}>
          {this.props.tooltipContentType.map((type, index) => {
            if (type === 'up') {
              return (
                <g key={index}>
                  <polygon fill='#A676B2' points='38,-3 34,1 42,1' />
                  <text>
                    <tspan
                      className={type}
                      textAnchor='middle'
                      x='58px'
                      y='2px'
                      fontSize='11px'
                      fill='#A676B2'
                    >
                      {this.state.tooltip.data[type]}
                    </tspan>
                  </text>
                </g>
              )
            } else if (type === 'down') {
              return (
                <g key={index}>
                  <polygon fill='#A676B2' points='38,17 34,13 42,13' />
                  <text>
                    <tspan
                      className={type}
                      textAnchor='middle'
                      x='60px'
                      y='18px'
                      fontSize='11px'
                      fill='#A676B2'
                    >
                      {this.state.tooltip.data[type]}
                    </tspan>
                  </text>
                </g>
              )
            }
            return (
              <g key={index}>
                <text>
                  <tspan
                    className={type}
                    textAnchor='middle'
                    x='-20px'
                    y='15px'
                    fontSize='28px'
                    fill='#A676B2'
                  >
                    {this.state.tooltip.data[type]}
                  </tspan>
                </text>
              </g>
            )
          })}
        </ToolTip>
      )
    }
    return ''
  }

  render () {
    const {
      dotVisible,
      height,
      hideAxisX,
      hideAxisY,
      tooltipVisible,
      width,
      xDataType,
      yBuffer
    } = this.props
    const margin = { top: 5, right: 50, bottom: 20, left: 50 }
    const innerWidth = width - (margin.left + margin.right)
    const innerHeight = height - (margin.top + margin.bottom)
    const data = this.props.data
    let xAxis = null
    let xScale = null
    let xScaleAxis = null

    if (this.props.xDataType === 'date') {
      const parseDate = d3.timeParse('%m-%d-%Y %H:%M:%S')
      data.forEach(d => {
        d.x = parseDate(d.x)
      })
      xScale = ChartUtils.xScaleTime(data, width)
      xScaleAxis = ChartUtils.xScaleTime(data, width - 40)
      xAxis = d3
        .axisBottom()
        .scale(xScaleAxis)
        .tickValues(data.map(d => d.x))
        .ticks(5)
        .tickFormat(d3.timeFormat('%a'))
    } else {
      xScale = ChartUtils.xScaleLinear(data, width)
      xScaleAxis = ChartUtils.xScaleLinear(data, width - 40)
      xAxis = d3
        .axisBottom()
        .scale(xScaleAxis)
        .tickValues(data.map(d => d.x))
        .ticks(5)
    }

    const yScale = ChartUtils.yScaleLinear(data, innerHeight, yBuffer)

    let yAxis = d3
      .axisLeft()
      .scale(yScale)
      .ticks(5)

    const externalAttributes = filterAttributesFromProps(this.props)
    return (
      <div
        {...externalAttributes}
        className={`octagon area-chart__container ${this.props.className ||
          ''}`}
      >
        <svg width={width} height={innerHeight}>
          <g transform='translate(2, 4)'>
            <PlotArea
              {...this.props}
              data={data}
              xScale={xScale}
              yScale={yScale}
            />
            {hideAxisX ? (
              ''
            ) : (
              <Axis
                height={innerHeight}
                width={innerWidth - 10}
                axis={xAxis}
                axisType='x'
                orientation='bottom'
              />
            )}
            {hideAxisY ? (
              ''
            ) : (
              <Axis
                height={innerHeight}
                axis={yAxis}
                axisType='y'
                orientation='left'
              />
            )}
            {this.renderToolTip()}
            {dotVisible ? (
              <Dots
                data={data}
                showToolTip={this.showToolTip}
                hideToolTip={this.hideToolTip}
                xDataType={xDataType}
                xScale={xScale}
                yScale={yScale}
              />
            ) : (
              ''
            )}
            {tooltipVisible ? (
              <ChartOverlay
                data={data}
                height={innerHeight}
                hideToolTip={this.hideToolTip}
                mouseMove={this.mouseMove}
                width={width}
                xDataType={xDataType}
                xScale={xScale}
                yScale={yScale}
              />
            ) : (
              ''
            )}
          </g>
        </svg>
      </div>
    )
  }
}

AreaChart.propTypes = {
  data: PropTypes.array.isRequired,
  dotVisible: PropTypes.bool,
  height: PropTypes.number,
  hideAxisX: PropTypes.bool,
  hideAxisY: PropTypes.bool,
  tooltipContentType: PropTypes.array.isRequired,
  tooltipVisible: PropTypes.bool,
  width: PropTypes.number,
  xDataType: PropTypes.string.isRequired,
  yBuffer: PropTypes.number.isRequired,
  tooltipWidth: PropTypes.number,
  tooltipHeight: PropTypes.number
}

AreaChart.defaultProps = {
  color: '#00A4D8',
  dotVisible: true,
  height: 150,
  padding: 20,
  tooltipContentType: ['x', 'y'],
  tooltipVisible: true,
  tooltipWidth: 150,
  tooltipHeight: 40,
  width: 500,
  xDataType: 'number',
  yBuffer: 0
}

export default AreaChart
