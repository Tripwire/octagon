import React, { PropTypes } from 'react';
import Rect from './Rect';
import Immutable from 'immutable';
import ToolTip from './BarChartTooltip';
import * as ChartUtils from '../Chart/utils';
var d3 = Object.assign({}, require('d3-time-format'))

const { array, number, object, string } = PropTypes;

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltip: {
        display: false,
        color: null,
        data: { key: '', value: '' },
        pos: { x: '', y: '' },
      },
    };
    this.showToolTip = this.showToolTip.bind(this);
    this.hideToolTip = this.hideToolTip.bind(this);
  }

  showToolTip(e) {
    this.setState({
      tooltip: {
        display: true,
        color: e.target.getAttribute('fill'),
        data: {
          key: e.target.getAttribute('data-key'),
          value: e.target.getAttribute('data-value'),
        },
        pos: {
          x: e.target.getAttribute('cx'),
          y: e.target.getAttribute('cy'),
        },
      },
    });
  }

  hideToolTip() {
    this.setState({
      tooltip: {
        display: false,
        data: { key: '', value: '' },
      },
    });
  }

  render() {
    const { barPadding, borderRadius, height, margin, width, xDataType } = this.props;
    const innerWidth = width - (margin.left + margin.right);
    const innerHeight = height - (margin.top + margin.bottom);
    const transform = `translate(-${margin.left}, ${margin.top})`;
    const data = Immutable.fromJS(this.props.data).toJS(); // copy data from props
    let xScale = null;

    // const xScale = ChartUtils.xScaleBand(data, innerWidth, barPadding);
    if (this.props.xDataType === 'date') {
      const parseDate = d3.timeParse('%m-%d-%Y %H:%M:%S');
      data.forEach((d) => {
        d.x = parseDate(d.x);
      });
    }
    xScale = ChartUtils.xScaleBand(data, innerWidth, barPadding);
    const yScale = ChartUtils.yScaleLinear(data, innerHeight, 0);

    // const rectBackground = (this.props.data).map((d, i) => {
    //   return (
    //     <rect
    //       fill="#58657f"
    //       rx={borderRadius}
    //       ry={borderRadius}
    //       key={i}
    //       x={xScale(d[xData])}
    //       y={margin.top - margin.bottom}
    //       height={innerHeight}
    //       width={xScale.bandwidth()}
    //     />
    //   );
    // });

    return (
      <div className="bar-chart__container svg-overflow-visible">
        <svg width={width} height={height}>
          <g transform={transform}>
            <Rect
              borderRadius={borderRadius}
              data={data}
              fill="#4898da"
              hideToolTip={this.hideToolTip}
              innerHeight={innerHeight}
              showToolTip={this.showToolTip}
              transform={transform}
              xScale={xScale}
              yScale={yScale}
              xDataType={xDataType}
              xDataType="date"
            />
            <ToolTip tooltip={this.state.tooltip} yScale={yScale} />
          </g>
        </svg>
      </div>
    );
  }
}

BarChart.propTypes = {
  barPadding: number,
  borderRadius: number,
  data: array.isRequired,
  height: number,
  margin: object,
  width: number,
  xDataType: string,
};

BarChart.defaultProps = {
  barPadding: 0.1,
  borderRadius: 3,
  height: 70,
  margin: { top: 0, right: 5, bottom: -5, left: 10 },
  width: 200,
  xDataType: 'month',
};

export default BarChart;
