import PropTypes from 'prop-types'
import React from 'react'
import Flexbox from 'flexbox-react'
import '../styles/components/pagination-control.css'

class PaginationControl extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isPrevPageValid: false,
      isNextPageValid: true,
      currentPage: 1,
      totalItems: props.totalItems,
      lastPage: Math.ceil(props.totalItems / props.perPage)
    }
    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
    this.validatePage = this.validatePage.bind(this)
    this.resetPagination = this.resetPagination.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.perPage !== this.props.perPage) {
      this.resetPagination()
    }
  }

  resetPagination () {
    this.setState({
      currentPage: 1,
      isPrevPageValid: false,
      isNextPageValid: true
    })
  }

  nextPage () {
    if (this.props.controlsDisabled) {
      return false
    }
    if (this.state.isNextPageValid) {
      const currentPage = this.state.currentPage
      this.props.navigateToPage(currentPage + 1)
      this.setState({ currentPage: currentPage + 1 }, this.validatePage)
    }
    return false
  }

  prevPage () {
    if (this.props.controlsDisabled) {
      return false
    }
    if (this.state.isPrevPageValid) {
      const currentPage = this.state.currentPage
      this.props.navigateToPage(currentPage - 1)
      this.setState({ currentPage: currentPage - 1 }, this.validatePage)
    }
    return false
  }

  validatePage () {
    const currentPage = this.state.currentPage
    this.setState({
      isNextPageValid: currentPage < this.state.lastPage,
      isPrevPageValid: currentPage > 1
    })
  }

  render () {
    let disabledClass = ''
    if (this.props.controlsDisabled) {
      disabledClass = 'disabled'
    }
    let currentCount = this.state.currentPage * this.props.perPage > this.state.totalItems ? this.state.totalItems : this.state.currentPage * this.props.perPage
    return (
      <Flexbox flexDirection='row' className='consoles__pagination'>
        <Flexbox className={`pagination__button pagination__prev ${disabledClass} ${this.state.isPrevPageValid ? '' : 'disabled'}`} onClick={this.prevPage}>
          <i className='arrow_carrot-left' aria-hidden='true' />
        </Flexbox>
        <Flexbox className='pagination__count' alignItems='center'>
          <span className='count__current'>{currentCount}</span>
          <span>of</span>
          <span className='count__total'>{this.state.totalItems}</span>
        </Flexbox>
        <Flexbox className={`pagination__button pagination__next ${disabledClass} ${this.state.isNextPageValid ? '' : 'disabled'}`} onClick={this.nextPage}>
          <i className='arrow_carrot-right' aria-hidden='true' />
        </Flexbox>
      </Flexbox>

    )
  }
}

PaginationControl.propTypes = {
  totalItems: PropTypes.number.isRequired,
  navigateToPage: PropTypes.func.isRequired,
  perPage: PropTypes.number.isRequired,
  controlsDisabled: PropTypes.bool
}

export default PaginationControl
