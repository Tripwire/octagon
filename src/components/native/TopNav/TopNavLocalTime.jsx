import React from 'react'

class TopNavLocalTime extends React.Component {
  constructor (props) {
    super(props)
    this.state = { date: props.date || new Date() }
  }

  componentDidMount () {
    if (this.props.date) return
    this.timerID = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount () {
    if (this.props.date) return
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({ date: new Date() })
  }

  render () {
    return (
      <span className='localTime'>{this.state.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
    )
  }
}

export default TopNavLocalTime
