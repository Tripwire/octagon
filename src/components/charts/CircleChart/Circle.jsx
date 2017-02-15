import React from 'react';
import * as d3 from 'd3';

const twoPi = Math.PI * 2;
// const formatPercent = d3.format('.0%');

const CircleChart = (props) => {
  const { color, border, endPercent, radius, padding, backgroundOpacity } = props;
  const boxSize = (radius + padding) * 2;
  const endPercentValue = props.endPercentValue;

  const arc = d3.arc()
            .startAngle(0)
            .innerRadius(radius)
            .outerRadius(radius - border);
  const arcbg = d3.arc()
            .startAngle(0)
            .innerRadius(radius-4)
            .outerRadius(radius - 1 );
  return (
    <div>
      <svg width={boxSize} height={boxSize}>
        <g transform="translate(55,55)">
          <g className="progress-meter">
            <path
              className="background"
              fill="#8faec1"
              fillOpacity=".5"
              d={arcbg.endAngle(twoPi)()}
            />
            <path
              className="foreground"
              fill={color}
              fillOpacity="1"
              d={arc.endAngle(twoPi * endPercent)()}
            />
            <text
              className="current-progress"
              fill={color}
              textAnchor="middle"
              dy=".35em"
              fontSize="2.5em"
              fontWeight="lighter"
            >
              {endPercentValue}
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};

CircleChart.propTypes = {
  color: React.PropTypes.string,
  border: React.PropTypes.number,
  endPercent: React.PropTypes.number,
  radius: React.PropTypes.number,
  padding: React.PropTypes.number,
  endPercentValue: React.PropTypes.string,
  backgroundOpacity: React.PropTypes.number,
};

CircleChart.defaultProps = {
  color: '#4898da',
  border: 5,
  padding: 10,
  endPercent: 0.45,
  radius: 45,
  backgroundOpacity: 0.5,
};

export default CircleChart;
