import React, { PropTypes } from 'react';

const ToolTipContent = (props) => {
  const { visibility, transformText, data, style } = props;
  return (
    <text is visibility={visibility} transform={transformText}>
      <tspan is x="0" text-anchor="middle" font-size="15px" fill="#ffffff">{props.tooltip.data.key}</tspan>
      <tspan is x="0" text-anchor="middle" dy="25" font-size="20px" fill="#a9f3ff">{`${props.tooltip.data.value}`}</tspan>
    </text>
  );
};

export default ToolTipContent;

