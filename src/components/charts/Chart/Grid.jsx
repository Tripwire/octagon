import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'
import * as selection from 'd3-selection'

const d3 = Object.assign({}, selection)

class Grid extends React.Component {
  constructor (props) {
    super(props)
    this.renderGrid = this.renderGrid.bind(this)
  }

  componentDidMount () {
    this.renderGrid()
  }

  componentDidUpdate () {
    this.renderGrid()
  }

  renderGrid () {
    const node = ReactDOM.findDOMNode(this)
    d3.select(node).call(this.props.grid)
  }

  render () {
    const translate = `translate(0, ${this.props.height})`
    return (
      <g
        className='y-grid'
        transform={this.props.gridType === 'x' ? translate : ''}
      />
    )
  }
}

Grid.propTypes = {
  height: PropTypes.number,
  grid: PropTypes.func,
  gridType: PropTypes.oneOf(['x', 'y'])
}

export default Grid
