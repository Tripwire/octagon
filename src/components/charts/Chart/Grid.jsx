import React from 'react';
import ReactDOM from 'react-dom';
var d3 = Object.assign({}, require('d3-selection'))

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.renderGrid = this.renderGrid.bind(this);
  }

  componentDidMount() {
    this.renderGrid();
  }

  componentDidUpdate() {
    this.renderGrid();
  }

  renderGrid() {
    const node = ReactDOM.findDOMNode(this);
    d3.select(node).call(this.props.grid);
  }

  render() {
    const translate = `translate(0, ${this.props.height})`;
    return (
      <g className="y-grid" transform={this.props.gridType === 'x' ? translate : ''}></g>
    );
  }
}

Grid.propTypes = {
  height: React.PropTypes.number,
  grid: React.PropTypes.func,
  gridType: React.PropTypes.oneOf(['x', 'y']),
};

export default Grid;
