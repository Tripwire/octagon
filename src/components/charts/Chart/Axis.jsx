import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'
import * as axis from 'd3-axis'
import * as selection from 'd3-selection'

var d3 = Object.assign({}, axis, selection)

const { func, oneOf, number, string } = PropTypes

class Axis extends React.Component {
  constructor (props) {
    super(props)
    this.renderAxis = this.renderAxis.bind(this)
  }

  componentDidMount () {
    this.renderAxis()
  }

  componentDidUpdate () {
    this.renderAxis()
  }

  getTranslate () {
    const { orientation, height, width, zero } = this.props

    if (orientation === 'top') {
      return `translate(0, ${zero})`
    } else if (orientation === 'bottom') {
      return `translate(0, ${zero === 0 ? height : zero})`
    } else if (orientation === 'left') {
      return `translate(${zero}, 0)`
    } else if (orientation === 'right') {
      return `translate(${zero === 0 ? width : zero}, 0)`
    }
    return ''
  }

  renderAxis () {
    const node = ReactDOM.findDOMNode(this)
    d3.select(node).call(this.props.axis)
  }

  render () {
    const translate = this.getTranslate()
    return (
      <g
        className={this.props.className}
        transform={translate}
       />
    )
  }
}

Axis.propTypes = {
  className: string,
  height: number,
  width: number,
  orientation: oneOf(['top', 'bottom', 'left', 'right']).isRequired,
  zero: number,
  axisType: oneOf(['x', 'y']),
  axis: func.isRequired
}

Axis.defaultProps = {
  className: 'axis',
  zero: 0,
  width: 1
}

export default Axis
